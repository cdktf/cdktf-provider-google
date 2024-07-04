// https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/apigee_keystores_aliases_pkcs12
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigeeKeystoresAliasesPkcs12Config extends cdktf.TerraformMetaArguments {
  /**
  * Alias Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/apigee_keystores_aliases_pkcs12#alias ApigeeKeystoresAliasesPkcs12#alias}
  */
  readonly alias: string;
  /**
  * Environment associated with the alias
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/apigee_keystores_aliases_pkcs12#environment ApigeeKeystoresAliasesPkcs12#environment}
  */
  readonly environment: string;
  /**
  * Cert content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/apigee_keystores_aliases_pkcs12#file ApigeeKeystoresAliasesPkcs12#file}
  */
  readonly file: string;
  /**
  * Hash of the pkcs file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/apigee_keystores_aliases_pkcs12#filehash ApigeeKeystoresAliasesPkcs12#filehash}
  */
  readonly filehash: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/apigee_keystores_aliases_pkcs12#id ApigeeKeystoresAliasesPkcs12#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Keystore Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/apigee_keystores_aliases_pkcs12#keystore ApigeeKeystoresAliasesPkcs12#keystore}
  */
  readonly keystore: string;
  /**
  * Organization ID associated with the alias
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/apigee_keystores_aliases_pkcs12#org_id ApigeeKeystoresAliasesPkcs12#org_id}
  */
  readonly orgId: string;
  /**
  * Password for the Private Key if it's encrypted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/apigee_keystores_aliases_pkcs12#password ApigeeKeystoresAliasesPkcs12#password}
  */
  readonly password?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/apigee_keystores_aliases_pkcs12#timeouts ApigeeKeystoresAliasesPkcs12#timeouts}
  */
  readonly timeouts?: ApigeeKeystoresAliasesPkcs12Timeouts;
}
export interface ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo {
}

export function apigeeKeystoresAliasesPkcs12CertsInfoCertInfoToTerraform(struct?: ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apigeeKeystoresAliasesPkcs12CertsInfoCertInfoToHclTerraform(struct?: ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeKeystoresAliasesPkcs12CertsInfoCertInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // basic_constraints - computed: true, optional: false, required: false
  public get basicConstraints() {
    return this.getStringAttribute('basic_constraints');
  }

  // expiry_date - computed: true, optional: false, required: false
  public get expiryDate() {
    return this.getStringAttribute('expiry_date');
  }

  // is_valid - computed: true, optional: false, required: false
  public get isValid() {
    return this.getStringAttribute('is_valid');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // sig_alg_name - computed: true, optional: false, required: false
  public get sigAlgName() {
    return this.getStringAttribute('sig_alg_name');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // subject_alternative_names - computed: true, optional: false, required: false
  public get subjectAlternativeNames() {
    return this.getListAttribute('subject_alternative_names');
  }

  // valid_from - computed: true, optional: false, required: false
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList extends cdktf.ComplexList {

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
  public get(index: number): ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference {
    return new ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigeeKeystoresAliasesPkcs12CertsInfo {
}

export function apigeeKeystoresAliasesPkcs12CertsInfoToTerraform(struct?: ApigeeKeystoresAliasesPkcs12CertsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apigeeKeystoresAliasesPkcs12CertsInfoToHclTerraform(struct?: ApigeeKeystoresAliasesPkcs12CertsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApigeeKeystoresAliasesPkcs12CertsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeKeystoresAliasesPkcs12CertsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert_info - computed: true, optional: false, required: false
  private _certInfo = new ApigeeKeystoresAliasesPkcs12CertsInfoCertInfoList(this, "cert_info", false);
  public get certInfo() {
    return this._certInfo;
  }
}

export class ApigeeKeystoresAliasesPkcs12CertsInfoList extends cdktf.ComplexList {

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
  public get(index: number): ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference {
    return new ApigeeKeystoresAliasesPkcs12CertsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigeeKeystoresAliasesPkcs12Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/apigee_keystores_aliases_pkcs12#create ApigeeKeystoresAliasesPkcs12#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/apigee_keystores_aliases_pkcs12#delete ApigeeKeystoresAliasesPkcs12#delete}
  */
  readonly delete?: string;
}

export function apigeeKeystoresAliasesPkcs12TimeoutsToTerraform(struct?: ApigeeKeystoresAliasesPkcs12Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function apigeeKeystoresAliasesPkcs12TimeoutsToHclTerraform(struct?: ApigeeKeystoresAliasesPkcs12Timeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApigeeKeystoresAliasesPkcs12Timeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeKeystoresAliasesPkcs12Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/apigee_keystores_aliases_pkcs12 google_apigee_keystores_aliases_pkcs12}
*/
export class ApigeeKeystoresAliasesPkcs12 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apigee_keystores_aliases_pkcs12";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApigeeKeystoresAliasesPkcs12 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApigeeKeystoresAliasesPkcs12 to import
  * @param importFromId The id of the existing ApigeeKeystoresAliasesPkcs12 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/apigee_keystores_aliases_pkcs12#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApigeeKeystoresAliasesPkcs12 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_apigee_keystores_aliases_pkcs12", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/apigee_keystores_aliases_pkcs12 google_apigee_keystores_aliases_pkcs12} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigeeKeystoresAliasesPkcs12Config
  */
  public constructor(scope: Construct, id: string, config: ApigeeKeystoresAliasesPkcs12Config) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_keystores_aliases_pkcs12',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.36.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._environment = config.environment;
    this._file = config.file;
    this._filehash = config.filehash;
    this._id = config.id;
    this._keystore = config.keystore;
    this._orgId = config.orgId;
    this._password = config.password;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // certs_info - computed: true, optional: false, required: false
  private _certsInfo = new ApigeeKeystoresAliasesPkcs12CertsInfoList(this, "certs_info", false);
  public get certsInfo() {
    return this._certsInfo;
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // file - computed: false, optional: false, required: true
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // filehash - computed: false, optional: false, required: true
  private _filehash?: string; 
  public get filehash() {
    return this.getStringAttribute('filehash');
  }
  public set filehash(value: string) {
    this._filehash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filehashInput() {
    return this._filehash;
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

  // keystore - computed: false, optional: false, required: true
  private _keystore?: string; 
  public get keystore() {
    return this.getStringAttribute('keystore');
  }
  public set keystore(value: string) {
    this._keystore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoreInput() {
    return this._keystore;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApigeeKeystoresAliasesPkcs12TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApigeeKeystoresAliasesPkcs12Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      environment: cdktf.stringToTerraform(this._environment),
      file: cdktf.stringToTerraform(this._file),
      filehash: cdktf.stringToTerraform(this._filehash),
      id: cdktf.stringToTerraform(this._id),
      keystore: cdktf.stringToTerraform(this._keystore),
      org_id: cdktf.stringToTerraform(this._orgId),
      password: cdktf.stringToTerraform(this._password),
      timeouts: apigeeKeystoresAliasesPkcs12TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file: {
        value: cdktf.stringToHclTerraform(this._file),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filehash: {
        value: cdktf.stringToHclTerraform(this._filehash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keystore: {
        value: cdktf.stringToHclTerraform(this._keystore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: apigeeKeystoresAliasesPkcs12TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApigeeKeystoresAliasesPkcs12Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
