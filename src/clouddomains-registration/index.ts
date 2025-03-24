/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClouddomainsRegistrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#contact_notices ClouddomainsRegistration#contact_notices}
  */
  readonly contactNotices?: string[];
  /**
  * Required. The domain name. Unicode domain names must be expressed in Punycode format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#domain_name ClouddomainsRegistration#domain_name}
  */
  readonly domainName: string;
  /**
  * The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#domain_notices ClouddomainsRegistration#domain_notices}
  */
  readonly domainNotices?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#id ClouddomainsRegistration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of labels associated with the Registration.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#labels ClouddomainsRegistration#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#location ClouddomainsRegistration#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#project ClouddomainsRegistration#project}
  */
  readonly project?: string;
  /**
  * contact_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#contact_settings ClouddomainsRegistration#contact_settings}
  */
  readonly contactSettings: ClouddomainsRegistrationContactSettings;
  /**
  * dns_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#dns_settings ClouddomainsRegistration#dns_settings}
  */
  readonly dnsSettings?: ClouddomainsRegistrationDnsSettings;
  /**
  * management_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#management_settings ClouddomainsRegistration#management_settings}
  */
  readonly managementSettings?: ClouddomainsRegistrationManagementSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#timeouts ClouddomainsRegistration#timeouts}
  */
  readonly timeouts?: ClouddomainsRegistrationTimeouts;
  /**
  * yearly_price block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#yearly_price ClouddomainsRegistration#yearly_price}
  */
  readonly yearlyPrice: ClouddomainsRegistrationYearlyPrice;
}
export interface ClouddomainsRegistrationContactSettingsAdminContactPostalAddress {
  /**
  * Unstructured address lines describing the lower levels of an address.
  * Because values in addressLines do not have type information and may sometimes contain multiple values in a single
  * field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be
  * "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language
  * is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way,
  * the most specific line of an address can be selected based on the language.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#address_lines ClouddomainsRegistration#address_lines}
  */
  readonly addressLines?: string[];
  /**
  * Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state,
  * a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community
  * (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland
  * this should be left unpopulated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#administrative_area ClouddomainsRegistration#administrative_area}
  */
  readonly administrativeArea?: string;
  /**
  * Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world
  * where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#locality ClouddomainsRegistration#locality}
  */
  readonly locality?: string;
  /**
  * The name of the organization at the address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#organization ClouddomainsRegistration#organization}
  */
  readonly organization?: string;
  /**
  * Postal code of the address. Not all countries use or require postal codes to be present, but where they are used,
  * they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#postal_code ClouddomainsRegistration#postal_code}
  */
  readonly postalCode?: string;
  /**
  * The recipient at the address. This field may, under certain circumstances, contain multiline information. For example,
  * it might contain "care of" information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#recipients ClouddomainsRegistration#recipients}
  */
  readonly recipients?: string[];
  /**
  * Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to
  * ensure the value is correct. See https://cldr.unicode.org/ and
  * https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#region_code ClouddomainsRegistration#region_code}
  */
  readonly regionCode: string;
}

export function clouddomainsRegistrationContactSettingsAdminContactPostalAddressToTerraform(struct?: ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference | ClouddomainsRegistrationContactSettingsAdminContactPostalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_lines: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addressLines),
    administrative_area: cdktf.stringToTerraform(struct!.administrativeArea),
    locality: cdktf.stringToTerraform(struct!.locality),
    organization: cdktf.stringToTerraform(struct!.organization),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipients),
    region_code: cdktf.stringToTerraform(struct!.regionCode),
  }
}


export function clouddomainsRegistrationContactSettingsAdminContactPostalAddressToHclTerraform(struct?: ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference | ClouddomainsRegistrationContactSettingsAdminContactPostalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_lines: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addressLines),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    administrative_area: {
      value: cdktf.stringToHclTerraform(struct!.administrativeArea),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locality: {
      value: cdktf.stringToHclTerraform(struct!.locality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postal_code: {
      value: cdktf.stringToHclTerraform(struct!.postalCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipients),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    region_code: {
      value: cdktf.stringToHclTerraform(struct!.regionCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddomainsRegistrationContactSettingsAdminContactPostalAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressLines !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLines = this._addressLines;
    }
    if (this._administrativeArea !== undefined) {
      hasAnyValues = true;
      internalValueResult.administrativeArea = this._administrativeArea;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._recipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipients = this._recipients;
    }
    if (this._regionCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionCode = this._regionCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddomainsRegistrationContactSettingsAdminContactPostalAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressLines = undefined;
      this._administrativeArea = undefined;
      this._locality = undefined;
      this._organization = undefined;
      this._postalCode = undefined;
      this._recipients = undefined;
      this._regionCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressLines = value.addressLines;
      this._administrativeArea = value.administrativeArea;
      this._locality = value.locality;
      this._organization = value.organization;
      this._postalCode = value.postalCode;
      this._recipients = value.recipients;
      this._regionCode = value.regionCode;
    }
  }

  // address_lines - computed: false, optional: true, required: false
  private _addressLines?: string[]; 
  public get addressLines() {
    return this.getListAttribute('address_lines');
  }
  public set addressLines(value: string[]) {
    this._addressLines = value;
  }
  public resetAddressLines() {
    this._addressLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLinesInput() {
    return this._addressLines;
  }

  // administrative_area - computed: false, optional: true, required: false
  private _administrativeArea?: string; 
  public get administrativeArea() {
    return this.getStringAttribute('administrative_area');
  }
  public set administrativeArea(value: string) {
    this._administrativeArea = value;
  }
  public resetAdministrativeArea() {
    this._administrativeArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrativeAreaInput() {
    return this._administrativeArea;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // postal_code - computed: false, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // recipients - computed: false, optional: true, required: false
  private _recipients?: string[]; 
  public get recipients() {
    return this.getListAttribute('recipients');
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  public resetRecipients() {
    this._recipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }

  // region_code - computed: false, optional: false, required: true
  private _regionCode?: string; 
  public get regionCode() {
    return this.getStringAttribute('region_code');
  }
  public set regionCode(value: string) {
    this._regionCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionCodeInput() {
    return this._regionCode;
  }
}
export interface ClouddomainsRegistrationContactSettingsAdminContact {
  /**
  * Required. Email address of the contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#email ClouddomainsRegistration#email}
  */
  readonly email: string;
  /**
  * Fax number of the contact in international format. For example, "+1-800-555-0123".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#fax_number ClouddomainsRegistration#fax_number}
  */
  readonly faxNumber?: string;
  /**
  * Required. Phone number of the contact in international format. For example, "+1-800-555-0123".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#phone_number ClouddomainsRegistration#phone_number}
  */
  readonly phoneNumber: string;
  /**
  * postal_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#postal_address ClouddomainsRegistration#postal_address}
  */
  readonly postalAddress: ClouddomainsRegistrationContactSettingsAdminContactPostalAddress;
}

export function clouddomainsRegistrationContactSettingsAdminContactToTerraform(struct?: ClouddomainsRegistrationContactSettingsAdminContactOutputReference | ClouddomainsRegistrationContactSettingsAdminContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    fax_number: cdktf.stringToTerraform(struct!.faxNumber),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
    postal_address: clouddomainsRegistrationContactSettingsAdminContactPostalAddressToTerraform(struct!.postalAddress),
  }
}


export function clouddomainsRegistrationContactSettingsAdminContactToHclTerraform(struct?: ClouddomainsRegistrationContactSettingsAdminContactOutputReference | ClouddomainsRegistrationContactSettingsAdminContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fax_number: {
      value: cdktf.stringToHclTerraform(struct!.faxNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_number: {
      value: cdktf.stringToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postal_address: {
      value: clouddomainsRegistrationContactSettingsAdminContactPostalAddressToHclTerraform(struct!.postalAddress),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddomainsRegistrationContactSettingsAdminContactPostalAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddomainsRegistrationContactSettingsAdminContactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddomainsRegistrationContactSettingsAdminContact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._faxNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.faxNumber = this._faxNumber;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    if (this._postalAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalAddress = this._postalAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddomainsRegistrationContactSettingsAdminContact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._faxNumber = undefined;
      this._phoneNumber = undefined;
      this._postalAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._faxNumber = value.faxNumber;
      this._phoneNumber = value.phoneNumber;
      this._postalAddress.internalValue = value.postalAddress;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // fax_number - computed: false, optional: true, required: false
  private _faxNumber?: string; 
  public get faxNumber() {
    return this.getStringAttribute('fax_number');
  }
  public set faxNumber(value: string) {
    this._faxNumber = value;
  }
  public resetFaxNumber() {
    this._faxNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faxNumberInput() {
    return this._faxNumber;
  }

  // phone_number - computed: false, optional: false, required: true
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // postal_address - computed: false, optional: false, required: true
  private _postalAddress = new ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference(this, "postal_address");
  public get postalAddress() {
    return this._postalAddress;
  }
  public putPostalAddress(value: ClouddomainsRegistrationContactSettingsAdminContactPostalAddress) {
    this._postalAddress.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postalAddressInput() {
    return this._postalAddress.internalValue;
  }
}
export interface ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress {
  /**
  * Unstructured address lines describing the lower levels of an address.
  * Because values in addressLines do not have type information and may sometimes contain multiple values in a single
  * field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be
  * "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language
  * is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way,
  * the most specific line of an address can be selected based on the language.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#address_lines ClouddomainsRegistration#address_lines}
  */
  readonly addressLines?: string[];
  /**
  * Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state,
  * a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community
  * (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland
  * this should be left unpopulated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#administrative_area ClouddomainsRegistration#administrative_area}
  */
  readonly administrativeArea?: string;
  /**
  * Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world
  * where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#locality ClouddomainsRegistration#locality}
  */
  readonly locality?: string;
  /**
  * The name of the organization at the address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#organization ClouddomainsRegistration#organization}
  */
  readonly organization?: string;
  /**
  * Postal code of the address. Not all countries use or require postal codes to be present, but where they are used,
  * they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#postal_code ClouddomainsRegistration#postal_code}
  */
  readonly postalCode?: string;
  /**
  * The recipient at the address. This field may, under certain circumstances, contain multiline information. For example,
  * it might contain "care of" information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#recipients ClouddomainsRegistration#recipients}
  */
  readonly recipients?: string[];
  /**
  * Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to
  * ensure the value is correct. See https://cldr.unicode.org/ and
  * https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#region_code ClouddomainsRegistration#region_code}
  */
  readonly regionCode: string;
}

export function clouddomainsRegistrationContactSettingsRegistrantContactPostalAddressToTerraform(struct?: ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference | ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_lines: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addressLines),
    administrative_area: cdktf.stringToTerraform(struct!.administrativeArea),
    locality: cdktf.stringToTerraform(struct!.locality),
    organization: cdktf.stringToTerraform(struct!.organization),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipients),
    region_code: cdktf.stringToTerraform(struct!.regionCode),
  }
}


export function clouddomainsRegistrationContactSettingsRegistrantContactPostalAddressToHclTerraform(struct?: ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference | ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_lines: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addressLines),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    administrative_area: {
      value: cdktf.stringToHclTerraform(struct!.administrativeArea),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locality: {
      value: cdktf.stringToHclTerraform(struct!.locality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postal_code: {
      value: cdktf.stringToHclTerraform(struct!.postalCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipients),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    region_code: {
      value: cdktf.stringToHclTerraform(struct!.regionCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressLines !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLines = this._addressLines;
    }
    if (this._administrativeArea !== undefined) {
      hasAnyValues = true;
      internalValueResult.administrativeArea = this._administrativeArea;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._recipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipients = this._recipients;
    }
    if (this._regionCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionCode = this._regionCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressLines = undefined;
      this._administrativeArea = undefined;
      this._locality = undefined;
      this._organization = undefined;
      this._postalCode = undefined;
      this._recipients = undefined;
      this._regionCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressLines = value.addressLines;
      this._administrativeArea = value.administrativeArea;
      this._locality = value.locality;
      this._organization = value.organization;
      this._postalCode = value.postalCode;
      this._recipients = value.recipients;
      this._regionCode = value.regionCode;
    }
  }

  // address_lines - computed: false, optional: true, required: false
  private _addressLines?: string[]; 
  public get addressLines() {
    return this.getListAttribute('address_lines');
  }
  public set addressLines(value: string[]) {
    this._addressLines = value;
  }
  public resetAddressLines() {
    this._addressLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLinesInput() {
    return this._addressLines;
  }

  // administrative_area - computed: false, optional: true, required: false
  private _administrativeArea?: string; 
  public get administrativeArea() {
    return this.getStringAttribute('administrative_area');
  }
  public set administrativeArea(value: string) {
    this._administrativeArea = value;
  }
  public resetAdministrativeArea() {
    this._administrativeArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrativeAreaInput() {
    return this._administrativeArea;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // postal_code - computed: false, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // recipients - computed: false, optional: true, required: false
  private _recipients?: string[]; 
  public get recipients() {
    return this.getListAttribute('recipients');
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  public resetRecipients() {
    this._recipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }

  // region_code - computed: false, optional: false, required: true
  private _regionCode?: string; 
  public get regionCode() {
    return this.getStringAttribute('region_code');
  }
  public set regionCode(value: string) {
    this._regionCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionCodeInput() {
    return this._regionCode;
  }
}
export interface ClouddomainsRegistrationContactSettingsRegistrantContact {
  /**
  * Required. Email address of the contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#email ClouddomainsRegistration#email}
  */
  readonly email: string;
  /**
  * Fax number of the contact in international format. For example, "+1-800-555-0123".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#fax_number ClouddomainsRegistration#fax_number}
  */
  readonly faxNumber?: string;
  /**
  * Required. Phone number of the contact in international format. For example, "+1-800-555-0123".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#phone_number ClouddomainsRegistration#phone_number}
  */
  readonly phoneNumber: string;
  /**
  * postal_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#postal_address ClouddomainsRegistration#postal_address}
  */
  readonly postalAddress: ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress;
}

export function clouddomainsRegistrationContactSettingsRegistrantContactToTerraform(struct?: ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference | ClouddomainsRegistrationContactSettingsRegistrantContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    fax_number: cdktf.stringToTerraform(struct!.faxNumber),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
    postal_address: clouddomainsRegistrationContactSettingsRegistrantContactPostalAddressToTerraform(struct!.postalAddress),
  }
}


export function clouddomainsRegistrationContactSettingsRegistrantContactToHclTerraform(struct?: ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference | ClouddomainsRegistrationContactSettingsRegistrantContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fax_number: {
      value: cdktf.stringToHclTerraform(struct!.faxNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_number: {
      value: cdktf.stringToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postal_address: {
      value: clouddomainsRegistrationContactSettingsRegistrantContactPostalAddressToHclTerraform(struct!.postalAddress),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddomainsRegistrationContactSettingsRegistrantContact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._faxNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.faxNumber = this._faxNumber;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    if (this._postalAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalAddress = this._postalAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddomainsRegistrationContactSettingsRegistrantContact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._faxNumber = undefined;
      this._phoneNumber = undefined;
      this._postalAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._faxNumber = value.faxNumber;
      this._phoneNumber = value.phoneNumber;
      this._postalAddress.internalValue = value.postalAddress;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // fax_number - computed: false, optional: true, required: false
  private _faxNumber?: string; 
  public get faxNumber() {
    return this.getStringAttribute('fax_number');
  }
  public set faxNumber(value: string) {
    this._faxNumber = value;
  }
  public resetFaxNumber() {
    this._faxNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faxNumberInput() {
    return this._faxNumber;
  }

  // phone_number - computed: false, optional: false, required: true
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // postal_address - computed: false, optional: false, required: true
  private _postalAddress = new ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference(this, "postal_address");
  public get postalAddress() {
    return this._postalAddress;
  }
  public putPostalAddress(value: ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress) {
    this._postalAddress.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postalAddressInput() {
    return this._postalAddress.internalValue;
  }
}
export interface ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress {
  /**
  * Unstructured address lines describing the lower levels of an address.
  * Because values in addressLines do not have type information and may sometimes contain multiple values in a single
  * field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be
  * "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language
  * is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way,
  * the most specific line of an address can be selected based on the language.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#address_lines ClouddomainsRegistration#address_lines}
  */
  readonly addressLines?: string[];
  /**
  * Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state,
  * a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community
  * (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland
  * this should be left unpopulated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#administrative_area ClouddomainsRegistration#administrative_area}
  */
  readonly administrativeArea?: string;
  /**
  * Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world
  * where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#locality ClouddomainsRegistration#locality}
  */
  readonly locality?: string;
  /**
  * The name of the organization at the address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#organization ClouddomainsRegistration#organization}
  */
  readonly organization?: string;
  /**
  * Postal code of the address. Not all countries use or require postal codes to be present, but where they are used,
  * they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#postal_code ClouddomainsRegistration#postal_code}
  */
  readonly postalCode?: string;
  /**
  * The recipient at the address. This field may, under certain circumstances, contain multiline information. For example,
  * it might contain "care of" information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#recipients ClouddomainsRegistration#recipients}
  */
  readonly recipients?: string[];
  /**
  * Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to
  * ensure the value is correct. See https://cldr.unicode.org/ and
  * https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#region_code ClouddomainsRegistration#region_code}
  */
  readonly regionCode: string;
}

export function clouddomainsRegistrationContactSettingsTechnicalContactPostalAddressToTerraform(struct?: ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference | ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_lines: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addressLines),
    administrative_area: cdktf.stringToTerraform(struct!.administrativeArea),
    locality: cdktf.stringToTerraform(struct!.locality),
    organization: cdktf.stringToTerraform(struct!.organization),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipients),
    region_code: cdktf.stringToTerraform(struct!.regionCode),
  }
}


export function clouddomainsRegistrationContactSettingsTechnicalContactPostalAddressToHclTerraform(struct?: ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference | ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_lines: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addressLines),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    administrative_area: {
      value: cdktf.stringToHclTerraform(struct!.administrativeArea),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locality: {
      value: cdktf.stringToHclTerraform(struct!.locality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postal_code: {
      value: cdktf.stringToHclTerraform(struct!.postalCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipients),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    region_code: {
      value: cdktf.stringToHclTerraform(struct!.regionCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressLines !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLines = this._addressLines;
    }
    if (this._administrativeArea !== undefined) {
      hasAnyValues = true;
      internalValueResult.administrativeArea = this._administrativeArea;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._recipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipients = this._recipients;
    }
    if (this._regionCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionCode = this._regionCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressLines = undefined;
      this._administrativeArea = undefined;
      this._locality = undefined;
      this._organization = undefined;
      this._postalCode = undefined;
      this._recipients = undefined;
      this._regionCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressLines = value.addressLines;
      this._administrativeArea = value.administrativeArea;
      this._locality = value.locality;
      this._organization = value.organization;
      this._postalCode = value.postalCode;
      this._recipients = value.recipients;
      this._regionCode = value.regionCode;
    }
  }

  // address_lines - computed: false, optional: true, required: false
  private _addressLines?: string[]; 
  public get addressLines() {
    return this.getListAttribute('address_lines');
  }
  public set addressLines(value: string[]) {
    this._addressLines = value;
  }
  public resetAddressLines() {
    this._addressLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLinesInput() {
    return this._addressLines;
  }

  // administrative_area - computed: false, optional: true, required: false
  private _administrativeArea?: string; 
  public get administrativeArea() {
    return this.getStringAttribute('administrative_area');
  }
  public set administrativeArea(value: string) {
    this._administrativeArea = value;
  }
  public resetAdministrativeArea() {
    this._administrativeArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrativeAreaInput() {
    return this._administrativeArea;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // postal_code - computed: false, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // recipients - computed: false, optional: true, required: false
  private _recipients?: string[]; 
  public get recipients() {
    return this.getListAttribute('recipients');
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  public resetRecipients() {
    this._recipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }

  // region_code - computed: false, optional: false, required: true
  private _regionCode?: string; 
  public get regionCode() {
    return this.getStringAttribute('region_code');
  }
  public set regionCode(value: string) {
    this._regionCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionCodeInput() {
    return this._regionCode;
  }
}
export interface ClouddomainsRegistrationContactSettingsTechnicalContact {
  /**
  * Required. Email address of the contact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#email ClouddomainsRegistration#email}
  */
  readonly email: string;
  /**
  * Fax number of the contact in international format. For example, "+1-800-555-0123".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#fax_number ClouddomainsRegistration#fax_number}
  */
  readonly faxNumber?: string;
  /**
  * Required. Phone number of the contact in international format. For example, "+1-800-555-0123".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#phone_number ClouddomainsRegistration#phone_number}
  */
  readonly phoneNumber: string;
  /**
  * postal_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#postal_address ClouddomainsRegistration#postal_address}
  */
  readonly postalAddress: ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress;
}

export function clouddomainsRegistrationContactSettingsTechnicalContactToTerraform(struct?: ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference | ClouddomainsRegistrationContactSettingsTechnicalContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    fax_number: cdktf.stringToTerraform(struct!.faxNumber),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
    postal_address: clouddomainsRegistrationContactSettingsTechnicalContactPostalAddressToTerraform(struct!.postalAddress),
  }
}


export function clouddomainsRegistrationContactSettingsTechnicalContactToHclTerraform(struct?: ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference | ClouddomainsRegistrationContactSettingsTechnicalContact): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fax_number: {
      value: cdktf.stringToHclTerraform(struct!.faxNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_number: {
      value: cdktf.stringToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postal_address: {
      value: clouddomainsRegistrationContactSettingsTechnicalContactPostalAddressToHclTerraform(struct!.postalAddress),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddomainsRegistrationContactSettingsTechnicalContact | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._faxNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.faxNumber = this._faxNumber;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    if (this._postalAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalAddress = this._postalAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddomainsRegistrationContactSettingsTechnicalContact | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._faxNumber = undefined;
      this._phoneNumber = undefined;
      this._postalAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._faxNumber = value.faxNumber;
      this._phoneNumber = value.phoneNumber;
      this._postalAddress.internalValue = value.postalAddress;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // fax_number - computed: false, optional: true, required: false
  private _faxNumber?: string; 
  public get faxNumber() {
    return this.getStringAttribute('fax_number');
  }
  public set faxNumber(value: string) {
    this._faxNumber = value;
  }
  public resetFaxNumber() {
    this._faxNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faxNumberInput() {
    return this._faxNumber;
  }

  // phone_number - computed: false, optional: false, required: true
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // postal_address - computed: false, optional: false, required: true
  private _postalAddress = new ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference(this, "postal_address");
  public get postalAddress() {
    return this._postalAddress;
  }
  public putPostalAddress(value: ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress) {
    this._postalAddress.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postalAddressInput() {
    return this._postalAddress.internalValue;
  }
}
export interface ClouddomainsRegistrationContactSettings {
  /**
  * Required. Privacy setting for the contacts associated with the Registration.
  * Values are PUBLIC_CONTACT_DATA, PRIVATE_CONTACT_DATA, and REDACTED_CONTACT_DATA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#privacy ClouddomainsRegistration#privacy}
  */
  readonly privacy: string;
  /**
  * admin_contact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#admin_contact ClouddomainsRegistration#admin_contact}
  */
  readonly adminContact: ClouddomainsRegistrationContactSettingsAdminContact;
  /**
  * registrant_contact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#registrant_contact ClouddomainsRegistration#registrant_contact}
  */
  readonly registrantContact: ClouddomainsRegistrationContactSettingsRegistrantContact;
  /**
  * technical_contact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#technical_contact ClouddomainsRegistration#technical_contact}
  */
  readonly technicalContact: ClouddomainsRegistrationContactSettingsTechnicalContact;
}

export function clouddomainsRegistrationContactSettingsToTerraform(struct?: ClouddomainsRegistrationContactSettingsOutputReference | ClouddomainsRegistrationContactSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    privacy: cdktf.stringToTerraform(struct!.privacy),
    admin_contact: clouddomainsRegistrationContactSettingsAdminContactToTerraform(struct!.adminContact),
    registrant_contact: clouddomainsRegistrationContactSettingsRegistrantContactToTerraform(struct!.registrantContact),
    technical_contact: clouddomainsRegistrationContactSettingsTechnicalContactToTerraform(struct!.technicalContact),
  }
}


export function clouddomainsRegistrationContactSettingsToHclTerraform(struct?: ClouddomainsRegistrationContactSettingsOutputReference | ClouddomainsRegistrationContactSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    privacy: {
      value: cdktf.stringToHclTerraform(struct!.privacy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_contact: {
      value: clouddomainsRegistrationContactSettingsAdminContactToHclTerraform(struct!.adminContact),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddomainsRegistrationContactSettingsAdminContactList",
    },
    registrant_contact: {
      value: clouddomainsRegistrationContactSettingsRegistrantContactToHclTerraform(struct!.registrantContact),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddomainsRegistrationContactSettingsRegistrantContactList",
    },
    technical_contact: {
      value: clouddomainsRegistrationContactSettingsTechnicalContactToHclTerraform(struct!.technicalContact),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddomainsRegistrationContactSettingsTechnicalContactList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddomainsRegistrationContactSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddomainsRegistrationContactSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacy = this._privacy;
    }
    if (this._adminContact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminContact = this._adminContact?.internalValue;
    }
    if (this._registrantContact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrantContact = this._registrantContact?.internalValue;
    }
    if (this._technicalContact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.technicalContact = this._technicalContact?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddomainsRegistrationContactSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privacy = undefined;
      this._adminContact.internalValue = undefined;
      this._registrantContact.internalValue = undefined;
      this._technicalContact.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privacy = value.privacy;
      this._adminContact.internalValue = value.adminContact;
      this._registrantContact.internalValue = value.registrantContact;
      this._technicalContact.internalValue = value.technicalContact;
    }
  }

  // privacy - computed: false, optional: false, required: true
  private _privacy?: string; 
  public get privacy() {
    return this.getStringAttribute('privacy');
  }
  public set privacy(value: string) {
    this._privacy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyInput() {
    return this._privacy;
  }

  // admin_contact - computed: false, optional: false, required: true
  private _adminContact = new ClouddomainsRegistrationContactSettingsAdminContactOutputReference(this, "admin_contact");
  public get adminContact() {
    return this._adminContact;
  }
  public putAdminContact(value: ClouddomainsRegistrationContactSettingsAdminContact) {
    this._adminContact.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminContactInput() {
    return this._adminContact.internalValue;
  }

  // registrant_contact - computed: false, optional: false, required: true
  private _registrantContact = new ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference(this, "registrant_contact");
  public get registrantContact() {
    return this._registrantContact;
  }
  public putRegistrantContact(value: ClouddomainsRegistrationContactSettingsRegistrantContact) {
    this._registrantContact.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registrantContactInput() {
    return this._registrantContact.internalValue;
  }

  // technical_contact - computed: false, optional: false, required: true
  private _technicalContact = new ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference(this, "technical_contact");
  public get technicalContact() {
    return this._technicalContact;
  }
  public putTechnicalContact(value: ClouddomainsRegistrationContactSettingsTechnicalContact) {
    this._technicalContact.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get technicalContactInput() {
    return this._technicalContact.internalValue;
  }
}
export interface ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords {
  /**
  * The algorithm used to generate the referenced DNSKEY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#algorithm ClouddomainsRegistration#algorithm}
  */
  readonly algorithm?: string;
  /**
  * The digest generated from the referenced DNSKEY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#digest ClouddomainsRegistration#digest}
  */
  readonly digest?: string;
  /**
  * The hash function used to generate the digest of the referenced DNSKEY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#digest_type ClouddomainsRegistration#digest_type}
  */
  readonly digestType?: string;
  /**
  * The key tag of the record. Must be set in range 0 -- 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#key_tag ClouddomainsRegistration#key_tag}
  */
  readonly keyTag?: number;
}

export function clouddomainsRegistrationDnsSettingsCustomDnsDsRecordsToTerraform(struct?: ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    digest: cdktf.stringToTerraform(struct!.digest),
    digest_type: cdktf.stringToTerraform(struct!.digestType),
    key_tag: cdktf.numberToTerraform(struct!.keyTag),
  }
}


export function clouddomainsRegistrationDnsSettingsCustomDnsDsRecordsToHclTerraform(struct?: ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    digest_type: {
      value: cdktf.stringToHclTerraform(struct!.digestType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_tag: {
      value: cdktf.numberToHclTerraform(struct!.keyTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    if (this._digestType !== undefined) {
      hasAnyValues = true;
      internalValueResult.digestType = this._digestType;
    }
    if (this._keyTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyTag = this._keyTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._digest = undefined;
      this._digestType = undefined;
      this._keyTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._digest = value.digest;
      this._digestType = value.digestType;
      this._keyTag = value.keyTag;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // digest - computed: false, optional: true, required: false
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  public resetDigest() {
    this._digest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }

  // digest_type - computed: false, optional: true, required: false
  private _digestType?: string; 
  public get digestType() {
    return this.getStringAttribute('digest_type');
  }
  public set digestType(value: string) {
    this._digestType = value;
  }
  public resetDigestType() {
    this._digestType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestTypeInput() {
    return this._digestType;
  }

  // key_tag - computed: false, optional: true, required: false
  private _keyTag?: number; 
  public get keyTag() {
    return this.getNumberAttribute('key_tag');
  }
  public set keyTag(value: number) {
    this._keyTag = value;
  }
  public resetKeyTag() {
    this._keyTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTagInput() {
    return this._keyTag;
  }
}

export class ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList extends cdktf.ComplexList {
  public internalValue? : ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference {
    return new ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddomainsRegistrationDnsSettingsCustomDns {
  /**
  * Required. A list of name servers that store the DNS zone for this domain. Each name server is a domain
  * name, with Unicode domain names expressed in Punycode format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#name_servers ClouddomainsRegistration#name_servers}
  */
  readonly nameServers: string[];
  /**
  * ds_records block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#ds_records ClouddomainsRegistration#ds_records}
  */
  readonly dsRecords?: ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords[] | cdktf.IResolvable;
}

export function clouddomainsRegistrationDnsSettingsCustomDnsToTerraform(struct?: ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference | ClouddomainsRegistrationDnsSettingsCustomDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameServers),
    ds_records: cdktf.listMapper(clouddomainsRegistrationDnsSettingsCustomDnsDsRecordsToTerraform, true)(struct!.dsRecords),
  }
}


export function clouddomainsRegistrationDnsSettingsCustomDnsToHclTerraform(struct?: ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference | ClouddomainsRegistrationDnsSettingsCustomDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ds_records: {
      value: cdktf.listMapperHcl(clouddomainsRegistrationDnsSettingsCustomDnsDsRecordsToHclTerraform, true)(struct!.dsRecords),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddomainsRegistrationDnsSettingsCustomDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameServers = this._nameServers;
    }
    if (this._dsRecords?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsRecords = this._dsRecords?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddomainsRegistrationDnsSettingsCustomDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nameServers = undefined;
      this._dsRecords.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nameServers = value.nameServers;
      this._dsRecords.internalValue = value.dsRecords;
    }
  }

  // name_servers - computed: false, optional: false, required: true
  private _nameServers?: string[]; 
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }
  public set nameServers(value: string[]) {
    this._nameServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServersInput() {
    return this._nameServers;
  }

  // ds_records - computed: false, optional: true, required: false
  private _dsRecords = new ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList(this, "ds_records", false);
  public get dsRecords() {
    return this._dsRecords;
  }
  public putDsRecords(value: ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords[] | cdktf.IResolvable) {
    this._dsRecords.internalValue = value;
  }
  public resetDsRecords() {
    this._dsRecords.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsRecordsInput() {
    return this._dsRecords.internalValue;
  }
}
export interface ClouddomainsRegistrationDnsSettingsGlueRecords {
  /**
  * Required. Domain name of the host in Punycode format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#host_name ClouddomainsRegistration#host_name}
  */
  readonly hostName: string;
  /**
  * List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1).
  * At least one of ipv4_address and ipv6_address must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#ipv4_addresses ClouddomainsRegistration#ipv4_addresses}
  */
  readonly ipv4Addresses?: string[];
  /**
  * List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1).
  * At least one of ipv4_address and ipv6_address must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#ipv6_addresses ClouddomainsRegistration#ipv6_addresses}
  */
  readonly ipv6Addresses?: string[];
}

export function clouddomainsRegistrationDnsSettingsGlueRecordsToTerraform(struct?: ClouddomainsRegistrationDnsSettingsGlueRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    ipv4_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv4Addresses),
    ipv6_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Addresses),
  }
}


export function clouddomainsRegistrationDnsSettingsGlueRecordsToHclTerraform(struct?: ClouddomainsRegistrationDnsSettingsGlueRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv4Addresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Addresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ClouddomainsRegistrationDnsSettingsGlueRecords | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._ipv4Addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addresses = this._ipv4Addresses;
    }
    if (this._ipv6Addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addresses = this._ipv6Addresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddomainsRegistrationDnsSettingsGlueRecords | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostName = undefined;
      this._ipv4Addresses = undefined;
      this._ipv6Addresses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostName = value.hostName;
      this._ipv4Addresses = value.ipv4Addresses;
      this._ipv6Addresses = value.ipv6Addresses;
    }
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // ipv4_addresses - computed: false, optional: true, required: false
  private _ipv4Addresses?: string[]; 
  public get ipv4Addresses() {
    return this.getListAttribute('ipv4_addresses');
  }
  public set ipv4Addresses(value: string[]) {
    this._ipv4Addresses = value;
  }
  public resetIpv4Addresses() {
    this._ipv4Addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressesInput() {
    return this._ipv4Addresses;
  }

  // ipv6_addresses - computed: false, optional: true, required: false
  private _ipv6Addresses?: string[]; 
  public get ipv6Addresses() {
    return this.getListAttribute('ipv6_addresses');
  }
  public set ipv6Addresses(value: string[]) {
    this._ipv6Addresses = value;
  }
  public resetIpv6Addresses() {
    this._ipv6Addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressesInput() {
    return this._ipv6Addresses;
  }
}

export class ClouddomainsRegistrationDnsSettingsGlueRecordsList extends cdktf.ComplexList {
  public internalValue? : ClouddomainsRegistrationDnsSettingsGlueRecords[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference {
    return new ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddomainsRegistrationDnsSettings {
  /**
  * custom_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#custom_dns ClouddomainsRegistration#custom_dns}
  */
  readonly customDns?: ClouddomainsRegistrationDnsSettingsCustomDns;
  /**
  * glue_records block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#glue_records ClouddomainsRegistration#glue_records}
  */
  readonly glueRecords?: ClouddomainsRegistrationDnsSettingsGlueRecords[] | cdktf.IResolvable;
}

export function clouddomainsRegistrationDnsSettingsToTerraform(struct?: ClouddomainsRegistrationDnsSettingsOutputReference | ClouddomainsRegistrationDnsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_dns: clouddomainsRegistrationDnsSettingsCustomDnsToTerraform(struct!.customDns),
    glue_records: cdktf.listMapper(clouddomainsRegistrationDnsSettingsGlueRecordsToTerraform, true)(struct!.glueRecords),
  }
}


export function clouddomainsRegistrationDnsSettingsToHclTerraform(struct?: ClouddomainsRegistrationDnsSettingsOutputReference | ClouddomainsRegistrationDnsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_dns: {
      value: clouddomainsRegistrationDnsSettingsCustomDnsToHclTerraform(struct!.customDns),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddomainsRegistrationDnsSettingsCustomDnsList",
    },
    glue_records: {
      value: cdktf.listMapperHcl(clouddomainsRegistrationDnsSettingsGlueRecordsToHclTerraform, true)(struct!.glueRecords),
      isBlock: true,
      type: "list",
      storageClassType: "ClouddomainsRegistrationDnsSettingsGlueRecordsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddomainsRegistrationDnsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddomainsRegistrationDnsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customDns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDns = this._customDns?.internalValue;
    }
    if (this._glueRecords?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glueRecords = this._glueRecords?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddomainsRegistrationDnsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customDns.internalValue = undefined;
      this._glueRecords.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customDns.internalValue = value.customDns;
      this._glueRecords.internalValue = value.glueRecords;
    }
  }

  // custom_dns - computed: false, optional: true, required: false
  private _customDns = new ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference(this, "custom_dns");
  public get customDns() {
    return this._customDns;
  }
  public putCustomDns(value: ClouddomainsRegistrationDnsSettingsCustomDns) {
    this._customDns.internalValue = value;
  }
  public resetCustomDns() {
    this._customDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDnsInput() {
    return this._customDns.internalValue;
  }

  // glue_records - computed: false, optional: true, required: false
  private _glueRecords = new ClouddomainsRegistrationDnsSettingsGlueRecordsList(this, "glue_records", false);
  public get glueRecords() {
    return this._glueRecords;
  }
  public putGlueRecords(value: ClouddomainsRegistrationDnsSettingsGlueRecords[] | cdktf.IResolvable) {
    this._glueRecords.internalValue = value;
  }
  public resetGlueRecords() {
    this._glueRecords.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glueRecordsInput() {
    return this._glueRecords.internalValue;
  }
}
export interface ClouddomainsRegistrationManagementSettings {
  /**
  * The desired renewal method for this Registration. The actual renewalMethod is automatically updated to reflect this choice.
  * If unset or equal to RENEWAL_METHOD_UNSPECIFIED, the actual renewalMethod is treated as if it were set to AUTOMATIC_RENEWAL.
  * You cannot use RENEWAL_DISABLED during resource creation, and you can update the renewal status only when the Registration
  * resource has state ACTIVE or SUSPENDED.
  * 
  * When preferredRenewalMethod is set to AUTOMATIC_RENEWAL, the actual renewalMethod can be set to RENEWAL_DISABLED in case of
  * problems with the billing account or reported domain abuse. In such cases, check the issues field on the Registration. After
  * the problem is resolved, the renewalMethod is automatically updated to preferredRenewalMethod in a few hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#preferred_renewal_method ClouddomainsRegistration#preferred_renewal_method}
  */
  readonly preferredRenewalMethod?: string;
  /**
  * Controls whether the domain can be transferred to another registrar. Values are UNLOCKED or LOCKED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#transfer_lock_state ClouddomainsRegistration#transfer_lock_state}
  */
  readonly transferLockState?: string;
}

export function clouddomainsRegistrationManagementSettingsToTerraform(struct?: ClouddomainsRegistrationManagementSettingsOutputReference | ClouddomainsRegistrationManagementSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_renewal_method: cdktf.stringToTerraform(struct!.preferredRenewalMethod),
    transfer_lock_state: cdktf.stringToTerraform(struct!.transferLockState),
  }
}


export function clouddomainsRegistrationManagementSettingsToHclTerraform(struct?: ClouddomainsRegistrationManagementSettingsOutputReference | ClouddomainsRegistrationManagementSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_renewal_method: {
      value: cdktf.stringToHclTerraform(struct!.preferredRenewalMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transfer_lock_state: {
      value: cdktf.stringToHclTerraform(struct!.transferLockState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddomainsRegistrationManagementSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddomainsRegistrationManagementSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredRenewalMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredRenewalMethod = this._preferredRenewalMethod;
    }
    if (this._transferLockState !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferLockState = this._transferLockState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddomainsRegistrationManagementSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredRenewalMethod = undefined;
      this._transferLockState = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredRenewalMethod = value.preferredRenewalMethod;
      this._transferLockState = value.transferLockState;
    }
  }

  // preferred_renewal_method - computed: true, optional: true, required: false
  private _preferredRenewalMethod?: string; 
  public get preferredRenewalMethod() {
    return this.getStringAttribute('preferred_renewal_method');
  }
  public set preferredRenewalMethod(value: string) {
    this._preferredRenewalMethod = value;
  }
  public resetPreferredRenewalMethod() {
    this._preferredRenewalMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredRenewalMethodInput() {
    return this._preferredRenewalMethod;
  }

  // renewal_method - computed: true, optional: false, required: false
  public get renewalMethod() {
    return this.getStringAttribute('renewal_method');
  }

  // transfer_lock_state - computed: true, optional: true, required: false
  private _transferLockState?: string; 
  public get transferLockState() {
    return this.getStringAttribute('transfer_lock_state');
  }
  public set transferLockState(value: string) {
    this._transferLockState = value;
  }
  public resetTransferLockState() {
    this._transferLockState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferLockStateInput() {
    return this._transferLockState;
  }
}
export interface ClouddomainsRegistrationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#create ClouddomainsRegistration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#delete ClouddomainsRegistration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#update ClouddomainsRegistration#update}
  */
  readonly update?: string;
}

export function clouddomainsRegistrationTimeoutsToTerraform(struct?: ClouddomainsRegistrationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function clouddomainsRegistrationTimeoutsToHclTerraform(struct?: ClouddomainsRegistrationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddomainsRegistrationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClouddomainsRegistrationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddomainsRegistrationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface ClouddomainsRegistrationYearlyPrice {
  /**
  * The three-letter currency code defined in ISO 4217.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#currency_code ClouddomainsRegistration#currency_code}
  */
  readonly currencyCode?: string;
  /**
  * The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#units ClouddomainsRegistration#units}
  */
  readonly units?: string;
}

export function clouddomainsRegistrationYearlyPriceToTerraform(struct?: ClouddomainsRegistrationYearlyPriceOutputReference | ClouddomainsRegistrationYearlyPrice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    currency_code: cdktf.stringToTerraform(struct!.currencyCode),
    units: cdktf.stringToTerraform(struct!.units),
  }
}


export function clouddomainsRegistrationYearlyPriceToHclTerraform(struct?: ClouddomainsRegistrationYearlyPriceOutputReference | ClouddomainsRegistrationYearlyPrice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    currency_code: {
      value: cdktf.stringToHclTerraform(struct!.currencyCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    units: {
      value: cdktf.stringToHclTerraform(struct!.units),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClouddomainsRegistrationYearlyPriceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddomainsRegistrationYearlyPrice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currencyCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.currencyCode = this._currencyCode;
    }
    if (this._units !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddomainsRegistrationYearlyPrice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currencyCode = undefined;
      this._units = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currencyCode = value.currencyCode;
      this._units = value.units;
    }
  }

  // currency_code - computed: false, optional: true, required: false
  private _currencyCode?: string; 
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }
  public set currencyCode(value: string) {
    this._currencyCode = value;
  }
  public resetCurrencyCode() {
    this._currencyCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currencyCodeInput() {
    return this._currencyCode;
  }

  // units - computed: false, optional: true, required: false
  private _units?: string; 
  public get units() {
    return this.getStringAttribute('units');
  }
  public set units(value: string) {
    this._units = value;
  }
  public resetUnits() {
    this._units = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration google_clouddomains_registration}
*/
export class ClouddomainsRegistration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_clouddomains_registration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClouddomainsRegistration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClouddomainsRegistration to import
  * @param importFromId The id of the existing ClouddomainsRegistration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClouddomainsRegistration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_clouddomains_registration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/clouddomains_registration google_clouddomains_registration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClouddomainsRegistrationConfig
  */
  public constructor(scope: Construct, id: string, config: ClouddomainsRegistrationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_clouddomains_registration',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.26.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contactNotices = config.contactNotices;
    this._domainName = config.domainName;
    this._domainNotices = config.domainNotices;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._contactSettings.internalValue = config.contactSettings;
    this._dnsSettings.internalValue = config.dnsSettings;
    this._managementSettings.internalValue = config.managementSettings;
    this._timeouts.internalValue = config.timeouts;
    this._yearlyPrice.internalValue = config.yearlyPrice;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_notices - computed: false, optional: true, required: false
  private _contactNotices?: string[]; 
  public get contactNotices() {
    return this.getListAttribute('contact_notices');
  }
  public set contactNotices(value: string[]) {
    this._contactNotices = value;
  }
  public resetContactNotices() {
    this._contactNotices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactNoticesInput() {
    return this._contactNotices;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_notices - computed: false, optional: true, required: false
  private _domainNotices?: string[]; 
  public get domainNotices() {
    return this.getListAttribute('domain_notices');
  }
  public set domainNotices(value: string[]) {
    this._domainNotices = value;
  }
  public resetDomainNotices() {
    this._domainNotices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNoticesInput() {
    return this._domainNotices;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // issues - computed: true, optional: false, required: false
  public get issues() {
    return this.getListAttribute('issues');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // register_failure_reason - computed: true, optional: false, required: false
  public get registerFailureReason() {
    return this.getStringAttribute('register_failure_reason');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // supported_privacy - computed: true, optional: false, required: false
  public get supportedPrivacy() {
    return this.getListAttribute('supported_privacy');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // contact_settings - computed: false, optional: false, required: true
  private _contactSettings = new ClouddomainsRegistrationContactSettingsOutputReference(this, "contact_settings");
  public get contactSettings() {
    return this._contactSettings;
  }
  public putContactSettings(value: ClouddomainsRegistrationContactSettings) {
    this._contactSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactSettingsInput() {
    return this._contactSettings.internalValue;
  }

  // dns_settings - computed: false, optional: true, required: false
  private _dnsSettings = new ClouddomainsRegistrationDnsSettingsOutputReference(this, "dns_settings");
  public get dnsSettings() {
    return this._dnsSettings;
  }
  public putDnsSettings(value: ClouddomainsRegistrationDnsSettings) {
    this._dnsSettings.internalValue = value;
  }
  public resetDnsSettings() {
    this._dnsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSettingsInput() {
    return this._dnsSettings.internalValue;
  }

  // management_settings - computed: false, optional: true, required: false
  private _managementSettings = new ClouddomainsRegistrationManagementSettingsOutputReference(this, "management_settings");
  public get managementSettings() {
    return this._managementSettings;
  }
  public putManagementSettings(value: ClouddomainsRegistrationManagementSettings) {
    this._managementSettings.internalValue = value;
  }
  public resetManagementSettings() {
    this._managementSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementSettingsInput() {
    return this._managementSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClouddomainsRegistrationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClouddomainsRegistrationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // yearly_price - computed: false, optional: false, required: true
  private _yearlyPrice = new ClouddomainsRegistrationYearlyPriceOutputReference(this, "yearly_price");
  public get yearlyPrice() {
    return this._yearlyPrice;
  }
  public putYearlyPrice(value: ClouddomainsRegistrationYearlyPrice) {
    this._yearlyPrice.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yearlyPriceInput() {
    return this._yearlyPrice.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_notices: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactNotices),
      domain_name: cdktf.stringToTerraform(this._domainName),
      domain_notices: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainNotices),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      contact_settings: clouddomainsRegistrationContactSettingsToTerraform(this._contactSettings.internalValue),
      dns_settings: clouddomainsRegistrationDnsSettingsToTerraform(this._dnsSettings.internalValue),
      management_settings: clouddomainsRegistrationManagementSettingsToTerraform(this._managementSettings.internalValue),
      timeouts: clouddomainsRegistrationTimeoutsToTerraform(this._timeouts.internalValue),
      yearly_price: clouddomainsRegistrationYearlyPriceToTerraform(this._yearlyPrice.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_notices: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contactNotices),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_notices: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainNotices),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_settings: {
        value: clouddomainsRegistrationContactSettingsToHclTerraform(this._contactSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClouddomainsRegistrationContactSettingsList",
      },
      dns_settings: {
        value: clouddomainsRegistrationDnsSettingsToHclTerraform(this._dnsSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClouddomainsRegistrationDnsSettingsList",
      },
      management_settings: {
        value: clouddomainsRegistrationManagementSettingsToHclTerraform(this._managementSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClouddomainsRegistrationManagementSettingsList",
      },
      timeouts: {
        value: clouddomainsRegistrationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClouddomainsRegistrationTimeouts",
      },
      yearly_price: {
        value: clouddomainsRegistrationYearlyPriceToHclTerraform(this._yearlyPrice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClouddomainsRegistrationYearlyPriceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
