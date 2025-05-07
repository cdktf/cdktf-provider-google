# `oracleDatabaseCloudExadataInfrastructure` Submodule <a name="`oracleDatabaseCloudExadataInfrastructure` Submodule" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseCloudExadataInfrastructure <a name="OracleDatabaseCloudExadataInfrastructure" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure google_oracle_database_cloud_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_exadata_infrastructure

oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_exadata_infrastructure_id: str,
  location: str,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  gcp_oracle_zone: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  properties: OracleDatabaseCloudExadataInfrastructureProperties = None,
  timeouts: OracleDatabaseCloudExadataInfrastructureTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | The ID of the Exadata Infrastructure to create. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbServer'. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User friendly name for this resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.gcpOracleZone">gcp_oracle_zone</a></code> | <code>str</code> | GCP location where Oracle Exadata is hosted. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#id OracleDatabaseCloudExadataInfrastructure#id}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#project OracleDatabaseCloudExadataInfrastructure#project}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties">OracleDatabaseCloudExadataInfrastructureProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts">OracleDatabaseCloudExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_exadata_infrastructure_id`<sup>Required</sup> <a name="cloud_exadata_infrastructure_id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.cloudExadataInfrastructureId"></a>

- *Type:* str

The ID of the Exadata Infrastructure to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#cloud_exadata_infrastructure_id OracleDatabaseCloudExadataInfrastructure#cloud_exadata_infrastructure_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbServer'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#location OracleDatabaseCloudExadataInfrastructure#location}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.deletionProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#deletion_protection OracleDatabaseCloudExadataInfrastructure#deletion_protection}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.displayName"></a>

- *Type:* str

User friendly name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#display_name OracleDatabaseCloudExadataInfrastructure#display_name}

---

##### `gcp_oracle_zone`<sup>Optional</sup> <a name="gcp_oracle_zone" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.gcpOracleZone"></a>

- *Type:* str

GCP location where Oracle Exadata is hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#gcp_oracle_zone OracleDatabaseCloudExadataInfrastructure#gcp_oracle_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#id OracleDatabaseCloudExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#labels OracleDatabaseCloudExadataInfrastructure#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#project OracleDatabaseCloudExadataInfrastructure#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties">OracleDatabaseCloudExadataInfrastructureProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#properties OracleDatabaseCloudExadataInfrastructure#properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts">OracleDatabaseCloudExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#timeouts OracleDatabaseCloudExadataInfrastructure#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetGcpOracleZone">reset_gcp_oracle_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_properties` <a name="put_properties" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putProperties"></a>

```python
def put_properties(
  shape: str,
  compute_count: typing.Union[int, float] = None,
  customer_contacts: typing.Union[IResolvable, typing.List[OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts]] = None,
  maintenance_window: OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow = None,
  storage_count: typing.Union[int, float] = None,
  total_storage_size_gb: typing.Union[int, float] = None
) -> None
```

###### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putProperties.parameter.shape"></a>

- *Type:* str

The shape of the Exadata Infrastructure.

The shape determines the
amount of CPU, storage, and memory resources allocated to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#shape OracleDatabaseCloudExadataInfrastructure#shape}

---

###### `compute_count`<sup>Optional</sup> <a name="compute_count" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putProperties.parameter.computeCount"></a>

- *Type:* typing.Union[int, float]

The number of compute servers for the Exadata Infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#compute_count OracleDatabaseCloudExadataInfrastructure#compute_count}

---

###### `customer_contacts`<sup>Optional</sup> <a name="customer_contacts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putProperties.parameter.customerContacts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>]]

customer_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#customer_contacts OracleDatabaseCloudExadataInfrastructure#customer_contacts}

---

###### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putProperties.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#maintenance_window OracleDatabaseCloudExadataInfrastructure#maintenance_window}

---

###### `storage_count`<sup>Optional</sup> <a name="storage_count" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putProperties.parameter.storageCount"></a>

- *Type:* typing.Union[int, float]

The number of Cloud Exadata storage servers for the Exadata Infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#storage_count OracleDatabaseCloudExadataInfrastructure#storage_count}

---

###### `total_storage_size_gb`<sup>Optional</sup> <a name="total_storage_size_gb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putProperties.parameter.totalStorageSizeGb"></a>

- *Type:* typing.Union[int, float]

The total storage allocated to the Exadata Infrastructure resource, in gigabytes (GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#total_storage_size_gb OracleDatabaseCloudExadataInfrastructure#total_storage_size_gb}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#create OracleDatabaseCloudExadataInfrastructure#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#delete OracleDatabaseCloudExadataInfrastructure#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#update OracleDatabaseCloudExadataInfrastructure#update}.

---

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_gcp_oracle_zone` <a name="reset_gcp_oracle_zone" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetGcpOracleZone"></a>

```python
def reset_gcp_oracle_zone() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OracleDatabaseCloudExadataInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_exadata_infrastructure

oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_exadata_infrastructure

oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_exadata_infrastructure

oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_exadata_infrastructure

oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OracleDatabaseCloudExadataInfrastructure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OracleDatabaseCloudExadataInfrastructure to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OracleDatabaseCloudExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OracleDatabaseCloudExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.entitlementId">entitlement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference">OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference">OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureIdInput">cloud_exadata_infrastructure_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.gcpOracleZoneInput">gcp_oracle_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.propertiesInput">properties_input</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties">OracleDatabaseCloudExadataInfrastructureProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts">OracleDatabaseCloudExadataInfrastructureTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.gcpOracleZone">gcp_oracle_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `entitlement_id`<sup>Required</sup> <a name="entitlement_id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.entitlementId"></a>

```python
entitlement_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.properties"></a>

```python
properties: OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference">OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.timeouts"></a>

```python
timeouts: OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference">OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference</a>

---

##### `cloud_exadata_infrastructure_id_input`<sup>Optional</sup> <a name="cloud_exadata_infrastructure_id_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureIdInput"></a>

```python
cloud_exadata_infrastructure_id_input: str
```

- *Type:* str

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.deletionProtectionInput"></a>

```python
deletion_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `gcp_oracle_zone_input`<sup>Optional</sup> <a name="gcp_oracle_zone_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.gcpOracleZoneInput"></a>

```python
gcp_oracle_zone_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.propertiesInput"></a>

```python
properties_input: OracleDatabaseCloudExadataInfrastructureProperties
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties">OracleDatabaseCloudExadataInfrastructureProperties</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OracleDatabaseCloudExadataInfrastructureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts">OracleDatabaseCloudExadataInfrastructureTimeouts</a>]

---

##### `cloud_exadata_infrastructure_id`<sup>Required</sup> <a name="cloud_exadata_infrastructure_id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureId"></a>

```python
cloud_exadata_infrastructure_id: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `gcp_oracle_zone`<sup>Required</sup> <a name="gcp_oracle_zone" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.gcpOracleZone"></a>

```python
gcp_oracle_zone: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseCloudExadataInfrastructureConfig <a name="OracleDatabaseCloudExadataInfrastructureConfig" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_exadata_infrastructure

oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_exadata_infrastructure_id: str,
  location: str,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  gcp_oracle_zone: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  properties: OracleDatabaseCloudExadataInfrastructureProperties = None,
  timeouts: OracleDatabaseCloudExadataInfrastructureTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | The ID of the Exadata Infrastructure to create. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbServer'. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.displayName">display_name</a></code> | <code>str</code> | User friendly name for this resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.gcpOracleZone">gcp_oracle_zone</a></code> | <code>str</code> | GCP location where Oracle Exadata is hosted. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#id OracleDatabaseCloudExadataInfrastructure#id}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#project OracleDatabaseCloudExadataInfrastructure#project}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties">OracleDatabaseCloudExadataInfrastructureProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts">OracleDatabaseCloudExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_exadata_infrastructure_id`<sup>Required</sup> <a name="cloud_exadata_infrastructure_id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.cloudExadataInfrastructureId"></a>

```python
cloud_exadata_infrastructure_id: str
```

- *Type:* str

The ID of the Exadata Infrastructure to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#cloud_exadata_infrastructure_id OracleDatabaseCloudExadataInfrastructure#cloud_exadata_infrastructure_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbServer'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#location OracleDatabaseCloudExadataInfrastructure#location}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#deletion_protection OracleDatabaseCloudExadataInfrastructure#deletion_protection}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User friendly name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#display_name OracleDatabaseCloudExadataInfrastructure#display_name}

---

##### `gcp_oracle_zone`<sup>Optional</sup> <a name="gcp_oracle_zone" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.gcpOracleZone"></a>

```python
gcp_oracle_zone: str
```

- *Type:* str

GCP location where Oracle Exadata is hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#gcp_oracle_zone OracleDatabaseCloudExadataInfrastructure#gcp_oracle_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#id OracleDatabaseCloudExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#labels OracleDatabaseCloudExadataInfrastructure#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#project OracleDatabaseCloudExadataInfrastructure#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.properties"></a>

```python
properties: OracleDatabaseCloudExadataInfrastructureProperties
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties">OracleDatabaseCloudExadataInfrastructureProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#properties OracleDatabaseCloudExadataInfrastructure#properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.timeouts"></a>

```python
timeouts: OracleDatabaseCloudExadataInfrastructureTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts">OracleDatabaseCloudExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#timeouts OracleDatabaseCloudExadataInfrastructure#timeouts}

---

### OracleDatabaseCloudExadataInfrastructureProperties <a name="OracleDatabaseCloudExadataInfrastructureProperties" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_exadata_infrastructure

oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties(
  shape: str,
  compute_count: typing.Union[int, float] = None,
  customer_contacts: typing.Union[IResolvable, typing.List[OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts]] = None,
  maintenance_window: OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow = None,
  storage_count: typing.Union[int, float] = None,
  total_storage_size_gb: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.shape">shape</a></code> | <code>str</code> | The shape of the Exadata Infrastructure. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | The number of compute servers for the Exadata Infrastructure. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.customerContacts">customer_contacts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>]]</code> | customer_contacts block. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.storageCount">storage_count</a></code> | <code>typing.Union[int, float]</code> | The number of Cloud Exadata storage servers for the Exadata Infrastructure. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.totalStorageSizeGb">total_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | The total storage allocated to the Exadata Infrastructure resource, in gigabytes (GB). |

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.shape"></a>

```python
shape: str
```

- *Type:* str

The shape of the Exadata Infrastructure.

The shape determines the
amount of CPU, storage, and memory resources allocated to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#shape OracleDatabaseCloudExadataInfrastructure#shape}

---

##### `compute_count`<sup>Optional</sup> <a name="compute_count" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of compute servers for the Exadata Infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#compute_count OracleDatabaseCloudExadataInfrastructure#compute_count}

---

##### `customer_contacts`<sup>Optional</sup> <a name="customer_contacts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.customerContacts"></a>

```python
customer_contacts: typing.Union[IResolvable, typing.List[OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>]]

customer_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#customer_contacts OracleDatabaseCloudExadataInfrastructure#customer_contacts}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.maintenanceWindow"></a>

```python
maintenance_window: OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#maintenance_window OracleDatabaseCloudExadataInfrastructure#maintenance_window}

---

##### `storage_count`<sup>Optional</sup> <a name="storage_count" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.storageCount"></a>

```python
storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of Cloud Exadata storage servers for the Exadata Infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#storage_count OracleDatabaseCloudExadataInfrastructure#storage_count}

---

##### `total_storage_size_gb`<sup>Optional</sup> <a name="total_storage_size_gb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.totalStorageSizeGb"></a>

```python
total_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The total storage allocated to the Exadata Infrastructure resource, in gigabytes (GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#total_storage_size_gb OracleDatabaseCloudExadataInfrastructure#total_storage_size_gb}

---

### OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts <a name="OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_exadata_infrastructure

oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts(
  email: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts.property.email">email</a></code> | <code>str</code> | The email address used by Oracle to send notifications regarding databases and infrastructure. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts.property.email"></a>

```python
email: str
```

- *Type:* str

The email address used by Oracle to send notifications regarding databases and infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#email OracleDatabaseCloudExadataInfrastructure#email}

---

### OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow <a name="OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_exadata_infrastructure

oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow(
  custom_action_timeout_mins: typing.Union[int, float] = None,
  days_of_week: typing.List[str] = None,
  hours_of_day: typing.List[typing.Union[int, float]] = None,
  is_custom_action_timeout_enabled: typing.Union[bool, IResolvable] = None,
  lead_time_week: typing.Union[int, float] = None,
  months: typing.List[str] = None,
  patching_mode: str = None,
  preference: str = None,
  weeks_of_month: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.customActionTimeoutMins">custom_action_timeout_mins</a></code> | <code>typing.Union[int, float]</code> | Determines the amount of time the system will wait before the start of each database server patching operation. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | Days during the week when maintenance should be performed. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.hoursOfDay">hours_of_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | The window of hours during the day when maintenance should be performed. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.isCustomActionTimeoutEnabled">is_custom_action_timeout_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.leadTimeWeek">lead_time_week</a></code> | <code>typing.Union[int, float]</code> | Lead time window allows user to set a lead time to prepare for a down time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.months">months</a></code> | <code>typing.List[str]</code> | Months during the year when maintenance should be performed. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.patchingMode">patching_mode</a></code> | <code>str</code> | Cloud CloudExadataInfrastructure node patching method, either "ROLLING"  or "NONROLLING". Default value is ROLLING.   Possible values:  PATCHING_MODE_UNSPECIFIED ROLLING NON_ROLLING. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.preference">preference</a></code> | <code>str</code> | The maintenance window scheduling preference.   Possible values:  MAINTENANCE_WINDOW_PREFERENCE_UNSPECIFIED CUSTOM_PREFERENCE NO_PREFERENCE. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Weeks during the month when maintenance should be performed. |

---

##### `custom_action_timeout_mins`<sup>Optional</sup> <a name="custom_action_timeout_mins" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.customActionTimeoutMins"></a>

```python
custom_action_timeout_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Determines the amount of time the system will wait before the start of each database server patching operation.

Custom action timeout is in minutes and
valid value is between 15 to 120 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#custom_action_timeout_mins OracleDatabaseCloudExadataInfrastructure#custom_action_timeout_mins}

---

##### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

Days during the week when maintenance should be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#days_of_week OracleDatabaseCloudExadataInfrastructure#days_of_week}

---

##### `hours_of_day`<sup>Optional</sup> <a name="hours_of_day" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.hoursOfDay"></a>

```python
hours_of_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

The window of hours during the day when maintenance should be performed.

The window is a 4 hour slot. Valid values are:
0 - represents time slot 0:00 - 3:59 UTC
4 - represents time slot 4:00 - 7:59 UTC
8 - represents time slot 8:00 - 11:59 UTC
12 - represents time slot 12:00 - 15:59 UTC
16 - represents time slot 16:00 - 19:59 UTC
20 - represents time slot 20:00 - 23:59 UTC

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#hours_of_day OracleDatabaseCloudExadataInfrastructure#hours_of_day}

---

##### `is_custom_action_timeout_enabled`<sup>Optional</sup> <a name="is_custom_action_timeout_enabled" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.isCustomActionTimeoutEnabled"></a>

```python
is_custom_action_timeout_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#is_custom_action_timeout_enabled OracleDatabaseCloudExadataInfrastructure#is_custom_action_timeout_enabled}

---

##### `lead_time_week`<sup>Optional</sup> <a name="lead_time_week" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.leadTimeWeek"></a>

```python
lead_time_week: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Lead time window allows user to set a lead time to prepare for a down time.

The lead time is in weeks and valid value is between 1 to 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#lead_time_week OracleDatabaseCloudExadataInfrastructure#lead_time_week}

---

##### `months`<sup>Optional</sup> <a name="months" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.months"></a>

```python
months: typing.List[str]
```

- *Type:* typing.List[str]

Months during the year when maintenance should be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#months OracleDatabaseCloudExadataInfrastructure#months}

---

##### `patching_mode`<sup>Optional</sup> <a name="patching_mode" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.patchingMode"></a>

```python
patching_mode: str
```

- *Type:* str

Cloud CloudExadataInfrastructure node patching method, either "ROLLING"  or "NONROLLING". Default value is ROLLING.   Possible values:  PATCHING_MODE_UNSPECIFIED ROLLING NON_ROLLING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#patching_mode OracleDatabaseCloudExadataInfrastructure#patching_mode}

---

##### `preference`<sup>Optional</sup> <a name="preference" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.preference"></a>

```python
preference: str
```

- *Type:* str

The maintenance window scheduling preference.   Possible values:  MAINTENANCE_WINDOW_PREFERENCE_UNSPECIFIED CUSTOM_PREFERENCE NO_PREFERENCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#preference OracleDatabaseCloudExadataInfrastructure#preference}

---

##### `weeks_of_month`<sup>Optional</sup> <a name="weeks_of_month" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Weeks during the month when maintenance should be performed.

Weeks start on
the 1st, 8th, 15th, and 22nd days of the month, and have a duration of 7
days. Weeks start and end based on calendar dates, not days of the week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#weeks_of_month OracleDatabaseCloudExadataInfrastructure#weeks_of_month}

---

### OracleDatabaseCloudExadataInfrastructureTimeouts <a name="OracleDatabaseCloudExadataInfrastructureTimeouts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_exadata_infrastructure

oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#create OracleDatabaseCloudExadataInfrastructure#create}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#delete OracleDatabaseCloudExadataInfrastructure#delete}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#update OracleDatabaseCloudExadataInfrastructure#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#create OracleDatabaseCloudExadataInfrastructure#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#delete OracleDatabaseCloudExadataInfrastructure#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#update OracleDatabaseCloudExadataInfrastructure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList <a name="OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_exadata_infrastructure

oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>]]

---


### OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference <a name="OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_exadata_infrastructure

oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>]

---


### OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference <a name="OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_exadata_infrastructure

oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetCustomActionTimeoutMins">reset_custom_action_timeout_mins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetDaysOfWeek">reset_days_of_week</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetHoursOfDay">reset_hours_of_day</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled">reset_is_custom_action_timeout_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetLeadTimeWeek">reset_lead_time_week</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetMonths">reset_months</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetPatchingMode">reset_patching_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetPreference">reset_preference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetWeeksOfMonth">reset_weeks_of_month</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_action_timeout_mins` <a name="reset_custom_action_timeout_mins" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetCustomActionTimeoutMins"></a>

```python
def reset_custom_action_timeout_mins() -> None
```

##### `reset_days_of_week` <a name="reset_days_of_week" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetDaysOfWeek"></a>

```python
def reset_days_of_week() -> None
```

##### `reset_hours_of_day` <a name="reset_hours_of_day" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetHoursOfDay"></a>

```python
def reset_hours_of_day() -> None
```

##### `reset_is_custom_action_timeout_enabled` <a name="reset_is_custom_action_timeout_enabled" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled"></a>

```python
def reset_is_custom_action_timeout_enabled() -> None
```

##### `reset_lead_time_week` <a name="reset_lead_time_week" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetLeadTimeWeek"></a>

```python
def reset_lead_time_week() -> None
```

##### `reset_months` <a name="reset_months" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetMonths"></a>

```python
def reset_months() -> None
```

##### `reset_patching_mode` <a name="reset_patching_mode" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetPatchingMode"></a>

```python
def reset_patching_mode() -> None
```

##### `reset_preference` <a name="reset_preference" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetPreference"></a>

```python
def reset_preference() -> None
```

##### `reset_weeks_of_month` <a name="reset_weeks_of_month" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetWeeksOfMonth"></a>

```python
def reset_weeks_of_month() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMinsInput">custom_action_timeout_mins_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeekInput">days_of_week_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDayInput">hours_of_day_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput">is_custom_action_timeout_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeekInput">lead_time_week_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.monthsInput">months_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingModeInput">patching_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preferenceInput">preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonthInput">weeks_of_month_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMins">custom_action_timeout_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDay">hours_of_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">is_custom_action_timeout_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeek">lead_time_week</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.months">months</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingMode">patching_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_action_timeout_mins_input`<sup>Optional</sup> <a name="custom_action_timeout_mins_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMinsInput"></a>

```python
custom_action_timeout_mins_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_of_week_input`<sup>Optional</sup> <a name="days_of_week_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeekInput"></a>

```python
days_of_week_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hours_of_day_input`<sup>Optional</sup> <a name="hours_of_day_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDayInput"></a>

```python
hours_of_day_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `is_custom_action_timeout_enabled_input`<sup>Optional</sup> <a name="is_custom_action_timeout_enabled_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```python
is_custom_action_timeout_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lead_time_week_input`<sup>Optional</sup> <a name="lead_time_week_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeekInput"></a>

```python
lead_time_week_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `months_input`<sup>Optional</sup> <a name="months_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.monthsInput"></a>

```python
months_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `patching_mode_input`<sup>Optional</sup> <a name="patching_mode_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingModeInput"></a>

```python
patching_mode_input: str
```

- *Type:* str

---

##### `preference_input`<sup>Optional</sup> <a name="preference_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preferenceInput"></a>

```python
preference_input: str
```

- *Type:* str

---

##### `weeks_of_month_input`<sup>Optional</sup> <a name="weeks_of_month_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonthInput"></a>

```python
weeks_of_month_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `custom_action_timeout_mins`<sup>Required</sup> <a name="custom_action_timeout_mins" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMins"></a>

```python
custom_action_timeout_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hours_of_day`<sup>Required</sup> <a name="hours_of_day" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```python
hours_of_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `is_custom_action_timeout_enabled`<sup>Required</sup> <a name="is_custom_action_timeout_enabled" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```python
is_custom_action_timeout_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lead_time_week`<sup>Required</sup> <a name="lead_time_week" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeek"></a>

```python
lead_time_week: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.months"></a>

```python
months: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `patching_mode`<sup>Required</sup> <a name="patching_mode" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingMode"></a>

```python
patching_mode: str
```

- *Type:* str

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preference"></a>

```python
preference: str
```

- *Type:* str

---

##### `weeks_of_month`<sup>Required</sup> <a name="weeks_of_month" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

---


### OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference <a name="OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_exadata_infrastructure

oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putCustomerContacts">put_customer_contacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetComputeCount">reset_compute_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetCustomerContacts">reset_customer_contacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetStorageCount">reset_storage_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetTotalStorageSizeGb">reset_total_storage_size_gb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_customer_contacts` <a name="put_customer_contacts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putCustomerContacts"></a>

```python
def put_customer_contacts(
  value: typing.Union[IResolvable, typing.List[OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putCustomerContacts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>]]

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  custom_action_timeout_mins: typing.Union[int, float] = None,
  days_of_week: typing.List[str] = None,
  hours_of_day: typing.List[typing.Union[int, float]] = None,
  is_custom_action_timeout_enabled: typing.Union[bool, IResolvable] = None,
  lead_time_week: typing.Union[int, float] = None,
  months: typing.List[str] = None,
  patching_mode: str = None,
  preference: str = None,
  weeks_of_month: typing.List[typing.Union[int, float]] = None
) -> None
```

###### `custom_action_timeout_mins`<sup>Optional</sup> <a name="custom_action_timeout_mins" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow.parameter.customActionTimeoutMins"></a>

- *Type:* typing.Union[int, float]

Determines the amount of time the system will wait before the start of each database server patching operation.

Custom action timeout is in minutes and
valid value is between 15 to 120 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#custom_action_timeout_mins OracleDatabaseCloudExadataInfrastructure#custom_action_timeout_mins}

---

###### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow.parameter.daysOfWeek"></a>

- *Type:* typing.List[str]

Days during the week when maintenance should be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#days_of_week OracleDatabaseCloudExadataInfrastructure#days_of_week}

---

###### `hours_of_day`<sup>Optional</sup> <a name="hours_of_day" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow.parameter.hoursOfDay"></a>

- *Type:* typing.List[typing.Union[int, float]]

The window of hours during the day when maintenance should be performed.

The window is a 4 hour slot. Valid values are:
0 - represents time slot 0:00 - 3:59 UTC
4 - represents time slot 4:00 - 7:59 UTC
8 - represents time slot 8:00 - 11:59 UTC
12 - represents time slot 12:00 - 15:59 UTC
16 - represents time slot 16:00 - 19:59 UTC
20 - represents time slot 20:00 - 23:59 UTC

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#hours_of_day OracleDatabaseCloudExadataInfrastructure#hours_of_day}

---

###### `is_custom_action_timeout_enabled`<sup>Optional</sup> <a name="is_custom_action_timeout_enabled" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow.parameter.isCustomActionTimeoutEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#is_custom_action_timeout_enabled OracleDatabaseCloudExadataInfrastructure#is_custom_action_timeout_enabled}

---

###### `lead_time_week`<sup>Optional</sup> <a name="lead_time_week" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow.parameter.leadTimeWeek"></a>

- *Type:* typing.Union[int, float]

Lead time window allows user to set a lead time to prepare for a down time.

The lead time is in weeks and valid value is between 1 to 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#lead_time_week OracleDatabaseCloudExadataInfrastructure#lead_time_week}

---

###### `months`<sup>Optional</sup> <a name="months" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow.parameter.months"></a>

- *Type:* typing.List[str]

Months during the year when maintenance should be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#months OracleDatabaseCloudExadataInfrastructure#months}

---

###### `patching_mode`<sup>Optional</sup> <a name="patching_mode" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow.parameter.patchingMode"></a>

- *Type:* str

Cloud CloudExadataInfrastructure node patching method, either "ROLLING"  or "NONROLLING". Default value is ROLLING.   Possible values:  PATCHING_MODE_UNSPECIFIED ROLLING NON_ROLLING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#patching_mode OracleDatabaseCloudExadataInfrastructure#patching_mode}

---

###### `preference`<sup>Optional</sup> <a name="preference" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow.parameter.preference"></a>

- *Type:* str

The maintenance window scheduling preference.   Possible values:  MAINTENANCE_WINDOW_PREFERENCE_UNSPECIFIED CUSTOM_PREFERENCE NO_PREFERENCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#preference OracleDatabaseCloudExadataInfrastructure#preference}

---

###### `weeks_of_month`<sup>Optional</sup> <a name="weeks_of_month" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow.parameter.weeksOfMonth"></a>

- *Type:* typing.List[typing.Union[int, float]]

Weeks during the month when maintenance should be performed.

Weeks start on
the 1st, 8th, 15th, and 22nd days of the month, and have a duration of 7
days. Weeks start and end based on calendar dates, not days of the week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/oracle_database_cloud_exadata_infrastructure#weeks_of_month OracleDatabaseCloudExadataInfrastructure#weeks_of_month}

---

##### `reset_compute_count` <a name="reset_compute_count" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetComputeCount"></a>

```python
def reset_compute_count() -> None
```

##### `reset_customer_contacts` <a name="reset_customer_contacts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetCustomerContacts"></a>

```python
def reset_customer_contacts() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_storage_count` <a name="reset_storage_count" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetStorageCount"></a>

```python
def reset_storage_count() -> None
```

##### `reset_total_storage_size_gb` <a name="reset_total_storage_size_gb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetTotalStorageSizeGb"></a>

```python
def reset_total_storage_size_gb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.activatedStorageCount">activated_storage_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.additionalStorageCount">additional_storage_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.availableStorageSizeGb">available_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.cpuCount">cpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContacts">customer_contacts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dataStorageSizeTb">data_storage_size_tb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbNodeStorageSizeGb">db_node_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbServerVersion">db_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxCpuCount">max_cpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDataStorageTb">max_data_storage_tb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDbNodeStorageSizeGb">max_db_node_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxMemoryGb">max_memory_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.memorySizeGb">memory_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyDbServerVersion">monthly_db_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyStorageServerVersion">monthly_storage_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunId">next_maintenance_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunTime">next_maintenance_run_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextSecurityMaintenanceRunTime">next_security_maintenance_run_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ociUrl">oci_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageServerVersion">storage_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCountInput">compute_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContactsInput">customer_contacts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCountInput">storage_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGbInput">total_storage_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCount">compute_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCount">storage_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGb">total_storage_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties">OracleDatabaseCloudExadataInfrastructureProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `activated_storage_count`<sup>Required</sup> <a name="activated_storage_count" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.activatedStorageCount"></a>

```python
activated_storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `additional_storage_count`<sup>Required</sup> <a name="additional_storage_count" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.additionalStorageCount"></a>

```python
additional_storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `available_storage_size_gb`<sup>Required</sup> <a name="available_storage_size_gb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.availableStorageSizeGb"></a>

```python
available_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_count`<sup>Required</sup> <a name="cpu_count" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.cpuCount"></a>

```python
cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_contacts`<sup>Required</sup> <a name="customer_contacts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContacts"></a>

```python
customer_contacts: OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList</a>

---

##### `data_storage_size_tb`<sup>Required</sup> <a name="data_storage_size_tb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dataStorageSizeTb"></a>

```python
data_storage_size_tb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_gb`<sup>Required</sup> <a name="db_node_storage_size_gb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbNodeStorageSizeGb"></a>

```python
db_node_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_server_version`<sup>Required</sup> <a name="db_server_version" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbServerVersion"></a>

```python
db_server_version: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindow"></a>

```python
maintenance_window: OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference</a>

---

##### `max_cpu_count`<sup>Required</sup> <a name="max_cpu_count" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxCpuCount"></a>

```python
max_cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_data_storage_tb`<sup>Required</sup> <a name="max_data_storage_tb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDataStorageTb"></a>

```python
max_data_storage_tb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_db_node_storage_size_gb`<sup>Required</sup> <a name="max_db_node_storage_size_gb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDbNodeStorageSizeGb"></a>

```python
max_db_node_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_memory_gb`<sup>Required</sup> <a name="max_memory_gb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxMemoryGb"></a>

```python
max_memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_size_gb`<sup>Required</sup> <a name="memory_size_gb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.memorySizeGb"></a>

```python
memory_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monthly_db_server_version`<sup>Required</sup> <a name="monthly_db_server_version" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyDbServerVersion"></a>

```python
monthly_db_server_version: str
```

- *Type:* str

---

##### `monthly_storage_server_version`<sup>Required</sup> <a name="monthly_storage_server_version" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyStorageServerVersion"></a>

```python
monthly_storage_server_version: str
```

- *Type:* str

---

##### `next_maintenance_run_id`<sup>Required</sup> <a name="next_maintenance_run_id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunId"></a>

```python
next_maintenance_run_id: str
```

- *Type:* str

---

##### `next_maintenance_run_time`<sup>Required</sup> <a name="next_maintenance_run_time" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunTime"></a>

```python
next_maintenance_run_time: str
```

- *Type:* str

---

##### `next_security_maintenance_run_time`<sup>Required</sup> <a name="next_security_maintenance_run_time" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextSecurityMaintenanceRunTime"></a>

```python
next_security_maintenance_run_time: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `oci_url`<sup>Required</sup> <a name="oci_url" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ociUrl"></a>

```python
oci_url: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_server_version`<sup>Required</sup> <a name="storage_server_version" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageServerVersion"></a>

```python
storage_server_version: str
```

- *Type:* str

---

##### `compute_count_input`<sup>Optional</sup> <a name="compute_count_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCountInput"></a>

```python
compute_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_contacts_input`<sup>Optional</sup> <a name="customer_contacts_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContactsInput"></a>

```python
customer_contacts_input: typing.Union[IResolvable, typing.List[OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts</a>]]

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `storage_count_input`<sup>Optional</sup> <a name="storage_count_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCountInput"></a>

```python
storage_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_storage_size_gb_input`<sup>Optional</sup> <a name="total_storage_size_gb_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGbInput"></a>

```python
total_storage_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_count`<sup>Required</sup> <a name="compute_count" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCount"></a>

```python
compute_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `storage_count`<sup>Required</sup> <a name="storage_count" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCount"></a>

```python
storage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_storage_size_gb`<sup>Required</sup> <a name="total_storage_size_gb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGb"></a>

```python
total_storage_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: OracleDatabaseCloudExadataInfrastructureProperties
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties">OracleDatabaseCloudExadataInfrastructureProperties</a>

---


### OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference <a name="OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import oracle_database_cloud_exadata_infrastructure

oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts">OracleDatabaseCloudExadataInfrastructureTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OracleDatabaseCloudExadataInfrastructureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts">OracleDatabaseCloudExadataInfrastructureTimeouts</a>]

---



