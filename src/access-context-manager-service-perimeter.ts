// https://www.terraform.io/docs/providers/google/r/access_context_manager_service_perimeter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AccessContextManagerServicePerimeterConfig extends TerraformMetaArguments {
  /** Description of the ServicePerimeter and its use. Does not affect
behavior. */
  readonly description?: string;
  /** Resource name for the ServicePerimeter. The short_name component must
begin with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/servicePerimeters/{short_name} */
  readonly name: string;
  /** The AccessPolicy this ServicePerimeter lives in.
Format: accessPolicies/{policy_id} */
  readonly parent: string;
  /** Specifies the type of the Perimeter. There are two types: regular and
bridge. Regular Service Perimeter contains resources, access levels,
and restricted services. Every resource can be in at most
ONE regular Service Perimeter.

In addition to being in a regular service perimeter, a resource can also
be in zero or more perimeter bridges. A perimeter bridge only contains
resources. Cross project operations are permitted if all effected
resources share some perimeter (whether bridge or regular). Perimeter
Bridge does not contain access levels or services: those are governed
entirely by the regular perimeter that resource is in.

Perimeter Bridges are typically useful when building more complex
topologies with many independent perimeters that need to share some data
with a common perimeter, but should not be able to share data among
themselves. Default value: "PERIMETER_TYPE_REGULAR" Possible values: ["PERIMETER_TYPE_REGULAR", "PERIMETER_TYPE_BRIDGE"] */
  readonly perimeterType?: string;
  /** Human readable title. Must be unique within the Policy. */
  readonly title: string;
  /** Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly exists
for all Service Perimeters, and that spec is identical to the status for those
Service Perimeters. When this flag is set, it inhibits the generation of the
implicit spec, thereby allowing the user to explicitly provide a
configuration ("spec") to use in a dry-run version of the Service Perimeter.
This allows the user to test changes to the enforced config ("status") without
actually enforcing them. This testing is done through analyzing the differences
between currently enforced and suggested restrictions. useExplicitDryRunSpec must
bet set to True if any of the fields in the spec are set to non-default values. */
  readonly useExplicitDryRunSpec?: boolean;
  /** spec block */
  readonly spec?: AccessContextManagerServicePerimeterSpec[];
  /** status block */
  readonly status?: AccessContextManagerServicePerimeterStatus[];
  /** timeouts block */
  readonly timeouts?: AccessContextManagerServicePerimeterTimeouts;
}
export interface AccessContextManagerServicePerimeterSpecVpcAccessibleServices {
  /** The list of APIs usable within the Service Perimeter.
Must be empty unless 'enableRestriction' is True. */
  readonly allowedServices?: string[];
  /** Whether to restrict API calls within the Service Perimeter to the
list of APIs specified in 'allowedServices'. */
  readonly enableRestriction?: boolean;
}
export interface AccessContextManagerServicePerimeterSpec {
  /** A list of AccessLevel resource names that allow resources within
the ServicePerimeter to be accessed from the internet.
AccessLevels listed must be in the same policy as this
ServicePerimeter. Referencing a nonexistent AccessLevel is a
syntax error. If no AccessLevel names are listed, resources within
the perimeter can only be accessed via GCP calls with request
origins within the perimeter. For Service Perimeter Bridge, must
be empty.

Format: accessPolicies/{policy_id}/accessLevels/{access_level_name} */
  readonly accessLevels?: string[];
  /** A list of GCP resources that are inside of the service perimeter.
Currently only projects are allowed.
Format: projects/{project_number} */
  readonly resources?: string[];
  /** GCP services that are subject to the Service Perimeter
restrictions. Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions. */
  readonly restrictedServices?: string[];
  /** vpc_accessible_services block */
  readonly vpcAccessibleServices?: AccessContextManagerServicePerimeterSpecVpcAccessibleServices[];
}
export interface AccessContextManagerServicePerimeterStatusVpcAccessibleServices {
  /** The list of APIs usable within the Service Perimeter.
Must be empty unless 'enableRestriction' is True. */
  readonly allowedServices?: string[];
  /** Whether to restrict API calls within the Service Perimeter to the
list of APIs specified in 'allowedServices'. */
  readonly enableRestriction?: boolean;
}
export interface AccessContextManagerServicePerimeterStatus {
  /** A list of AccessLevel resource names that allow resources within
the ServicePerimeter to be accessed from the internet.
AccessLevels listed must be in the same policy as this
ServicePerimeter. Referencing a nonexistent AccessLevel is a
syntax error. If no AccessLevel names are listed, resources within
the perimeter can only be accessed via GCP calls with request
origins within the perimeter. For Service Perimeter Bridge, must
be empty.

Format: accessPolicies/{policy_id}/accessLevels/{access_level_name} */
  readonly accessLevels?: string[];
  /** A list of GCP resources that are inside of the service perimeter.
Currently only projects are allowed.
Format: projects/{project_number} */
  readonly resources?: string[];
  /** GCP services that are subject to the Service Perimeter
restrictions. Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions. */
  readonly restrictedServices?: string[];
  /** vpc_accessible_services block */
  readonly vpcAccessibleServices?: AccessContextManagerServicePerimeterStatusVpcAccessibleServices[];
}
export interface AccessContextManagerServicePerimeterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class AccessContextManagerServicePerimeter extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AccessContextManagerServicePerimeterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_service_perimeter',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._parent = config.parent;
    this._perimeterType = config.perimeterType;
    this._title = config.title;
    this._useExplicitDryRunSpec = config.useExplicitDryRunSpec;
    this._spec = config.spec;
    this._status = config.status;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: true
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // parent - computed: false, optional: false, required: true
  private _parent: string;
  public get parent() {
    return this._parent;
  }
  public set parent(value: string) {
    this._parent = value;
  }

  // perimeter_type - computed: false, optional: true, required: false
  private _perimeterType?: string;
  public get perimeterType() {
    return this._perimeterType;
  }
  public set perimeterType(value: string | undefined) {
    this._perimeterType = value;
  }

  // title - computed: false, optional: false, required: true
  private _title: string;
  public get title() {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }

  // update_time - computed: true, optional: false, required: true
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // use_explicit_dry_run_spec - computed: false, optional: true, required: false
  private _useExplicitDryRunSpec?: boolean;
  public get useExplicitDryRunSpec() {
    return this._useExplicitDryRunSpec;
  }
  public set useExplicitDryRunSpec(value: boolean | undefined) {
    this._useExplicitDryRunSpec = value;
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: AccessContextManagerServicePerimeterSpec[];
  public get spec() {
    return this._spec;
  }
  public set spec(value: AccessContextManagerServicePerimeterSpec[] | undefined) {
    this._spec = value;
  }

  // status - computed: false, optional: true, required: false
  private _status?: AccessContextManagerServicePerimeterStatus[];
  public get status() {
    return this._status;
  }
  public set status(value: AccessContextManagerServicePerimeterStatus[] | undefined) {
    this._status = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AccessContextManagerServicePerimeterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AccessContextManagerServicePerimeterTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      parent: this._parent,
      perimeter_type: this._perimeterType,
      title: this._title,
      use_explicit_dry_run_spec: this._useExplicitDryRunSpec,
      spec: this._spec,
      status: this._status,
      timeouts: this._timeouts,
    };
  }
}
