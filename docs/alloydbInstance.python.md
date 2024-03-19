# `alloydbInstance` Submodule <a name="`alloydbInstance` Submodule" id="@cdktf/provider-google.alloydbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlloydbInstance <a name="AlloydbInstance" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance google_alloydb_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_instance

alloydbInstance.AlloydbInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster: str,
  instance_id: str,
  instance_type: str,
  annotations: typing.Mapping[str] = None,
  availability_type: str = None,
  client_connection_config: AlloydbInstanceClientConnectionConfig = None,
  database_flags: typing.Mapping[str] = None,
  display_name: str = None,
  gce_zone: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  machine_config: AlloydbInstanceMachineConfig = None,
  query_insights_config: AlloydbInstanceQueryInsightsConfig = None,
  read_pool_config: AlloydbInstanceReadPoolConfig = None,
  timeouts: AlloydbInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.cluster">cluster</a></code> | <code>str</code> | Identifies the alloydb cluster. Must be in the format 'projects/{project}/locations/{location}/clusters/{cluster_id}'. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | The ID of the alloydb instance. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | The type of the instance. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.availabilityType">availability_type</a></code> | <code>str</code> | 'Availability type of an Instance. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.clientConnectionConfig">client_connection_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig">AlloydbInstanceClientConnectionConfig</a></code> | client_connection_config block. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.databaseFlags">database_flags</a></code> | <code>typing.Mapping[str]</code> | Database flags. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-settable and human-readable display name for the Instance. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.gceZone">gce_zone</a></code> | <code>str</code> | The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#id AlloydbInstance#id}. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the alloydb instance. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.machineConfig">machine_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig">AlloydbInstanceMachineConfig</a></code> | machine_config block. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.queryInsightsConfig">query_insights_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig">AlloydbInstanceQueryInsightsConfig</a></code> | query_insights_config block. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.readPoolConfig">read_pool_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfig">AlloydbInstanceReadPoolConfig</a></code> | read_pool_config block. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts">AlloydbInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.cluster"></a>

- *Type:* str

Identifies the alloydb cluster. Must be in the format 'projects/{project}/locations/{location}/clusters/{cluster_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#cluster AlloydbInstance#cluster}

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.instanceId"></a>

- *Type:* str

The ID of the alloydb instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#instance_id AlloydbInstance#instance_id}

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.instanceType"></a>

- *Type:* str

The type of the instance.

If the instance type is READ_POOL, provide the associated PRIMARY/SECONDARY instance in the 'depends_on' meta-data attribute.
If the instance type is SECONDARY, point to the cluster_type of the associated secondary cluster instead of mentioning SECONDARY.
Example: {instance_type = google_alloydb_cluster.<secondary_cluster_name>.cluster_type} instead of {instance_type = SECONDARY}
If the instance type is SECONDARY, the terraform delete instance operation does not delete the secondary instance but abandons it instead.
Use deletion_policy = "FORCE" in the associated secondary cluster and delete the cluster forcefully to delete the secondary cluster as well its associated secondary instance.
Users can undo the delete secondary instance action by importing the deleted secondary instance by calling terraform import. Possible values: ["PRIMARY", "READ_POOL", "SECONDARY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#instance_type AlloydbInstance#instance_type}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#annotations AlloydbInstance#annotations}

---

##### `availability_type`<sup>Optional</sup> <a name="availability_type" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.availabilityType"></a>

- *Type:* str

'Availability type of an Instance.

Defaults to REGIONAL for both primary and read instances.
Note that primary and read instances can have different availability types.
Only READ_POOL instance supports ZONAL type. Users can't specify the zone for READ_POOL instance.
Zone is automatically chosen from the list of zones in the region specified.
Read pool of size 1 can only have zonal availability. Read pools with node count of 2 or more
can have regional availability (nodes are present in 2 or more zones in a region).' Possible values: ["AVAILABILITY_TYPE_UNSPECIFIED", "ZONAL", "REGIONAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#availability_type AlloydbInstance#availability_type}

---

##### `client_connection_config`<sup>Optional</sup> <a name="client_connection_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.clientConnectionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig">AlloydbInstanceClientConnectionConfig</a>

client_connection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#client_connection_config AlloydbInstance#client_connection_config}

---

##### `database_flags`<sup>Optional</sup> <a name="database_flags" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.databaseFlags"></a>

- *Type:* typing.Mapping[str]

Database flags.

Set at instance level. * They are copied from primary instance on read instance creation. * Read instances can set new or override existing flags that are relevant for reads, e.g. for enabling columnar cache on a read instance. Flags set on read instance may or may not be present on primary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#database_flags AlloydbInstance#database_flags}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.displayName"></a>

- *Type:* str

User-settable and human-readable display name for the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#display_name AlloydbInstance#display_name}

---

##### `gce_zone`<sup>Optional</sup> <a name="gce_zone" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.gceZone"></a>

- *Type:* str

The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#gce_zone AlloydbInstance#gce_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#id AlloydbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels for the alloydb instance.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#labels AlloydbInstance#labels}

---

##### `machine_config`<sup>Optional</sup> <a name="machine_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.machineConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig">AlloydbInstanceMachineConfig</a>

machine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#machine_config AlloydbInstance#machine_config}

---

##### `query_insights_config`<sup>Optional</sup> <a name="query_insights_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.queryInsightsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig">AlloydbInstanceQueryInsightsConfig</a>

query_insights_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#query_insights_config AlloydbInstance#query_insights_config}

---

##### `read_pool_config`<sup>Optional</sup> <a name="read_pool_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.readPoolConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfig">AlloydbInstanceReadPoolConfig</a>

read_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#read_pool_config AlloydbInstance#read_pool_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts">AlloydbInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#timeouts AlloydbInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.putClientConnectionConfig">put_client_connection_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.putMachineConfig">put_machine_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.putQueryInsightsConfig">put_query_insights_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.putReadPoolConfig">put_read_pool_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetAvailabilityType">reset_availability_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetClientConnectionConfig">reset_client_connection_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetDatabaseFlags">reset_database_flags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetGceZone">reset_gce_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetMachineConfig">reset_machine_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetQueryInsightsConfig">reset_query_insights_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetReadPoolConfig">reset_read_pool_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_client_connection_config` <a name="put_client_connection_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putClientConnectionConfig"></a>

```python
def put_client_connection_config(
  require_connectors: typing.Union[bool, IResolvable] = None,
  ssl_config: AlloydbInstanceClientConnectionConfigSslConfig = None
) -> None
```

###### `require_connectors`<sup>Optional</sup> <a name="require_connectors" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putClientConnectionConfig.parameter.requireConnectors"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Configuration to enforce connectors only (ex: AuthProxy) connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#require_connectors AlloydbInstance#require_connectors}

---

###### `ssl_config`<sup>Optional</sup> <a name="ssl_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putClientConnectionConfig.parameter.sslConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfig">AlloydbInstanceClientConnectionConfigSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#ssl_config AlloydbInstance#ssl_config}

---

##### `put_machine_config` <a name="put_machine_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putMachineConfig"></a>

```python
def put_machine_config(
  cpu_count: typing.Union[int, float] = None
) -> None
```

###### `cpu_count`<sup>Optional</sup> <a name="cpu_count" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putMachineConfig.parameter.cpuCount"></a>

- *Type:* typing.Union[int, float]

The number of CPU's in the VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#cpu_count AlloydbInstance#cpu_count}

---

##### `put_query_insights_config` <a name="put_query_insights_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putQueryInsightsConfig"></a>

```python
def put_query_insights_config(
  query_plans_per_minute: typing.Union[int, float] = None,
  query_string_length: typing.Union[int, float] = None,
  record_application_tags: typing.Union[bool, IResolvable] = None,
  record_client_address: typing.Union[bool, IResolvable] = None
) -> None
```

###### `query_plans_per_minute`<sup>Optional</sup> <a name="query_plans_per_minute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putQueryInsightsConfig.parameter.queryPlansPerMinute"></a>

- *Type:* typing.Union[int, float]

Number of query execution plans captured by Insights per minute for all queries combined.

The default value is 5. Any integer between 0 and 20 is considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#query_plans_per_minute AlloydbInstance#query_plans_per_minute}

---

###### `query_string_length`<sup>Optional</sup> <a name="query_string_length" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putQueryInsightsConfig.parameter.queryStringLength"></a>

- *Type:* typing.Union[int, float]

Query string length. The default value is 1024. Any integer between 256 and 4500 is considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#query_string_length AlloydbInstance#query_string_length}

---

###### `record_application_tags`<sup>Optional</sup> <a name="record_application_tags" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putQueryInsightsConfig.parameter.recordApplicationTags"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Record application tags for an instance. This flag is turned "on" by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#record_application_tags AlloydbInstance#record_application_tags}

---

###### `record_client_address`<sup>Optional</sup> <a name="record_client_address" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putQueryInsightsConfig.parameter.recordClientAddress"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Record client address for an instance. Client address is PII information. This flag is turned "on" by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#record_client_address AlloydbInstance#record_client_address}

---

##### `put_read_pool_config` <a name="put_read_pool_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putReadPoolConfig"></a>

```python
def put_read_pool_config(
  node_count: typing.Union[int, float] = None
) -> None
```

###### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putReadPoolConfig.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

Read capacity, i.e. number of nodes in a read pool instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#node_count AlloydbInstance#node_count}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#create AlloydbInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#delete AlloydbInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#update AlloydbInstance#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_availability_type` <a name="reset_availability_type" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetAvailabilityType"></a>

```python
def reset_availability_type() -> None
```

##### `reset_client_connection_config` <a name="reset_client_connection_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetClientConnectionConfig"></a>

```python
def reset_client_connection_config() -> None
```

##### `reset_database_flags` <a name="reset_database_flags" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetDatabaseFlags"></a>

```python
def reset_database_flags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_gce_zone` <a name="reset_gce_zone" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetGceZone"></a>

```python
def reset_gce_zone() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_machine_config` <a name="reset_machine_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetMachineConfig"></a>

```python
def reset_machine_config() -> None
```

##### `reset_query_insights_config` <a name="reset_query_insights_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetQueryInsightsConfig"></a>

```python
def reset_query_insights_config() -> None
```

##### `reset_read_pool_config` <a name="reset_read_pool_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetReadPoolConfig"></a>

```python
def reset_read_pool_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AlloydbInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import alloydb_instance

alloydbInstance.AlloydbInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import alloydb_instance

alloydbInstance.AlloydbInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import alloydb_instance

alloydbInstance.AlloydbInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import alloydb_instance

alloydbInstance.AlloydbInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AlloydbInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AlloydbInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AlloydbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AlloydbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.clientConnectionConfig">client_connection_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference">AlloydbInstanceClientConnectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.machineConfig">machine_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference">AlloydbInstanceMachineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.queryInsightsConfig">query_insights_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference">AlloydbInstanceQueryInsightsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.readPoolConfig">read_pool_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference">AlloydbInstanceReadPoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference">AlloydbInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.availabilityTypeInput">availability_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.clientConnectionConfigInput">client_connection_config_input</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig">AlloydbInstanceClientConnectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.databaseFlagsInput">database_flags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.gceZoneInput">gce_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.machineConfigInput">machine_config_input</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig">AlloydbInstanceMachineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.queryInsightsConfigInput">query_insights_config_input</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig">AlloydbInstanceQueryInsightsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.readPoolConfigInput">read_pool_config_input</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfig">AlloydbInstanceReadPoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts">AlloydbInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.availabilityType">availability_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.databaseFlags">database_flags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.gceZone">gce_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_connection_config`<sup>Required</sup> <a name="client_connection_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.clientConnectionConfig"></a>

```python
client_connection_config: AlloydbInstanceClientConnectionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference">AlloydbInstanceClientConnectionConfigOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `machine_config`<sup>Required</sup> <a name="machine_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.machineConfig"></a>

```python
machine_config: AlloydbInstanceMachineConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference">AlloydbInstanceMachineConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query_insights_config`<sup>Required</sup> <a name="query_insights_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.queryInsightsConfig"></a>

```python
query_insights_config: AlloydbInstanceQueryInsightsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference">AlloydbInstanceQueryInsightsConfigOutputReference</a>

---

##### `read_pool_config`<sup>Required</sup> <a name="read_pool_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.readPoolConfig"></a>

```python
read_pool_config: AlloydbInstanceReadPoolConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference">AlloydbInstanceReadPoolConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.timeouts"></a>

```python
timeouts: AlloydbInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference">AlloydbInstanceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `availability_type_input`<sup>Optional</sup> <a name="availability_type_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.availabilityTypeInput"></a>

```python
availability_type_input: str
```

- *Type:* str

---

##### `client_connection_config_input`<sup>Optional</sup> <a name="client_connection_config_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.clientConnectionConfigInput"></a>

```python
client_connection_config_input: AlloydbInstanceClientConnectionConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig">AlloydbInstanceClientConnectionConfig</a>

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `database_flags_input`<sup>Optional</sup> <a name="database_flags_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.databaseFlagsInput"></a>

```python
database_flags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `gce_zone_input`<sup>Optional</sup> <a name="gce_zone_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.gceZoneInput"></a>

```python
gce_zone_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `machine_config_input`<sup>Optional</sup> <a name="machine_config_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.machineConfigInput"></a>

```python
machine_config_input: AlloydbInstanceMachineConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig">AlloydbInstanceMachineConfig</a>

---

##### `query_insights_config_input`<sup>Optional</sup> <a name="query_insights_config_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.queryInsightsConfigInput"></a>

```python
query_insights_config_input: AlloydbInstanceQueryInsightsConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig">AlloydbInstanceQueryInsightsConfig</a>

---

##### `read_pool_config_input`<sup>Optional</sup> <a name="read_pool_config_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.readPoolConfigInput"></a>

```python
read_pool_config_input: AlloydbInstanceReadPoolConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfig">AlloydbInstanceReadPoolConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AlloydbInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts">AlloydbInstanceTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `availability_type`<sup>Required</sup> <a name="availability_type" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.availabilityType"></a>

```python
availability_type: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `database_flags`<sup>Required</sup> <a name="database_flags" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.databaseFlags"></a>

```python
database_flags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `gce_zone`<sup>Required</sup> <a name="gce_zone" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.gceZone"></a>

```python
gce_zone: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.alloydbInstance.AlloydbInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AlloydbInstanceClientConnectionConfig <a name="AlloydbInstanceClientConnectionConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_instance

alloydbInstance.AlloydbInstanceClientConnectionConfig(
  require_connectors: typing.Union[bool, IResolvable] = None,
  ssl_config: AlloydbInstanceClientConnectionConfigSslConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig.property.requireConnectors">require_connectors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Configuration to enforce connectors only (ex: AuthProxy) connections to the database. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig.property.sslConfig">ssl_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfig">AlloydbInstanceClientConnectionConfigSslConfig</a></code> | ssl_config block. |

---

##### `require_connectors`<sup>Optional</sup> <a name="require_connectors" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig.property.requireConnectors"></a>

```python
require_connectors: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Configuration to enforce connectors only (ex: AuthProxy) connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#require_connectors AlloydbInstance#require_connectors}

---

##### `ssl_config`<sup>Optional</sup> <a name="ssl_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig.property.sslConfig"></a>

```python
ssl_config: AlloydbInstanceClientConnectionConfigSslConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfig">AlloydbInstanceClientConnectionConfigSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#ssl_config AlloydbInstance#ssl_config}

---

### AlloydbInstanceClientConnectionConfigSslConfig <a name="AlloydbInstanceClientConnectionConfigSslConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_instance

alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfig(
  ssl_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfig.property.sslMode">ssl_mode</a></code> | <code>str</code> | SSL mode. Specifies client-server SSL/TLS connection behavior. Possible values: ["ENCRYPTED_ONLY", "ALLOW_UNENCRYPTED_AND_ENCRYPTED"]. |

---

##### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfig.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

SSL mode. Specifies client-server SSL/TLS connection behavior. Possible values: ["ENCRYPTED_ONLY", "ALLOW_UNENCRYPTED_AND_ENCRYPTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#ssl_mode AlloydbInstance#ssl_mode}

---

### AlloydbInstanceConfig <a name="AlloydbInstanceConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_instance

alloydbInstance.AlloydbInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster: str,
  instance_id: str,
  instance_type: str,
  annotations: typing.Mapping[str] = None,
  availability_type: str = None,
  client_connection_config: AlloydbInstanceClientConnectionConfig = None,
  database_flags: typing.Mapping[str] = None,
  display_name: str = None,
  gce_zone: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  machine_config: AlloydbInstanceMachineConfig = None,
  query_insights_config: AlloydbInstanceQueryInsightsConfig = None,
  read_pool_config: AlloydbInstanceReadPoolConfig = None,
  timeouts: AlloydbInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.cluster">cluster</a></code> | <code>str</code> | Identifies the alloydb cluster. Must be in the format 'projects/{project}/locations/{location}/clusters/{cluster_id}'. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.instanceId">instance_id</a></code> | <code>str</code> | The ID of the alloydb instance. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.instanceType">instance_type</a></code> | <code>str</code> | The type of the instance. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.availabilityType">availability_type</a></code> | <code>str</code> | 'Availability type of an Instance. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.clientConnectionConfig">client_connection_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig">AlloydbInstanceClientConnectionConfig</a></code> | client_connection_config block. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.databaseFlags">database_flags</a></code> | <code>typing.Mapping[str]</code> | Database flags. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.displayName">display_name</a></code> | <code>str</code> | User-settable and human-readable display name for the Instance. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.gceZone">gce_zone</a></code> | <code>str</code> | The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#id AlloydbInstance#id}. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the alloydb instance. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.machineConfig">machine_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig">AlloydbInstanceMachineConfig</a></code> | machine_config block. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.queryInsightsConfig">query_insights_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig">AlloydbInstanceQueryInsightsConfig</a></code> | query_insights_config block. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.readPoolConfig">read_pool_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfig">AlloydbInstanceReadPoolConfig</a></code> | read_pool_config block. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts">AlloydbInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

Identifies the alloydb cluster. Must be in the format 'projects/{project}/locations/{location}/clusters/{cluster_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#cluster AlloydbInstance#cluster}

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

The ID of the alloydb instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#instance_id AlloydbInstance#instance_id}

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

The type of the instance.

If the instance type is READ_POOL, provide the associated PRIMARY/SECONDARY instance in the 'depends_on' meta-data attribute.
If the instance type is SECONDARY, point to the cluster_type of the associated secondary cluster instead of mentioning SECONDARY.
Example: {instance_type = google_alloydb_cluster.<secondary_cluster_name>.cluster_type} instead of {instance_type = SECONDARY}
If the instance type is SECONDARY, the terraform delete instance operation does not delete the secondary instance but abandons it instead.
Use deletion_policy = "FORCE" in the associated secondary cluster and delete the cluster forcefully to delete the secondary cluster as well its associated secondary instance.
Users can undo the delete secondary instance action by importing the deleted secondary instance by calling terraform import. Possible values: ["PRIMARY", "READ_POOL", "SECONDARY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#instance_type AlloydbInstance#instance_type}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#annotations AlloydbInstance#annotations}

---

##### `availability_type`<sup>Optional</sup> <a name="availability_type" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.availabilityType"></a>

```python
availability_type: str
```

- *Type:* str

'Availability type of an Instance.

Defaults to REGIONAL for both primary and read instances.
Note that primary and read instances can have different availability types.
Only READ_POOL instance supports ZONAL type. Users can't specify the zone for READ_POOL instance.
Zone is automatically chosen from the list of zones in the region specified.
Read pool of size 1 can only have zonal availability. Read pools with node count of 2 or more
can have regional availability (nodes are present in 2 or more zones in a region).' Possible values: ["AVAILABILITY_TYPE_UNSPECIFIED", "ZONAL", "REGIONAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#availability_type AlloydbInstance#availability_type}

---

##### `client_connection_config`<sup>Optional</sup> <a name="client_connection_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.clientConnectionConfig"></a>

```python
client_connection_config: AlloydbInstanceClientConnectionConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig">AlloydbInstanceClientConnectionConfig</a>

client_connection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#client_connection_config AlloydbInstance#client_connection_config}

---

##### `database_flags`<sup>Optional</sup> <a name="database_flags" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.databaseFlags"></a>

```python
database_flags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Database flags.

Set at instance level. * They are copied from primary instance on read instance creation. * Read instances can set new or override existing flags that are relevant for reads, e.g. for enabling columnar cache on a read instance. Flags set on read instance may or may not be present on primary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#database_flags AlloydbInstance#database_flags}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-settable and human-readable display name for the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#display_name AlloydbInstance#display_name}

---

##### `gce_zone`<sup>Optional</sup> <a name="gce_zone" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.gceZone"></a>

```python
gce_zone: str
```

- *Type:* str

The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#gce_zone AlloydbInstance#gce_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#id AlloydbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels for the alloydb instance.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#labels AlloydbInstance#labels}

---

##### `machine_config`<sup>Optional</sup> <a name="machine_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.machineConfig"></a>

```python
machine_config: AlloydbInstanceMachineConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig">AlloydbInstanceMachineConfig</a>

machine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#machine_config AlloydbInstance#machine_config}

---

##### `query_insights_config`<sup>Optional</sup> <a name="query_insights_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.queryInsightsConfig"></a>

```python
query_insights_config: AlloydbInstanceQueryInsightsConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig">AlloydbInstanceQueryInsightsConfig</a>

query_insights_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#query_insights_config AlloydbInstance#query_insights_config}

---

##### `read_pool_config`<sup>Optional</sup> <a name="read_pool_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.readPoolConfig"></a>

```python
read_pool_config: AlloydbInstanceReadPoolConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfig">AlloydbInstanceReadPoolConfig</a>

read_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#read_pool_config AlloydbInstance#read_pool_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceConfig.property.timeouts"></a>

```python
timeouts: AlloydbInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts">AlloydbInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#timeouts AlloydbInstance#timeouts}

---

### AlloydbInstanceMachineConfig <a name="AlloydbInstanceMachineConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_instance

alloydbInstance.AlloydbInstanceMachineConfig(
  cpu_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig.property.cpuCount">cpu_count</a></code> | <code>typing.Union[int, float]</code> | The number of CPU's in the VM instance. |

---

##### `cpu_count`<sup>Optional</sup> <a name="cpu_count" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig.property.cpuCount"></a>

```python
cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of CPU's in the VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#cpu_count AlloydbInstance#cpu_count}

---

### AlloydbInstanceQueryInsightsConfig <a name="AlloydbInstanceQueryInsightsConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_instance

alloydbInstance.AlloydbInstanceQueryInsightsConfig(
  query_plans_per_minute: typing.Union[int, float] = None,
  query_string_length: typing.Union[int, float] = None,
  record_application_tags: typing.Union[bool, IResolvable] = None,
  record_client_address: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig.property.queryPlansPerMinute">query_plans_per_minute</a></code> | <code>typing.Union[int, float]</code> | Number of query execution plans captured by Insights per minute for all queries combined. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig.property.queryStringLength">query_string_length</a></code> | <code>typing.Union[int, float]</code> | Query string length. The default value is 1024. Any integer between 256 and 4500 is considered valid. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig.property.recordApplicationTags">record_application_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Record application tags for an instance. This flag is turned "on" by default. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig.property.recordClientAddress">record_client_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Record client address for an instance. Client address is PII information. This flag is turned "on" by default. |

---

##### `query_plans_per_minute`<sup>Optional</sup> <a name="query_plans_per_minute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig.property.queryPlansPerMinute"></a>

```python
query_plans_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of query execution plans captured by Insights per minute for all queries combined.

The default value is 5. Any integer between 0 and 20 is considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#query_plans_per_minute AlloydbInstance#query_plans_per_minute}

---

##### `query_string_length`<sup>Optional</sup> <a name="query_string_length" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig.property.queryStringLength"></a>

```python
query_string_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Query string length. The default value is 1024. Any integer between 256 and 4500 is considered valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#query_string_length AlloydbInstance#query_string_length}

---

##### `record_application_tags`<sup>Optional</sup> <a name="record_application_tags" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig.property.recordApplicationTags"></a>

```python
record_application_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Record application tags for an instance. This flag is turned "on" by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#record_application_tags AlloydbInstance#record_application_tags}

---

##### `record_client_address`<sup>Optional</sup> <a name="record_client_address" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig.property.recordClientAddress"></a>

```python
record_client_address: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Record client address for an instance. Client address is PII information. This flag is turned "on" by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#record_client_address AlloydbInstance#record_client_address}

---

### AlloydbInstanceReadPoolConfig <a name="AlloydbInstanceReadPoolConfig" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_instance

alloydbInstance.AlloydbInstanceReadPoolConfig(
  node_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfig.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Read capacity, i.e. number of nodes in a read pool instance. |

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfig.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Read capacity, i.e. number of nodes in a read pool instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#node_count AlloydbInstance#node_count}

---

### AlloydbInstanceTimeouts <a name="AlloydbInstanceTimeouts" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_instance

alloydbInstance.AlloydbInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#create AlloydbInstance#create}. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#delete AlloydbInstance#delete}. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#update AlloydbInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#create AlloydbInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#delete AlloydbInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#update AlloydbInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlloydbInstanceClientConnectionConfigOutputReference <a name="AlloydbInstanceClientConnectionConfigOutputReference" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_instance

alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.putSslConfig">put_ssl_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.resetRequireConnectors">reset_require_connectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.resetSslConfig">reset_ssl_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ssl_config` <a name="put_ssl_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.putSslConfig"></a>

```python
def put_ssl_config(
  ssl_mode: str = None
) -> None
```

###### `ssl_mode`<sup>Optional</sup> <a name="ssl_mode" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.putSslConfig.parameter.sslMode"></a>

- *Type:* str

SSL mode. Specifies client-server SSL/TLS connection behavior. Possible values: ["ENCRYPTED_ONLY", "ALLOW_UNENCRYPTED_AND_ENCRYPTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/alloydb_instance#ssl_mode AlloydbInstance#ssl_mode}

---

##### `reset_require_connectors` <a name="reset_require_connectors" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.resetRequireConnectors"></a>

```python
def reset_require_connectors() -> None
```

##### `reset_ssl_config` <a name="reset_ssl_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.resetSslConfig"></a>

```python
def reset_ssl_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.sslConfig">ssl_config</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference">AlloydbInstanceClientConnectionConfigSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectorsInput">require_connectors_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.sslConfigInput">ssl_config_input</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfig">AlloydbInstanceClientConnectionConfigSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectors">require_connectors</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig">AlloydbInstanceClientConnectionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ssl_config`<sup>Required</sup> <a name="ssl_config" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.sslConfig"></a>

```python
ssl_config: AlloydbInstanceClientConnectionConfigSslConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference">AlloydbInstanceClientConnectionConfigSslConfigOutputReference</a>

---

##### `require_connectors_input`<sup>Optional</sup> <a name="require_connectors_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectorsInput"></a>

```python
require_connectors_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssl_config_input`<sup>Optional</sup> <a name="ssl_config_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.sslConfigInput"></a>

```python
ssl_config_input: AlloydbInstanceClientConnectionConfigSslConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfig">AlloydbInstanceClientConnectionConfigSslConfig</a>

---

##### `require_connectors`<sup>Required</sup> <a name="require_connectors" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectors"></a>

```python
require_connectors: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigOutputReference.property.internalValue"></a>

```python
internal_value: AlloydbInstanceClientConnectionConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfig">AlloydbInstanceClientConnectionConfig</a>

---


### AlloydbInstanceClientConnectionConfigSslConfigOutputReference <a name="AlloydbInstanceClientConnectionConfigSslConfigOutputReference" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_instance

alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.resetSslMode">reset_ssl_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ssl_mode` <a name="reset_ssl_mode" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.resetSslMode"></a>

```python
def reset_ssl_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslModeInput">ssl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslMode">ssl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfig">AlloydbInstanceClientConnectionConfigSslConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ssl_mode_input`<sup>Optional</sup> <a name="ssl_mode_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslModeInput"></a>

```python
ssl_mode_input: str
```

- *Type:* str

---

##### `ssl_mode`<sup>Required</sup> <a name="ssl_mode" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslMode"></a>

```python
ssl_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.internalValue"></a>

```python
internal_value: AlloydbInstanceClientConnectionConfigSslConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceClientConnectionConfigSslConfig">AlloydbInstanceClientConnectionConfigSslConfig</a>

---


### AlloydbInstanceMachineConfigOutputReference <a name="AlloydbInstanceMachineConfigOutputReference" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_instance

alloydbInstance.AlloydbInstanceMachineConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.resetCpuCount">reset_cpu_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_count` <a name="reset_cpu_count" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.resetCpuCount"></a>

```python
def reset_cpu_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.property.cpuCountInput">cpu_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.property.cpuCount">cpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig">AlloydbInstanceMachineConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_count_input`<sup>Optional</sup> <a name="cpu_count_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.property.cpuCountInput"></a>

```python
cpu_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_count`<sup>Required</sup> <a name="cpu_count" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.property.cpuCount"></a>

```python
cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfigOutputReference.property.internalValue"></a>

```python
internal_value: AlloydbInstanceMachineConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceMachineConfig">AlloydbInstanceMachineConfig</a>

---


### AlloydbInstanceQueryInsightsConfigOutputReference <a name="AlloydbInstanceQueryInsightsConfigOutputReference" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_instance

alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.resetQueryPlansPerMinute">reset_query_plans_per_minute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.resetQueryStringLength">reset_query_string_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.resetRecordApplicationTags">reset_record_application_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.resetRecordClientAddress">reset_record_client_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_query_plans_per_minute` <a name="reset_query_plans_per_minute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.resetQueryPlansPerMinute"></a>

```python
def reset_query_plans_per_minute() -> None
```

##### `reset_query_string_length` <a name="reset_query_string_length" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.resetQueryStringLength"></a>

```python
def reset_query_string_length() -> None
```

##### `reset_record_application_tags` <a name="reset_record_application_tags" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.resetRecordApplicationTags"></a>

```python
def reset_record_application_tags() -> None
```

##### `reset_record_client_address` <a name="reset_record_client_address" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.resetRecordClientAddress"></a>

```python
def reset_record_client_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinuteInput">query_plans_per_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLengthInput">query_string_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTagsInput">record_application_tags_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddressInput">record_client_address_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinute">query_plans_per_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLength">query_string_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTags">record_application_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddress">record_client_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig">AlloydbInstanceQueryInsightsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_plans_per_minute_input`<sup>Optional</sup> <a name="query_plans_per_minute_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinuteInput"></a>

```python
query_plans_per_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query_string_length_input`<sup>Optional</sup> <a name="query_string_length_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLengthInput"></a>

```python
query_string_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `record_application_tags_input`<sup>Optional</sup> <a name="record_application_tags_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTagsInput"></a>

```python
record_application_tags_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `record_client_address_input`<sup>Optional</sup> <a name="record_client_address_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddressInput"></a>

```python
record_client_address_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query_plans_per_minute`<sup>Required</sup> <a name="query_plans_per_minute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinute"></a>

```python
query_plans_per_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query_string_length`<sup>Required</sup> <a name="query_string_length" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLength"></a>

```python
query_string_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `record_application_tags`<sup>Required</sup> <a name="record_application_tags" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTags"></a>

```python
record_application_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `record_client_address`<sup>Required</sup> <a name="record_client_address" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddress"></a>

```python
record_client_address: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfigOutputReference.property.internalValue"></a>

```python
internal_value: AlloydbInstanceQueryInsightsConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceQueryInsightsConfig">AlloydbInstanceQueryInsightsConfig</a>

---


### AlloydbInstanceReadPoolConfigOutputReference <a name="AlloydbInstanceReadPoolConfigOutputReference" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_instance

alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.resetNodeCount">reset_node_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_node_count` <a name="reset_node_count" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.resetNodeCount"></a>

```python
def reset_node_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfig">AlloydbInstanceReadPoolConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfigOutputReference.property.internalValue"></a>

```python
internal_value: AlloydbInstanceReadPoolConfig
```

- *Type:* <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceReadPoolConfig">AlloydbInstanceReadPoolConfig</a>

---


### AlloydbInstanceTimeoutsOutputReference <a name="AlloydbInstanceTimeoutsOutputReference" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import alloydb_instance

alloydbInstance.AlloydbInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts">AlloydbInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AlloydbInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.alloydbInstance.AlloydbInstanceTimeouts">AlloydbInstanceTimeouts</a>]

---



