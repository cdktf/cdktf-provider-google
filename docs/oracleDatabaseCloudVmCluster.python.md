# `oracleDatabaseCloudVmCluster` Submodule <a name="`oracleDatabaseCloudVmCluster` Submodule" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseCloudVmCluster <a name="OracleDatabaseCloudVmCluster" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster google_oracle_database_cloud_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_vm_cluster

oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_vm_cluster_id: str,
  exadata_infrastructure: str,
  location: str,
  backup_odb_subnet: str = None,
  backup_subnet_cidr: str = None,
  cidr: str = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  network: str = None,
  odb_network: str = None,
  odb_subnet: str = None,
  project: str = None,
  properties: OracleDatabaseCloudVmClusterProperties = None,
  timeouts: OracleDatabaseCloudVmClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.cloudVmClusterId">cloud_vm_cluster_id</a></code> | <code>str</code> | The ID of the VM Cluster to create. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.exadataInfrastructure">exadata_infrastructure</a></code> | <code>str</code> | The name of the Exadata Infrastructure resource on which VM cluster resource is created, in the following format: projects/{project}/locations/{region}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbNode'. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.backupOdbSubnet">backup_odb_subnet</a></code> | <code>str</code> | The name of the backup OdbSubnet associated with the VM Cluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.backupSubnetCidr">backup_subnet_cidr</a></code> | <code>str</code> | CIDR range of the backup subnet. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.cidr">cidr</a></code> | <code>str</code> | Network settings. CIDR to use for cluster IP allocation. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Terraform will be prevented from destroying the cluster. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User friendly name for this resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#id OracleDatabaseCloudVmCluster#id}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels or tags associated with the VM Cluster. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.network">network</a></code> | <code>str</code> | The name of the VPC network. Format: projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.odbNetwork">odb_network</a></code> | <code>str</code> | The name of the OdbNetwork associated with the VM Cluster. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.odbSubnet">odb_subnet</a></code> | <code>str</code> | The name of the OdbSubnet associated with the VM Cluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#project OracleDatabaseCloudVmCluster#project}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties">OracleDatabaseCloudVmClusterProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts">OracleDatabaseCloudVmClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_vm_cluster_id`<sup>Required</sup> <a name="cloud_vm_cluster_id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.cloudVmClusterId"></a>

- *Type:* str

The ID of the VM Cluster to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#cloud_vm_cluster_id OracleDatabaseCloudVmCluster#cloud_vm_cluster_id}

---

##### `exadata_infrastructure`<sup>Required</sup> <a name="exadata_infrastructure" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.exadataInfrastructure"></a>

- *Type:* str

The name of the Exadata Infrastructure resource on which VM cluster resource is created, in the following format: projects/{project}/locations/{region}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#exadata_infrastructure OracleDatabaseCloudVmCluster#exadata_infrastructure}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbNode'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#location OracleDatabaseCloudVmCluster#location}

---

##### `backup_odb_subnet`<sup>Optional</sup> <a name="backup_odb_subnet" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.backupOdbSubnet"></a>

- *Type:* str

The name of the backup OdbSubnet associated with the VM Cluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#backup_odb_subnet OracleDatabaseCloudVmCluster#backup_odb_subnet}

---

##### `backup_subnet_cidr`<sup>Optional</sup> <a name="backup_subnet_cidr" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.backupSubnetCidr"></a>

- *Type:* str

CIDR range of the backup subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#backup_subnet_cidr OracleDatabaseCloudVmCluster#backup_subnet_cidr}

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.cidr"></a>

- *Type:* str

Network settings. CIDR to use for cluster IP allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#cidr OracleDatabaseCloudVmCluster#cidr}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.deletionProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Terraform will be prevented from destroying the cluster.

Deleting this cluster via terraform destroy or terraform apply will only succeed if this field is false in the Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#deletion_protection OracleDatabaseCloudVmCluster#deletion_protection}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.displayName"></a>

- *Type:* str

User friendly name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#display_name OracleDatabaseCloudVmCluster#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#id OracleDatabaseCloudVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels or tags associated with the VM Cluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#labels OracleDatabaseCloudVmCluster#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.network"></a>

- *Type:* str

The name of the VPC network. Format: projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#network OracleDatabaseCloudVmCluster#network}

---

##### `odb_network`<sup>Optional</sup> <a name="odb_network" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.odbNetwork"></a>

- *Type:* str

The name of the OdbNetwork associated with the VM Cluster.

Format:
projects/{project}/locations/{location}/odbNetworks/{odb_network}
It is optional but if specified, this should match the parent ODBNetwork of
the odb_subnet and backup_odb_subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#odb_network OracleDatabaseCloudVmCluster#odb_network}

---

##### `odb_subnet`<sup>Optional</sup> <a name="odb_subnet" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.odbSubnet"></a>

- *Type:* str

The name of the OdbSubnet associated with the VM Cluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#odb_subnet OracleDatabaseCloudVmCluster#odb_subnet}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#project OracleDatabaseCloudVmCluster#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties">OracleDatabaseCloudVmClusterProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#properties OracleDatabaseCloudVmCluster#properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts">OracleDatabaseCloudVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#timeouts OracleDatabaseCloudVmCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetBackupOdbSubnet">reset_backup_odb_subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetBackupSubnetCidr">reset_backup_subnet_cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetCidr">reset_cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetOdbNetwork">reset_odb_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetOdbSubnet">reset_odb_subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_properties` <a name="put_properties" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties"></a>

```python
def put_properties(
  cpu_core_count: typing.Union[int, float],
  license_type: str,
  cluster_name: str = None,
  data_storage_size_tb: typing.Union[int, float] = None,
  db_node_storage_size_gb: typing.Union[int, float] = None,
  db_server_ocids: typing.List[str] = None,
  diagnostics_data_collection_options: OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions = None,
  disk_redundancy: str = None,
  gi_version: str = None,
  hostname_prefix: str = None,
  local_backup_enabled: typing.Union[bool, IResolvable] = None,
  memory_size_gb: typing.Union[int, float] = None,
  node_count: typing.Union[int, float] = None,
  ocpu_count: typing.Union[int, float] = None,
  sparse_diskgroup_enabled: typing.Union[bool, IResolvable] = None,
  ssh_public_keys: typing.List[str] = None,
  time_zone: OracleDatabaseCloudVmClusterPropertiesTimeZone = None
) -> None
```

###### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties.parameter.cpuCoreCount"></a>

- *Type:* typing.Union[int, float]

Number of enabled CPU cores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#cpu_core_count OracleDatabaseCloudVmCluster#cpu_core_count}

---

###### `license_type`<sup>Required</sup> <a name="license_type" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties.parameter.licenseType"></a>

- *Type:* str

License type of VM Cluster.   Possible values:  LICENSE_TYPE_UNSPECIFIED LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#license_type OracleDatabaseCloudVmCluster#license_type}

---

###### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties.parameter.clusterName"></a>

- *Type:* str

OCI Cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#cluster_name OracleDatabaseCloudVmCluster#cluster_name}

---

###### `data_storage_size_tb`<sup>Optional</sup> <a name="data_storage_size_tb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties.parameter.dataStorageSizeTb"></a>

- *Type:* typing.Union[int, float]

The data disk group size to be allocated in TBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#data_storage_size_tb OracleDatabaseCloudVmCluster#data_storage_size_tb}

---

###### `db_node_storage_size_gb`<sup>Optional</sup> <a name="db_node_storage_size_gb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties.parameter.dbNodeStorageSizeGb"></a>

- *Type:* typing.Union[int, float]

Local storage per VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#db_node_storage_size_gb OracleDatabaseCloudVmCluster#db_node_storage_size_gb}

---

###### `db_server_ocids`<sup>Optional</sup> <a name="db_server_ocids" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties.parameter.dbServerOcids"></a>

- *Type:* typing.List[str]

OCID of database servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#db_server_ocids OracleDatabaseCloudVmCluster#db_server_ocids}

---

###### `diagnostics_data_collection_options`<sup>Optional</sup> <a name="diagnostics_data_collection_options" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties.parameter.diagnosticsDataCollectionOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

diagnostics_data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#diagnostics_data_collection_options OracleDatabaseCloudVmCluster#diagnostics_data_collection_options}

---

###### `disk_redundancy`<sup>Optional</sup> <a name="disk_redundancy" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties.parameter.diskRedundancy"></a>

- *Type:* str

The type of redundancy.   Possible values:  DISK_REDUNDANCY_UNSPECIFIED HIGH NORMAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#disk_redundancy OracleDatabaseCloudVmCluster#disk_redundancy}

---

###### `gi_version`<sup>Optional</sup> <a name="gi_version" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties.parameter.giVersion"></a>

- *Type:* str

Grid Infrastructure Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#gi_version OracleDatabaseCloudVmCluster#gi_version}

---

###### `hostname_prefix`<sup>Optional</sup> <a name="hostname_prefix" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties.parameter.hostnamePrefix"></a>

- *Type:* str

Prefix for VM cluster host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#hostname_prefix OracleDatabaseCloudVmCluster#hostname_prefix}

---

###### `local_backup_enabled`<sup>Optional</sup> <a name="local_backup_enabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties.parameter.localBackupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use local backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#local_backup_enabled OracleDatabaseCloudVmCluster#local_backup_enabled}

---

###### `memory_size_gb`<sup>Optional</sup> <a name="memory_size_gb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties.parameter.memorySizeGb"></a>

- *Type:* typing.Union[int, float]

Memory allocated in GBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#memory_size_gb OracleDatabaseCloudVmCluster#memory_size_gb}

---

###### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

Number of database servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#node_count OracleDatabaseCloudVmCluster#node_count}

---

###### `ocpu_count`<sup>Optional</sup> <a name="ocpu_count" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties.parameter.ocpuCount"></a>

- *Type:* typing.Union[int, float]

OCPU count per VM. Minimum is 0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#ocpu_count OracleDatabaseCloudVmCluster#ocpu_count}

---

###### `sparse_diskgroup_enabled`<sup>Optional</sup> <a name="sparse_diskgroup_enabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties.parameter.sparseDiskgroupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use exadata sparse snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#sparse_diskgroup_enabled OracleDatabaseCloudVmCluster#sparse_diskgroup_enabled}

---

###### `ssh_public_keys`<sup>Optional</sup> <a name="ssh_public_keys" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties.parameter.sshPublicKeys"></a>

- *Type:* typing.List[str]

SSH public keys to be stored with cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#ssh_public_keys OracleDatabaseCloudVmCluster#ssh_public_keys}

---

###### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putProperties.parameter.timeZone"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone">OracleDatabaseCloudVmClusterPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#time_zone OracleDatabaseCloudVmCluster#time_zone}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#create OracleDatabaseCloudVmCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#delete OracleDatabaseCloudVmCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#update OracleDatabaseCloudVmCluster#update}.

---

##### `reset_backup_odb_subnet` <a name="reset_backup_odb_subnet" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetBackupOdbSubnet"></a>

```python
def reset_backup_odb_subnet() -> None
```

##### `reset_backup_subnet_cidr` <a name="reset_backup_subnet_cidr" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetBackupSubnetCidr"></a>

```python
def reset_backup_subnet_cidr() -> None
```

##### `reset_cidr` <a name="reset_cidr" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetCidr"></a>

```python
def reset_cidr() -> None
```

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_odb_network` <a name="reset_odb_network" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetOdbNetwork"></a>

```python
def reset_odb_network() -> None
```

##### `reset_odb_subnet` <a name="reset_odb_subnet" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetOdbSubnet"></a>

```python
def reset_odb_subnet() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OracleDatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_vm_cluster

oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_vm_cluster

oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_vm_cluster

oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_vm_cluster

oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OracleDatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OracleDatabaseCloudVmCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OracleDatabaseCloudVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OracleDatabaseCloudVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.gcpOracleZone">gcp_oracle_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference">OracleDatabaseCloudVmClusterPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference">OracleDatabaseCloudVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.backupOdbSubnetInput">backup_odb_subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.backupSubnetCidrInput">backup_subnet_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cloudVmClusterIdInput">cloud_vm_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.exadataInfrastructureInput">exadata_infrastructure_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.odbNetworkInput">odb_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.odbSubnetInput">odb_subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.propertiesInput">properties_input</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties">OracleDatabaseCloudVmClusterProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts">OracleDatabaseCloudVmClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.backupOdbSubnet">backup_odb_subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.backupSubnetCidr">backup_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cloudVmClusterId">cloud_vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.exadataInfrastructure">exadata_infrastructure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.odbNetwork">odb_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.odbSubnet">odb_subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `gcp_oracle_zone`<sup>Required</sup> <a name="gcp_oracle_zone" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.gcpOracleZone"></a>

```python
gcp_oracle_zone: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.properties"></a>

```python
properties: OracleDatabaseCloudVmClusterPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference">OracleDatabaseCloudVmClusterPropertiesOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.timeouts"></a>

```python
timeouts: OracleDatabaseCloudVmClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference">OracleDatabaseCloudVmClusterTimeoutsOutputReference</a>

---

##### `backup_odb_subnet_input`<sup>Optional</sup> <a name="backup_odb_subnet_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.backupOdbSubnetInput"></a>

```python
backup_odb_subnet_input: str
```

- *Type:* str

---

##### `backup_subnet_cidr_input`<sup>Optional</sup> <a name="backup_subnet_cidr_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.backupSubnetCidrInput"></a>

```python
backup_subnet_cidr_input: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `cloud_vm_cluster_id_input`<sup>Optional</sup> <a name="cloud_vm_cluster_id_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cloudVmClusterIdInput"></a>

```python
cloud_vm_cluster_id_input: str
```

- *Type:* str

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.deletionProtectionInput"></a>

```python
deletion_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `exadata_infrastructure_input`<sup>Optional</sup> <a name="exadata_infrastructure_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.exadataInfrastructureInput"></a>

```python
exadata_infrastructure_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `odb_network_input`<sup>Optional</sup> <a name="odb_network_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.odbNetworkInput"></a>

```python
odb_network_input: str
```

- *Type:* str

---

##### `odb_subnet_input`<sup>Optional</sup> <a name="odb_subnet_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.odbSubnetInput"></a>

```python
odb_subnet_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.propertiesInput"></a>

```python
properties_input: OracleDatabaseCloudVmClusterProperties
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties">OracleDatabaseCloudVmClusterProperties</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OracleDatabaseCloudVmClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts">OracleDatabaseCloudVmClusterTimeouts</a>]

---

##### `backup_odb_subnet`<sup>Required</sup> <a name="backup_odb_subnet" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.backupOdbSubnet"></a>

```python
backup_odb_subnet: str
```

- *Type:* str

---

##### `backup_subnet_cidr`<sup>Required</sup> <a name="backup_subnet_cidr" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.backupSubnetCidr"></a>

```python
backup_subnet_cidr: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `cloud_vm_cluster_id`<sup>Required</sup> <a name="cloud_vm_cluster_id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.cloudVmClusterId"></a>

```python
cloud_vm_cluster_id: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `exadata_infrastructure`<sup>Required</sup> <a name="exadata_infrastructure" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.exadataInfrastructure"></a>

```python
exadata_infrastructure: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `odb_network`<sup>Required</sup> <a name="odb_network" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.odbNetwork"></a>

```python
odb_network: str
```

- *Type:* str

---

##### `odb_subnet`<sup>Required</sup> <a name="odb_subnet" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.odbSubnet"></a>

```python
odb_subnet: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseCloudVmClusterConfig <a name="OracleDatabaseCloudVmClusterConfig" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_vm_cluster

oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_vm_cluster_id: str,
  exadata_infrastructure: str,
  location: str,
  backup_odb_subnet: str = None,
  backup_subnet_cidr: str = None,
  cidr: str = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  network: str = None,
  odb_network: str = None,
  odb_subnet: str = None,
  project: str = None,
  properties: OracleDatabaseCloudVmClusterProperties = None,
  timeouts: OracleDatabaseCloudVmClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.cloudVmClusterId">cloud_vm_cluster_id</a></code> | <code>str</code> | The ID of the VM Cluster to create. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.exadataInfrastructure">exadata_infrastructure</a></code> | <code>str</code> | The name of the Exadata Infrastructure resource on which VM cluster resource is created, in the following format: projects/{project}/locations/{region}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbNode'. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.backupOdbSubnet">backup_odb_subnet</a></code> | <code>str</code> | The name of the backup OdbSubnet associated with the VM Cluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.backupSubnetCidr">backup_subnet_cidr</a></code> | <code>str</code> | CIDR range of the backup subnet. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.cidr">cidr</a></code> | <code>str</code> | Network settings. CIDR to use for cluster IP allocation. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Terraform will be prevented from destroying the cluster. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.displayName">display_name</a></code> | <code>str</code> | User friendly name for this resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#id OracleDatabaseCloudVmCluster#id}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels or tags associated with the VM Cluster. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.network">network</a></code> | <code>str</code> | The name of the VPC network. Format: projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.odbNetwork">odb_network</a></code> | <code>str</code> | The name of the OdbNetwork associated with the VM Cluster. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.odbSubnet">odb_subnet</a></code> | <code>str</code> | The name of the OdbSubnet associated with the VM Cluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#project OracleDatabaseCloudVmCluster#project}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties">OracleDatabaseCloudVmClusterProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts">OracleDatabaseCloudVmClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_vm_cluster_id`<sup>Required</sup> <a name="cloud_vm_cluster_id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.cloudVmClusterId"></a>

```python
cloud_vm_cluster_id: str
```

- *Type:* str

The ID of the VM Cluster to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#cloud_vm_cluster_id OracleDatabaseCloudVmCluster#cloud_vm_cluster_id}

---

##### `exadata_infrastructure`<sup>Required</sup> <a name="exadata_infrastructure" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.exadataInfrastructure"></a>

```python
exadata_infrastructure: str
```

- *Type:* str

The name of the Exadata Infrastructure resource on which VM cluster resource is created, in the following format: projects/{project}/locations/{region}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#exadata_infrastructure OracleDatabaseCloudVmCluster#exadata_infrastructure}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbNode'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#location OracleDatabaseCloudVmCluster#location}

---

##### `backup_odb_subnet`<sup>Optional</sup> <a name="backup_odb_subnet" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.backupOdbSubnet"></a>

```python
backup_odb_subnet: str
```

- *Type:* str

The name of the backup OdbSubnet associated with the VM Cluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#backup_odb_subnet OracleDatabaseCloudVmCluster#backup_odb_subnet}

---

##### `backup_subnet_cidr`<sup>Optional</sup> <a name="backup_subnet_cidr" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.backupSubnetCidr"></a>

```python
backup_subnet_cidr: str
```

- *Type:* str

CIDR range of the backup subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#backup_subnet_cidr OracleDatabaseCloudVmCluster#backup_subnet_cidr}

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Network settings. CIDR to use for cluster IP allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#cidr OracleDatabaseCloudVmCluster#cidr}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Terraform will be prevented from destroying the cluster.

Deleting this cluster via terraform destroy or terraform apply will only succeed if this field is false in the Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#deletion_protection OracleDatabaseCloudVmCluster#deletion_protection}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User friendly name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#display_name OracleDatabaseCloudVmCluster#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#id OracleDatabaseCloudVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels or tags associated with the VM Cluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#labels OracleDatabaseCloudVmCluster#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The name of the VPC network. Format: projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#network OracleDatabaseCloudVmCluster#network}

---

##### `odb_network`<sup>Optional</sup> <a name="odb_network" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.odbNetwork"></a>

```python
odb_network: str
```

- *Type:* str

The name of the OdbNetwork associated with the VM Cluster.

Format:
projects/{project}/locations/{location}/odbNetworks/{odb_network}
It is optional but if specified, this should match the parent ODBNetwork of
the odb_subnet and backup_odb_subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#odb_network OracleDatabaseCloudVmCluster#odb_network}

---

##### `odb_subnet`<sup>Optional</sup> <a name="odb_subnet" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.odbSubnet"></a>

```python
odb_subnet: str
```

- *Type:* str

The name of the OdbSubnet associated with the VM Cluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#odb_subnet OracleDatabaseCloudVmCluster#odb_subnet}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#project OracleDatabaseCloudVmCluster#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.properties"></a>

```python
properties: OracleDatabaseCloudVmClusterProperties
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties">OracleDatabaseCloudVmClusterProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#properties OracleDatabaseCloudVmCluster#properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterConfig.property.timeouts"></a>

```python
timeouts: OracleDatabaseCloudVmClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts">OracleDatabaseCloudVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#timeouts OracleDatabaseCloudVmCluster#timeouts}

---

### OracleDatabaseCloudVmClusterProperties <a name="OracleDatabaseCloudVmClusterProperties" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_vm_cluster

oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties(
  cpu_core_count: typing.Union[int, float],
  license_type: str,
  cluster_name: str = None,
  data_storage_size_tb: typing.Union[int, float] = None,
  db_node_storage_size_gb: typing.Union[int, float] = None,
  db_server_ocids: typing.List[str] = None,
  diagnostics_data_collection_options: OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions = None,
  disk_redundancy: str = None,
  gi_version: str = None,
  hostname_prefix: str = None,
  local_backup_enabled: typing.Union[bool, IResolvable] = None,
  memory_size_gb: typing.Union[int, float] = None,
  node_count: typing.Union[int, float] = None,
  ocpu_count: typing.Union[int, float] = None,
  sparse_diskgroup_enabled: typing.Union[bool, IResolvable] = None,
  ssh_public_keys: typing.List[str] = None,
  time_zone: OracleDatabaseCloudVmClusterPropertiesTimeZone = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | Number of enabled CPU cores. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.licenseType">license_type</a></code> | <code>str</code> | License type of VM Cluster.   Possible values:  LICENSE_TYPE_UNSPECIFIED LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.clusterName">cluster_name</a></code> | <code>str</code> | OCI Cluster name. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.dataStorageSizeTb">data_storage_size_tb</a></code> | <code>typing.Union[int, float]</code> | The data disk group size to be allocated in TBs. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.dbNodeStorageSizeGb">db_node_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | Local storage per VM. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.dbServerOcids">db_server_ocids</a></code> | <code>typing.List[str]</code> | OCID of database servers. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.diagnosticsDataCollectionOptions">diagnostics_data_collection_options</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a></code> | diagnostics_data_collection_options block. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.diskRedundancy">disk_redundancy</a></code> | <code>str</code> | The type of redundancy.   Possible values:  DISK_REDUNDANCY_UNSPECIFIED HIGH NORMAL. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.giVersion">gi_version</a></code> | <code>str</code> | Grid Infrastructure Version. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.hostnamePrefix">hostname_prefix</a></code> | <code>str</code> | Prefix for VM cluster host names. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.localBackupEnabled">local_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use local backup. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.memorySizeGb">memory_size_gb</a></code> | <code>typing.Union[int, float]</code> | Memory allocated in GBs. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Number of database servers. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.ocpuCount">ocpu_count</a></code> | <code>typing.Union[int, float]</code> | OCPU count per VM. Minimum is 0.1. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.sparseDiskgroupEnabled">sparse_diskgroup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use exadata sparse snapshots. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | SSH public keys to be stored with cluster. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.timeZone">time_zone</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone">OracleDatabaseCloudVmClusterPropertiesTimeZone</a></code> | time_zone block. |

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of enabled CPU cores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#cpu_core_count OracleDatabaseCloudVmCluster#cpu_core_count}

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

License type of VM Cluster.   Possible values:  LICENSE_TYPE_UNSPECIFIED LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#license_type OracleDatabaseCloudVmCluster#license_type}

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

OCI Cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#cluster_name OracleDatabaseCloudVmCluster#cluster_name}

---

##### `data_storage_size_tb`<sup>Optional</sup> <a name="data_storage_size_tb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.dataStorageSizeTb"></a>

```python
data_storage_size_tb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The data disk group size to be allocated in TBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#data_storage_size_tb OracleDatabaseCloudVmCluster#data_storage_size_tb}

---

##### `db_node_storage_size_gb`<sup>Optional</sup> <a name="db_node_storage_size_gb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.dbNodeStorageSizeGb"></a>

```python
db_node_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Local storage per VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#db_node_storage_size_gb OracleDatabaseCloudVmCluster#db_node_storage_size_gb}

---

##### `db_server_ocids`<sup>Optional</sup> <a name="db_server_ocids" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.dbServerOcids"></a>

```python
db_server_ocids: typing.List[str]
```

- *Type:* typing.List[str]

OCID of database servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#db_server_ocids OracleDatabaseCloudVmCluster#db_server_ocids}

---

##### `diagnostics_data_collection_options`<sup>Optional</sup> <a name="diagnostics_data_collection_options" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.diagnosticsDataCollectionOptions"></a>

```python
diagnostics_data_collection_options: OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

diagnostics_data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#diagnostics_data_collection_options OracleDatabaseCloudVmCluster#diagnostics_data_collection_options}

---

##### `disk_redundancy`<sup>Optional</sup> <a name="disk_redundancy" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.diskRedundancy"></a>

```python
disk_redundancy: str
```

- *Type:* str

The type of redundancy.   Possible values:  DISK_REDUNDANCY_UNSPECIFIED HIGH NORMAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#disk_redundancy OracleDatabaseCloudVmCluster#disk_redundancy}

---

##### `gi_version`<sup>Optional</sup> <a name="gi_version" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.giVersion"></a>

```python
gi_version: str
```

- *Type:* str

Grid Infrastructure Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#gi_version OracleDatabaseCloudVmCluster#gi_version}

---

##### `hostname_prefix`<sup>Optional</sup> <a name="hostname_prefix" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.hostnamePrefix"></a>

```python
hostname_prefix: str
```

- *Type:* str

Prefix for VM cluster host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#hostname_prefix OracleDatabaseCloudVmCluster#hostname_prefix}

---

##### `local_backup_enabled`<sup>Optional</sup> <a name="local_backup_enabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.localBackupEnabled"></a>

```python
local_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use local backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#local_backup_enabled OracleDatabaseCloudVmCluster#local_backup_enabled}

---

##### `memory_size_gb`<sup>Optional</sup> <a name="memory_size_gb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.memorySizeGb"></a>

```python
memory_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Memory allocated in GBs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#memory_size_gb OracleDatabaseCloudVmCluster#memory_size_gb}

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of database servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#node_count OracleDatabaseCloudVmCluster#node_count}

---

##### `ocpu_count`<sup>Optional</sup> <a name="ocpu_count" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.ocpuCount"></a>

```python
ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

OCPU count per VM. Minimum is 0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#ocpu_count OracleDatabaseCloudVmCluster#ocpu_count}

---

##### `sparse_diskgroup_enabled`<sup>Optional</sup> <a name="sparse_diskgroup_enabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.sparseDiskgroupEnabled"></a>

```python
sparse_diskgroup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use exadata sparse snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#sparse_diskgroup_enabled OracleDatabaseCloudVmCluster#sparse_diskgroup_enabled}

---

##### `ssh_public_keys`<sup>Optional</sup> <a name="ssh_public_keys" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

SSH public keys to be stored with cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#ssh_public_keys OracleDatabaseCloudVmCluster#ssh_public_keys}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties.property.timeZone"></a>

```python
time_zone: OracleDatabaseCloudVmClusterPropertiesTimeZone
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone">OracleDatabaseCloudVmClusterPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#time_zone OracleDatabaseCloudVmCluster#time_zone}

---

### OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions <a name="OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_vm_cluster

oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions(
  diagnostics_events_enabled: typing.Union[bool, IResolvable] = None,
  health_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  incident_logs_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.diagnosticsEventsEnabled">diagnostics_events_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether diagnostic collection is enabled for the VM cluster. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.healthMonitoringEnabled">health_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether health monitoring is enabled for the VM cluster. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.incidentLogsEnabled">incident_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether incident logs and trace collection are enabled for the VM cluster. |

---

##### `diagnostics_events_enabled`<sup>Optional</sup> <a name="diagnostics_events_enabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.diagnosticsEventsEnabled"></a>

```python
diagnostics_events_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether diagnostic collection is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#diagnostics_events_enabled OracleDatabaseCloudVmCluster#diagnostics_events_enabled}

---

##### `health_monitoring_enabled`<sup>Optional</sup> <a name="health_monitoring_enabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.healthMonitoringEnabled"></a>

```python
health_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether health monitoring is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#health_monitoring_enabled OracleDatabaseCloudVmCluster#health_monitoring_enabled}

---

##### `incident_logs_enabled`<sup>Optional</sup> <a name="incident_logs_enabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions.property.incidentLogsEnabled"></a>

```python
incident_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether incident logs and trace collection are enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#incident_logs_enabled OracleDatabaseCloudVmCluster#incident_logs_enabled}

---

### OracleDatabaseCloudVmClusterPropertiesTimeZone <a name="OracleDatabaseCloudVmClusterPropertiesTimeZone" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_vm_cluster

oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone(
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone.property.id">id</a></code> | <code>str</code> | IANA Time Zone Database time zone, e.g. "America/New_York". |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone.property.id"></a>

```python
id: str
```

- *Type:* str

IANA Time Zone Database time zone, e.g. "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#id OracleDatabaseCloudVmCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OracleDatabaseCloudVmClusterTimeouts <a name="OracleDatabaseCloudVmClusterTimeouts" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_vm_cluster

oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#create OracleDatabaseCloudVmCluster#create}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#delete OracleDatabaseCloudVmCluster#delete}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#update OracleDatabaseCloudVmCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#create OracleDatabaseCloudVmCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#delete OracleDatabaseCloudVmCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#update OracleDatabaseCloudVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference <a name="OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_vm_cluster

oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetDiagnosticsEventsEnabled">reset_diagnostics_events_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetHealthMonitoringEnabled">reset_health_monitoring_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetIncidentLogsEnabled">reset_incident_logs_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_diagnostics_events_enabled` <a name="reset_diagnostics_events_enabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetDiagnosticsEventsEnabled"></a>

```python
def reset_diagnostics_events_enabled() -> None
```

##### `reset_health_monitoring_enabled` <a name="reset_health_monitoring_enabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetHealthMonitoringEnabled"></a>

```python
def reset_health_monitoring_enabled() -> None
```

##### `reset_incident_logs_enabled` <a name="reset_incident_logs_enabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.resetIncidentLogsEnabled"></a>

```python
def reset_incident_logs_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabledInput">diagnostics_events_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabledInput">health_monitoring_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabledInput">incident_logs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled">diagnostics_events_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabled">health_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabled">incident_logs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `diagnostics_events_enabled_input`<sup>Optional</sup> <a name="diagnostics_events_enabled_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabledInput"></a>

```python
diagnostics_events_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `health_monitoring_enabled_input`<sup>Optional</sup> <a name="health_monitoring_enabled_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabledInput"></a>

```python
health_monitoring_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `incident_logs_enabled_input`<sup>Optional</sup> <a name="incident_logs_enabled_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabledInput"></a>

```python
incident_logs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `diagnostics_events_enabled`<sup>Required</sup> <a name="diagnostics_events_enabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.diagnosticsEventsEnabled"></a>

```python
diagnostics_events_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `health_monitoring_enabled`<sup>Required</sup> <a name="health_monitoring_enabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.healthMonitoringEnabled"></a>

```python
health_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `incident_logs_enabled`<sup>Required</sup> <a name="incident_logs_enabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.incidentLogsEnabled"></a>

```python
incident_logs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

---


### OracleDatabaseCloudVmClusterPropertiesOutputReference <a name="OracleDatabaseCloudVmClusterPropertiesOutputReference" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_vm_cluster

oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.putDiagnosticsDataCollectionOptions">put_diagnostics_data_collection_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.putTimeZone">put_time_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetClusterName">reset_cluster_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDataStorageSizeTb">reset_data_storage_size_tb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDbNodeStorageSizeGb">reset_db_node_storage_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDbServerOcids">reset_db_server_ocids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDiagnosticsDataCollectionOptions">reset_diagnostics_data_collection_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDiskRedundancy">reset_disk_redundancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetGiVersion">reset_gi_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetHostnamePrefix">reset_hostname_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetLocalBackupEnabled">reset_local_backup_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetMemorySizeGb">reset_memory_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetNodeCount">reset_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetOcpuCount">reset_ocpu_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetSparseDiskgroupEnabled">reset_sparse_diskgroup_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetSshPublicKeys">reset_ssh_public_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_diagnostics_data_collection_options` <a name="put_diagnostics_data_collection_options" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.putDiagnosticsDataCollectionOptions"></a>

```python
def put_diagnostics_data_collection_options(
  diagnostics_events_enabled: typing.Union[bool, IResolvable] = None,
  health_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  incident_logs_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `diagnostics_events_enabled`<sup>Optional</sup> <a name="diagnostics_events_enabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.putDiagnosticsDataCollectionOptions.parameter.diagnosticsEventsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether diagnostic collection is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#diagnostics_events_enabled OracleDatabaseCloudVmCluster#diagnostics_events_enabled}

---

###### `health_monitoring_enabled`<sup>Optional</sup> <a name="health_monitoring_enabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.putDiagnosticsDataCollectionOptions.parameter.healthMonitoringEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether health monitoring is enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#health_monitoring_enabled OracleDatabaseCloudVmCluster#health_monitoring_enabled}

---

###### `incident_logs_enabled`<sup>Optional</sup> <a name="incident_logs_enabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.putDiagnosticsDataCollectionOptions.parameter.incidentLogsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether incident logs and trace collection are enabled for the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#incident_logs_enabled OracleDatabaseCloudVmCluster#incident_logs_enabled}

---

##### `put_time_zone` <a name="put_time_zone" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.putTimeZone"></a>

```python
def put_time_zone(
  id: str = None
) -> None
```

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.putTimeZone.parameter.id"></a>

- *Type:* str

IANA Time Zone Database time zone, e.g. "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/oracle_database_cloud_vm_cluster#id OracleDatabaseCloudVmCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reset_cluster_name` <a name="reset_cluster_name" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetClusterName"></a>

```python
def reset_cluster_name() -> None
```

##### `reset_data_storage_size_tb` <a name="reset_data_storage_size_tb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDataStorageSizeTb"></a>

```python
def reset_data_storage_size_tb() -> None
```

##### `reset_db_node_storage_size_gb` <a name="reset_db_node_storage_size_gb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDbNodeStorageSizeGb"></a>

```python
def reset_db_node_storage_size_gb() -> None
```

##### `reset_db_server_ocids` <a name="reset_db_server_ocids" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDbServerOcids"></a>

```python
def reset_db_server_ocids() -> None
```

##### `reset_diagnostics_data_collection_options` <a name="reset_diagnostics_data_collection_options" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDiagnosticsDataCollectionOptions"></a>

```python
def reset_diagnostics_data_collection_options() -> None
```

##### `reset_disk_redundancy` <a name="reset_disk_redundancy" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetDiskRedundancy"></a>

```python
def reset_disk_redundancy() -> None
```

##### `reset_gi_version` <a name="reset_gi_version" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetGiVersion"></a>

```python
def reset_gi_version() -> None
```

##### `reset_hostname_prefix` <a name="reset_hostname_prefix" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetHostnamePrefix"></a>

```python
def reset_hostname_prefix() -> None
```

##### `reset_local_backup_enabled` <a name="reset_local_backup_enabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetLocalBackupEnabled"></a>

```python
def reset_local_backup_enabled() -> None
```

##### `reset_memory_size_gb` <a name="reset_memory_size_gb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetMemorySizeGb"></a>

```python
def reset_memory_size_gb() -> None
```

##### `reset_node_count` <a name="reset_node_count" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetNodeCount"></a>

```python
def reset_node_count() -> None
```

##### `reset_ocpu_count` <a name="reset_ocpu_count" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetOcpuCount"></a>

```python
def reset_ocpu_count() -> None
```

##### `reset_sparse_diskgroup_enabled` <a name="reset_sparse_diskgroup_enabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetSparseDiskgroupEnabled"></a>

```python
def reset_sparse_diskgroup_enabled() -> None
```

##### `reset_ssh_public_keys` <a name="reset_ssh_public_keys" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetSshPublicKeys"></a>

```python
def reset_ssh_public_keys() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptions">diagnostics_data_collection_options</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dnsListenerIp">dns_listener_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.ociUrl">oci_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDns">scan_dns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDnsRecordId">scan_dns_record_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanIpIds">scan_ip_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcpSsl">scan_listener_port_tcp_ssl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.storageSizeGb">storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.systemVersion">system_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZone">time_zone</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference">OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCountInput">cpu_core_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTbInput">data_storage_size_tb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGbInput">db_node_storage_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcidsInput">db_server_ocids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptionsInput">diagnostics_data_collection_options_input</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancyInput">disk_redundancy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersionInput">gi_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefixInput">hostname_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseTypeInput">license_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabledInput">local_backup_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGbInput">memory_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCountInput">ocpu_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabledInput">sparse_diskgroup_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeysInput">ssh_public_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone">OracleDatabaseCloudVmClusterPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTb">data_storage_size_tb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGb">db_node_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcids">db_server_ocids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancy">disk_redundancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersion">gi_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefix">hostname_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseType">license_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabled">local_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGb">memory_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCount">ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabled">sparse_diskgroup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties">OracleDatabaseCloudVmClusterProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `diagnostics_data_collection_options`<sup>Required</sup> <a name="diagnostics_data_collection_options" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptions"></a>

```python
diagnostics_data_collection_options: OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference</a>

---

##### `dns_listener_ip`<sup>Required</sup> <a name="dns_listener_ip" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dnsListenerIp"></a>

```python
dns_listener_ip: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `oci_url`<sup>Required</sup> <a name="oci_url" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.ociUrl"></a>

```python
oci_url: str
```

- *Type:* str

---

##### `scan_dns`<sup>Required</sup> <a name="scan_dns" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDns"></a>

```python
scan_dns: str
```

- *Type:* str

---

##### `scan_dns_record_id`<sup>Required</sup> <a name="scan_dns_record_id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanDnsRecordId"></a>

```python
scan_dns_record_id: str
```

- *Type:* str

---

##### `scan_ip_ids`<sup>Required</sup> <a name="scan_ip_ids" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanIpIds"></a>

```python
scan_ip_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scan_listener_port_tcp`<sup>Required</sup> <a name="scan_listener_port_tcp" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tcp_ssl`<sup>Required</sup> <a name="scan_listener_port_tcp_ssl" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.scanListenerPortTcpSsl"></a>

```python
scan_listener_port_tcp_ssl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_size_gb`<sup>Required</sup> <a name="storage_size_gb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.storageSizeGb"></a>

```python
storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `system_version`<sup>Required</sup> <a name="system_version" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.systemVersion"></a>

```python
system_version: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZone"></a>

```python
time_zone: OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference">OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference</a>

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `cpu_core_count_input`<sup>Optional</sup> <a name="cpu_core_count_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCountInput"></a>

```python
cpu_core_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_tb_input`<sup>Optional</sup> <a name="data_storage_size_tb_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTbInput"></a>

```python
data_storage_size_tb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_gb_input`<sup>Optional</sup> <a name="db_node_storage_size_gb_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGbInput"></a>

```python
db_node_storage_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_server_ocids_input`<sup>Optional</sup> <a name="db_server_ocids_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcidsInput"></a>

```python
db_server_ocids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `diagnostics_data_collection_options_input`<sup>Optional</sup> <a name="diagnostics_data_collection_options_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.diagnosticsDataCollectionOptionsInput"></a>

```python
diagnostics_data_collection_options_input: OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions">OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions</a>

---

##### `disk_redundancy_input`<sup>Optional</sup> <a name="disk_redundancy_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancyInput"></a>

```python
disk_redundancy_input: str
```

- *Type:* str

---

##### `gi_version_input`<sup>Optional</sup> <a name="gi_version_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersionInput"></a>

```python
gi_version_input: str
```

- *Type:* str

---

##### `hostname_prefix_input`<sup>Optional</sup> <a name="hostname_prefix_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefixInput"></a>

```python
hostname_prefix_input: str
```

- *Type:* str

---

##### `license_type_input`<sup>Optional</sup> <a name="license_type_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseTypeInput"></a>

```python
license_type_input: str
```

- *Type:* str

---

##### `local_backup_enabled_input`<sup>Optional</sup> <a name="local_backup_enabled_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabledInput"></a>

```python
local_backup_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `memory_size_gb_input`<sup>Optional</sup> <a name="memory_size_gb_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGbInput"></a>

```python
memory_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpu_count_input`<sup>Optional</sup> <a name="ocpu_count_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCountInput"></a>

```python
ocpu_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sparse_diskgroup_enabled_input`<sup>Optional</sup> <a name="sparse_diskgroup_enabled_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabledInput"></a>

```python
sparse_diskgroup_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssh_public_keys_input`<sup>Optional</sup> <a name="ssh_public_keys_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeysInput"></a>

```python
ssh_public_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: OracleDatabaseCloudVmClusterPropertiesTimeZone
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone">OracleDatabaseCloudVmClusterPropertiesTimeZone</a>

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_tb`<sup>Required</sup> <a name="data_storage_size_tb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dataStorageSizeTb"></a>

```python
data_storage_size_tb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_gb`<sup>Required</sup> <a name="db_node_storage_size_gb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbNodeStorageSizeGb"></a>

```python
db_node_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_server_ocids`<sup>Required</sup> <a name="db_server_ocids" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.dbServerOcids"></a>

```python
db_server_ocids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disk_redundancy`<sup>Required</sup> <a name="disk_redundancy" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.diskRedundancy"></a>

```python
disk_redundancy: str
```

- *Type:* str

---

##### `gi_version`<sup>Required</sup> <a name="gi_version" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.giVersion"></a>

```python
gi_version: str
```

- *Type:* str

---

##### `hostname_prefix`<sup>Required</sup> <a name="hostname_prefix" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.hostnamePrefix"></a>

```python
hostname_prefix: str
```

- *Type:* str

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

---

##### `local_backup_enabled`<sup>Required</sup> <a name="local_backup_enabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.localBackupEnabled"></a>

```python
local_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `memory_size_gb`<sup>Required</sup> <a name="memory_size_gb" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.memorySizeGb"></a>

```python
memory_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpu_count`<sup>Required</sup> <a name="ocpu_count" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.ocpuCount"></a>

```python
ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sparse_diskgroup_enabled`<sup>Required</sup> <a name="sparse_diskgroup_enabled" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.sparseDiskgroupEnabled"></a>

```python
sparse_diskgroup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: OracleDatabaseCloudVmClusterProperties
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterProperties">OracleDatabaseCloudVmClusterProperties</a>

---


### OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference <a name="OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_vm_cluster

oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone">OracleDatabaseCloudVmClusterPropertiesTimeZone</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference.property.internalValue"></a>

```python
internal_value: OracleDatabaseCloudVmClusterPropertiesTimeZone
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterPropertiesTimeZone">OracleDatabaseCloudVmClusterPropertiesTimeZone</a>

---


### OracleDatabaseCloudVmClusterTimeoutsOutputReference <a name="OracleDatabaseCloudVmClusterTimeoutsOutputReference" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_vm_cluster

oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts">OracleDatabaseCloudVmClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OracleDatabaseCloudVmClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.oracleDatabaseCloudVmCluster.OracleDatabaseCloudVmClusterTimeouts">OracleDatabaseCloudVmClusterTimeouts</a>]

---



