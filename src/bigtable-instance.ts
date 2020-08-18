// https://www.terraform.io/docs/providers/google/r/bigtable_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BigtableInstanceConfig extends TerraformMetaArguments {
  /** Whether or not to allow Terraform to destroy the instance. Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail. */
  readonly deletionProtection?: boolean;
  /** The human-readable display name of the Bigtable instance. Defaults to the instance name. */
  readonly displayName?: string;
  /** The instance type to create. One of "DEVELOPMENT" or "PRODUCTION". Defaults to "PRODUCTION". */
  readonly instanceType?: string;
  /** A mapping of labels to assign to the resource. */
  readonly labels?: { [key: string]: string };
  /** The name (also called Instance Id in the Cloud Console) of the Cloud Bigtable instance. */
  readonly name: string;
  /** The ID of the project in which the resource belongs. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** cluster block */
  readonly cluster?: BigtableInstanceCluster[];
}
export interface BigtableInstanceCluster {
  /** The ID of the Cloud Bigtable cluster. */
  readonly clusterId: string;
  /** The number of nodes in your Cloud Bigtable cluster. Required, with a minimum of 1 for a PRODUCTION instance. Must be left unset for a DEVELOPMENT instance. */
  readonly numNodes?: number;
  /** The storage type to use. One of "SSD" or "HDD". Defaults to "SSD". */
  readonly storageType?: string;
  /** The zone to create the Cloud Bigtable cluster in. Each cluster must have a different zone in the same region. Zones that support Bigtable instances are noted on the Cloud Bigtable locations page. */
  readonly zone: string;
}

// Resource

export class BigtableInstance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BigtableInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigtable_instance',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deletionProtection = config.deletionProtection;
    this._displayName = config.displayName;
    this._instanceType = config.instanceType;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._cluster = config.cluster;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean;
  public get deletionProtection() {
    return this._deletionProtection;
  }
  public set deletionProtection(value: boolean | undefined) {
    this._deletionProtection = value;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string;
  public get instanceType() {
    return this._instanceType;
  }
  public set instanceType(value: string | undefined) {
    this._instanceType = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: BigtableInstanceCluster[];
  public get cluster() {
    return this._cluster;
  }
  public set cluster(value: BigtableInstanceCluster[] | undefined) {
    this._cluster = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_protection: this._deletionProtection,
      display_name: this._displayName,
      instance_type: this._instanceType,
      labels: this._labels,
      name: this._name,
      project: this._project,
      cluster: this._cluster,
    };
  }
}
