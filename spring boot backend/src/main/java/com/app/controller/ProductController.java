package com.app.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import java.awt.print.Pageable;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import javax.servlet.ServletContext;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.model.Product;
import com.app.repo.ProductRepo;
import com.app.service.ProductService;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sun.xml.bind.api.impl.NameConverter.Standard;

@RestController
@CrossOrigin(origins="http://localhost:4200")  
@RequestMapping(value = "/product")
public class ProductController {
	@Autowired 
	private ProductService productService;
	@Autowired
	private ProductRepo productRepo;
	
	@Autowired ServletContext context;
	
	@PostMapping("/add")
    public Product addProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }
	
	
	
//	@PostMapping(value = "/create", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
//	public ResponseEntity<Product> create(@RequestBody Product product,
//			@RequestParam(name = "file", required = false) MultipartFile file) throws IOException {
//		System.out.println(file.getOriginalFilename());
//		System.out.println(file.getBytes());
//		System.out.println(file.getSize());
//		System.out.println(file.getInputStream());
//		System.out.println(file.getContentType());
//		System.out.println(file.getResource());
//		
//		try {
//			this.upload(file, "");
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		
//		com.app.model.ResponseEntity<Product> res = new ResponseEntity<Product>();
//
//		return res;
//		
//		
//		
//		
//	}
//	
//	private void upload(MultipartFile file, String folder) throws IOException, Exception {
//		if (file.getInputStream() != null) {
//			try {
//				String filePath = file.getOriginalFilename();
//				String realPath = context.getRealPath("upload/" + folder);
//				System.out.println("[Server] file Path : " + filePath);
//				System.out.println("[Server] Real Path: " + realPath);
//				File roothDir = new File(realPath);
//				if (!roothDir.exists()) {
//					roothDir.mkdirs(); // Tạo thư mục upload nếu chưa tồn tại
//				}
//				File serveFile = new File(roothDir.getAbsolutePath() + File.separator + filePath);
//				BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serveFile));
//				stream.write(file.getBytes());
//				stream.close();
//				System.out.println("Upload Success");
//			} catch (Exception e) {
//				System.out.println("Upload Fail");
//			}
//
//		}
//	}
	
	
	

	
	@PostMapping("/file")
	public ResponseEntity<Product> add(@RequestParam("file") MultipartFile file, @RequestParam("pro") String pros) throws JsonParseException, JsonMappingException, IOException {
		Product product = new ObjectMapper().readValue(pros, Product.class);
		String path_Directory = "D:\\ide-eclipse\\workspace\\demo\\src\\main\\webapp\\uploadpro";
		
		String filename = file.getOriginalFilename();
		Files.copy(file.getInputStream(), Paths.get(path_Directory + File.separator + file.getOriginalFilename()), StandardCopyOption.REPLACE_EXISTING);
		
		product.setImage(filename);
		
		Product prud = productService.saveProduct(product);
		
		
		return new ResponseEntity<>(prud, HttpStatus.CREATED);
	}
	
	@GetMapping("/getImage/{filename}")
	public ResponseEntity<byte[]> getImage(@PathVariable("filename") String filename){
		String path_Directory = "D:\\ide-eclipse\\workspace\\demo\\src\\main\\webapp\\uploadpro\\";
		byte[] image = new byte[0];
		try {
			image = FileUtils.readFileToByteArray(new File(path_Directory + filename));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(image);
		
	}


    @GetMapping("/all")
    public Page<Product> showPage(@RequestParam(name="pageNo", required = false, defaultValue = "0") int pageNo, @RequestParam(name="pageSize", required = false, defaultValue = "3") int pageSize){
    	return productService.getProduct(pageNo, pageSize);
    }
    
    @GetMapping("/list")
    public List<Product> list4Product(){
    	return productService.get4Products();
    }
    
    @GetMapping("/listDESC")
    public List<Product> list4ProductDESC(){
    	return productService.get4ProductsDESC();
    }
    
    @GetMapping("/sale")
    public List<Product> listProductSale(){
    	return productService.getProductsSale();
    }
    
    @GetMapping("/{id}")
    public Product findProductById(@PathVariable int id) {
        return productService.getProductById(id);
    }
    
    @GetMapping("/getProductByCategory/{categoryId}")
    public List<Product> findProductByCategoryId(@PathVariable("categoryId") int categoryId) {
        return productService.getProductByCategoryId(categoryId);
        
    }
    
    @GetMapping("/get3ProductByCategory/{categoryId}")
    public List<Product> find3ProductByCategoryId(@PathVariable("categoryId") int categoryId) {
        return productService.get3ProductByCategoryId(categoryId);
        
    }

    @GetMapping("/findByName/{search}")
    public List<Product> findProductByName(@PathVariable("search") String search) {
        return (List<Product>) productService.getProductByName(search);
    }


    @DeleteMapping("/delete/{id}")
    public String deleteProduct(@PathVariable int id) {
        return productService.deleteProduct(id);
    }
	
    @PutMapping("/update/{id}")
    public Product updateProduct(@RequestBody Product product) {
        return productService.updateProduct(product);
    }
    
    @GetMapping("/{min}/{max}")
    public List<Product> findByPriceBetween(@PathVariable("min") int min, @PathVariable("max") int max){
    	return productService.findByPriceBetween(min, max);
    }
}
