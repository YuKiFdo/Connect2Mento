import './MentorForm.css'
import React, { useState } from 'react';
import HeaderContent from '../Components/HeaderContent/HeaderContent'

const MentorForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileUpload = (event) => {
        setSelectedFile(event.target.files[0]);
    };

  return (
    
    <div id="wrapper">
        <HeaderContent/>

        <div className="apply-mentor-container">
            <div className="form-header">
                <h2>Apply as a mentor</h2>
            </div>
            
            <div className="mentor-form">
                <div className="mentor-form-description">
                    <p>
                        Lovely to see you! Filling out the form only takes a couple of minutes. We'd love to learn more
                        about your background and the ins-and-outs of why you’d like to become a mentor. Keep things personal 
                        and talk directly to us and your mentees. We don’t need jargon and polished cover letters here!
                    
                        You agree to our code of conduct and the mentor agreement by sending the form, so be sure to have a look at those.
                    </p>
                </div>

                <div className="step active">About you</div>

                <form className="mentor-apply-form">
                    <div className="photo-upload-section">
                        <label class="upload" htmlFor="photo-upload">Photo</label>
                        <div className="photo-upload">
                            <input type="file" id="photo-upload" onChange={handleFileUpload} />
                            {selectedFile ? <span>{selectedFile.name}</span> : <span>Upload Photo</span>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>First name</label>
                            <input type="text" placeholder="First name" />
                        </div>
                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" placeholder="Last name" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label>Choose a Password</label>
                            <input type="password" placeholder="Choose a Password" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Job title</label>
                            <input type="text" placeholder="Job title" />
                        </div>
                        <div className="form-group">
                            <label>Company (optional)</label>
                            <input type="text" placeholder="Company" />
                        </div>
                    </div>

                    <div className="form-groups">
                        <label>Location</label>
                        <select>
                            <option value="">Select your location</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas, The">Bahamas, The</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin (Dahomey)">Benin (Dahomey)</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Brazil">Brazil</option>
                            <option value="Brunei">Brunei</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso (Upper Volta)">Burkina Faso (Upper Volta)</option>
                            <option value="Burma">Burma</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cabo Verde">Cabo Verde</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cayman Islands, The">Cayman Islands, The</option>
                            <option value="Central African Republic">Central African Republic</option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cote d’Ivoire (Ivory Coast)">Cote d’Ivoire (Ivory Coast)</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czechia">Czechia</option>
                            <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">Dominican Republic</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Eswatini">Eswatini</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia, The">Gambia, The</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Greece">Greece</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran">Iran</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kosovo">Kosovo</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Laos">Laos</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libya">Libya</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">Marshall Islands</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Micronesia">Micronesia</option>
                            <option value="Moldova">Moldova</option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands, The">Netherlands, The</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="North Macedonia">North Macedonia</option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">Papua New Guinea</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Republic of Korea (South Korea)">Republic of Korea (South Korea)</option>
                            <option value="Republic of the Congo">Republic of the Congo</option>
                            <option value="Romania">Romania</option>
                            <option value="Russia">Russia</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                            <option value="Saint Lucia">Saint Lucia</option>
                            <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                            <option value="Samoa">Samoa</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra Leone">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands, The">Solomon Islands, The</option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Sudan">South Sudan</option>
                            <option value="Spain">Spain</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syria">Syria</option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Tanzania">Tanzania</option>
                        </select>
                    </div>

                    <div className="step">Profile</div>
                    <div className="form-groups">
                        <label>Category</label>
                        <select>
                            <option value="">Select your category</option>
                            <option value="Afghanistan">-------------</option>
                            <option value="Albania">Engineering & Data</option>
                            <option value="Albania">UX & Design</option>
                            <option value="Albania">Buisness Management</option>
                            <option value="Albania">Product Marketing</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Skills</label>
                            <input type="text" placeholder="Add a new skill" />
                        </div>
                        <div className="form-group">
                            <label>Twitter Handle (optional)</label>
                            <input type="text" placeholder="" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Linkedin URL</label>
                            <input type="text" placeholder="" />
                        </div>
                        <div className="form-group">
                            <label>Personal Website (optional)</label>
                            <input type="text" placeholder="" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-groupbio">
                            <label>Bio</label>
                            <input type="text" placeholder="" />
                        </div>
                    </div>



                    
                    <div className="step">Experience</div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Intro Vedio (optional)</label>
                            <input type="text" placeholder="" />
                        </div>
                        <div className="form-group">
                            <label>Featured Article (optional)</label>
                            <input type="text" placeholder="" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-groupbio">
                            <label>Why do you want to become a mentor?</label>
                            <input type="text" placeholder="" />
                        </div>
                    </div>

                    <button type="submit" className="next-step-button">Submit Application</button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default MentorForm;