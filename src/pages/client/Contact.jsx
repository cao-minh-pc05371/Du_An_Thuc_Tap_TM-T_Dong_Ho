const Contact = () => {
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Liên hệ với chúng tôi</h1>
      <p className="text-muted mb-4">
        Nếu bạn có bất kỳ câu hỏi nào về sản phẩm, đơn hàng hoặc cần hỗ trợ, vui lòng liên hệ qua biểu mẫu bên dưới.
      </p>

      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Họ và tên</label>
          <input type="text" className="form-control" id="name" placeholder="Nguyễn Văn A" />
        </div>

        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="email@example.com" />
        </div>

        <div className="col-12">
          <label htmlFor="message" className="form-label">Nội dung</label>
          <textarea className="form-control" id="message" rows="5" placeholder="Nhập nội dung liên hệ..."></textarea>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">Gửi liên hệ</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
