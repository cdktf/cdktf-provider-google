// https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeManagedSslCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#certificate_id ComputeManagedSslCertificate#certificate_id}
  */
  readonly certificateId?: number;
  /**
  * An optional description of this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#description ComputeManagedSslCertificate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#id ComputeManagedSslCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.


These are in the same namespace as the managed SSL certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#name ComputeManagedSslCertificate#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#project ComputeManagedSslCertificate#project}
  */
  readonly project?: string;
  /**
  * Enum field whose value is always 'MANAGED' - used to signal to the API
which type this is. Default value: "MANAGED" Possible values: ["MANAGED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#type ComputeManagedSslCertificate#type}
  */
  readonly type?: string;
  /**
  * managed block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#managed ComputeManagedSslCertificate#managed}
  */
  readonly managed?: ComputeManagedSslCertificateManaged;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#timeouts ComputeManagedSslCertificate#timeouts}
  */
  readonly timeouts?: ComputeManagedSslCertificateTimeouts;
}
export interface ComputeManagedSslCertificateManaged {
  /**
  * Domains for which a managed SSL certificate will be valid.  Currently,
there can be up to 100 domains in this list.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#domains ComputeManagedSslCertificate#domains}
  */
  readonly domains: string[];
}

export function computeManagedSslCertificateManagedToTerraform(struct?: ComputeManagedSslCertificateManagedOutputReference | ComputeManagedSslCertificateManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
  }
}

export class ComputeManagedSslCertificateManagedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeManagedSslCertificateManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeManagedSslCertificateManaged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domains = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domains = value.domains;
    }
  }

  // domains - computed: false, optional: false, required: true
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }
}
export interface ComputeManagedSslCertificateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#create ComputeManagedSslCertificate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate#delete ComputeManagedSslCertificate#delete}
  */
  readonly delete?: string;
}

export function computeManagedSslCertificateTimeoutsToTerraform(struct?: ComputeManagedSslCertificateTimeoutsOutputReference | ComputeManagedSslCertificateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class ComputeManagedSslCertificateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeManagedSslCertificateTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeManagedSslCertificateTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate google_compute_managed_ssl_certificate}
*/
export class ComputeManagedSslCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_managed_ssl_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate google_compute_managed_ssl_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeManagedSslCertificateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ComputeManagedSslCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_compute_managed_ssl_certificate',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateId = config.certificateId;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._type = config.type;
    this._managed.internalValue = config.managed;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_id - computed: true, optional: true, required: false
  private _certificateId?: number; 
  public get certificateId() {
    return this.getNumberAttribute('certificate_id');
  }
  public set certificateId(value: number) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // subject_alternative_names - computed: true, optional: false, required: false
  public get subjectAlternativeNames() {
    return this.getListAttribute('subject_alternative_names');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // managed - computed: false, optional: true, required: false
  private _managed = new ComputeManagedSslCertificateManagedOutputReference(this, "managed");
  public get managed() {
    return this._managed;
  }
  public putManaged(value: ComputeManagedSslCertificateManaged) {
    this._managed.internalValue = value;
  }
  public resetManaged() {
    this._managed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeManagedSslCertificateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeManagedSslCertificateTimeouts) {
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
      certificate_id: cdktf.numberToTerraform(this._certificateId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      type: cdktf.stringToTerraform(this._type),
      managed: computeManagedSslCertificateManagedToTerraform(this._managed.internalValue),
      timeouts: computeManagedSslCertificateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
