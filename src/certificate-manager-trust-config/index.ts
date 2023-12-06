// https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/certificate_manager_trust_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateManagerTrustConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * One or more paragraphs of text description of a trust config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/certificate_manager_trust_config#description CertificateManagerTrustConfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/certificate_manager_trust_config#id CertificateManagerTrustConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of label tags associated with the trust config.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/certificate_manager_trust_config#labels CertificateManagerTrustConfig#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The trust config location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/certificate_manager_trust_config#location CertificateManagerTrustConfig#location}
  */
  readonly location: string;
  /**
  * A user-defined name of the trust config. Trust config names must be unique globally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/certificate_manager_trust_config#name CertificateManagerTrustConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/certificate_manager_trust_config#project CertificateManagerTrustConfig#project}
  */
  readonly project?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/certificate_manager_trust_config#timeouts CertificateManagerTrustConfig#timeouts}
  */
  readonly timeouts?: CertificateManagerTrustConfigTimeouts;
  /**
  * trust_stores block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/certificate_manager_trust_config#trust_stores CertificateManagerTrustConfig#trust_stores}
  */
  readonly trustStores?: CertificateManagerTrustConfigTrustStores[] | cdktf.IResolvable;
}
export interface CertificateManagerTrustConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/certificate_manager_trust_config#create CertificateManagerTrustConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/certificate_manager_trust_config#delete CertificateManagerTrustConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/certificate_manager_trust_config#update CertificateManagerTrustConfig#update}
  */
  readonly update?: string;
}

export function certificateManagerTrustConfigTimeoutsToTerraform(struct?: CertificateManagerTrustConfigTimeouts | cdktf.IResolvable): any {
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

export class CertificateManagerTrustConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateManagerTrustConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CertificateManagerTrustConfigTimeouts | cdktf.IResolvable | undefined) {
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
export interface CertificateManagerTrustConfigTrustStoresIntermediateCas {
  /**
  * PEM intermediate certificate used for building up paths for validation.
  * Each certificate provided in PEM format may occupy up to 5kB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/certificate_manager_trust_config#pem_certificate CertificateManagerTrustConfig#pem_certificate}
  */
  readonly pemCertificate?: string;
}

export function certificateManagerTrustConfigTrustStoresIntermediateCasToTerraform(struct?: CertificateManagerTrustConfigTrustStoresIntermediateCas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pem_certificate: cdktf.stringToTerraform(struct!.pemCertificate),
  }
}

export class CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificateManagerTrustConfigTrustStoresIntermediateCas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pemCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemCertificate = this._pemCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateManagerTrustConfigTrustStoresIntermediateCas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pemCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pemCertificate = value.pemCertificate;
    }
  }

  // pem_certificate - computed: false, optional: true, required: false
  private _pemCertificate?: string; 
  public get pemCertificate() {
    return this.getStringAttribute('pem_certificate');
  }
  public set pemCertificate(value: string) {
    this._pemCertificate = value;
  }
  public resetPemCertificate() {
    this._pemCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemCertificateInput() {
    return this._pemCertificate;
  }
}

export class CertificateManagerTrustConfigTrustStoresIntermediateCasList extends cdktf.ComplexList {
  public internalValue? : CertificateManagerTrustConfigTrustStoresIntermediateCas[] | cdktf.IResolvable

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
  public get(index: number): CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference {
    return new CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificateManagerTrustConfigTrustStoresTrustAnchors {
  /**
  * PEM root certificate of the PKI used for validation.
  * Each certificate provided in PEM format may occupy up to 5kB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/certificate_manager_trust_config#pem_certificate CertificateManagerTrustConfig#pem_certificate}
  */
  readonly pemCertificate?: string;
}

export function certificateManagerTrustConfigTrustStoresTrustAnchorsToTerraform(struct?: CertificateManagerTrustConfigTrustStoresTrustAnchors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pem_certificate: cdktf.stringToTerraform(struct!.pemCertificate),
  }
}

export class CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificateManagerTrustConfigTrustStoresTrustAnchors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pemCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemCertificate = this._pemCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateManagerTrustConfigTrustStoresTrustAnchors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pemCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pemCertificate = value.pemCertificate;
    }
  }

  // pem_certificate - computed: false, optional: true, required: false
  private _pemCertificate?: string; 
  public get pemCertificate() {
    return this.getStringAttribute('pem_certificate');
  }
  public set pemCertificate(value: string) {
    this._pemCertificate = value;
  }
  public resetPemCertificate() {
    this._pemCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemCertificateInput() {
    return this._pemCertificate;
  }
}

export class CertificateManagerTrustConfigTrustStoresTrustAnchorsList extends cdktf.ComplexList {
  public internalValue? : CertificateManagerTrustConfigTrustStoresTrustAnchors[] | cdktf.IResolvable

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
  public get(index: number): CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference {
    return new CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificateManagerTrustConfigTrustStores {
  /**
  * intermediate_cas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/certificate_manager_trust_config#intermediate_cas CertificateManagerTrustConfig#intermediate_cas}
  */
  readonly intermediateCas?: CertificateManagerTrustConfigTrustStoresIntermediateCas[] | cdktf.IResolvable;
  /**
  * trust_anchors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/certificate_manager_trust_config#trust_anchors CertificateManagerTrustConfig#trust_anchors}
  */
  readonly trustAnchors?: CertificateManagerTrustConfigTrustStoresTrustAnchors[] | cdktf.IResolvable;
}

export function certificateManagerTrustConfigTrustStoresToTerraform(struct?: CertificateManagerTrustConfigTrustStores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    intermediate_cas: cdktf.listMapper(certificateManagerTrustConfigTrustStoresIntermediateCasToTerraform, true)(struct!.intermediateCas),
    trust_anchors: cdktf.listMapper(certificateManagerTrustConfigTrustStoresTrustAnchorsToTerraform, true)(struct!.trustAnchors),
  }
}

export class CertificateManagerTrustConfigTrustStoresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificateManagerTrustConfigTrustStores | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intermediateCas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intermediateCas = this._intermediateCas?.internalValue;
    }
    if (this._trustAnchors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustAnchors = this._trustAnchors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateManagerTrustConfigTrustStores | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._intermediateCas.internalValue = undefined;
      this._trustAnchors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._intermediateCas.internalValue = value.intermediateCas;
      this._trustAnchors.internalValue = value.trustAnchors;
    }
  }

  // intermediate_cas - computed: false, optional: true, required: false
  private _intermediateCas = new CertificateManagerTrustConfigTrustStoresIntermediateCasList(this, "intermediate_cas", false);
  public get intermediateCas() {
    return this._intermediateCas;
  }
  public putIntermediateCas(value: CertificateManagerTrustConfigTrustStoresIntermediateCas[] | cdktf.IResolvable) {
    this._intermediateCas.internalValue = value;
  }
  public resetIntermediateCas() {
    this._intermediateCas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intermediateCasInput() {
    return this._intermediateCas.internalValue;
  }

  // trust_anchors - computed: false, optional: true, required: false
  private _trustAnchors = new CertificateManagerTrustConfigTrustStoresTrustAnchorsList(this, "trust_anchors", false);
  public get trustAnchors() {
    return this._trustAnchors;
  }
  public putTrustAnchors(value: CertificateManagerTrustConfigTrustStoresTrustAnchors[] | cdktf.IResolvable) {
    this._trustAnchors.internalValue = value;
  }
  public resetTrustAnchors() {
    this._trustAnchors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustAnchorsInput() {
    return this._trustAnchors.internalValue;
  }
}

export class CertificateManagerTrustConfigTrustStoresList extends cdktf.ComplexList {
  public internalValue? : CertificateManagerTrustConfigTrustStores[] | cdktf.IResolvable

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
  public get(index: number): CertificateManagerTrustConfigTrustStoresOutputReference {
    return new CertificateManagerTrustConfigTrustStoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/certificate_manager_trust_config google_certificate_manager_trust_config}
*/
export class CertificateManagerTrustConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_certificate_manager_trust_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificateManagerTrustConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificateManagerTrustConfig to import
  * @param importFromId The id of the existing CertificateManagerTrustConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/certificate_manager_trust_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificateManagerTrustConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_certificate_manager_trust_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/certificate_manager_trust_config google_certificate_manager_trust_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateManagerTrustConfigConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateManagerTrustConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_certificate_manager_trust_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.8.0',
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
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._timeouts.internalValue = config.timeouts;
    this._trustStores.internalValue = config.trustStores;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CertificateManagerTrustConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CertificateManagerTrustConfigTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // trust_stores - computed: false, optional: true, required: false
  private _trustStores = new CertificateManagerTrustConfigTrustStoresList(this, "trust_stores", false);
  public get trustStores() {
    return this._trustStores;
  }
  public putTrustStores(value: CertificateManagerTrustConfigTrustStores[] | cdktf.IResolvable) {
    this._trustStores.internalValue = value;
  }
  public resetTrustStores() {
    this._trustStores.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoresInput() {
    return this._trustStores.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      timeouts: certificateManagerTrustConfigTimeoutsToTerraform(this._timeouts.internalValue),
      trust_stores: cdktf.listMapper(certificateManagerTrustConfigTrustStoresToTerraform, true)(this._trustStores.internalValue),
    };
  }
}
