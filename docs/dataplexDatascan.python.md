# `dataplexDatascan` Submodule <a name="`dataplexDatascan` Submodule" id="@cdktf/provider-google.dataplexDatascan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexDatascan <a name="DataplexDatascan" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan google_dataplex_datascan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascan(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data: DataplexDatascanData,
  data_scan_id: str,
  execution_spec: DataplexDatascanExecutionSpec,
  location: str,
  data_discovery_spec: DataplexDatascanDataDiscoverySpec = None,
  data_profile_spec: DataplexDatascanDataProfileSpec = None,
  data_quality_spec: DataplexDatascanDataQualitySpec = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: DataplexDatascanTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.data">data</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData">DataplexDatascanData</a></code> | data block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.dataScanId">data_scan_id</a></code> | <code>str</code> | DataScan identifier. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.executionSpec">execution_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec">DataplexDatascanExecutionSpec</a></code> | execution_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.location">location</a></code> | <code>str</code> | The location where the data scan should reside. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.dataDiscoverySpec">data_discovery_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec">DataplexDatascanDataDiscoverySpec</a></code> | data_discovery_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.dataProfileSpec">data_profile_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec">DataplexDatascanDataProfileSpec</a></code> | data_profile_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.dataQualitySpec">data_quality_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec">DataplexDatascanDataQualitySpec</a></code> | data_quality_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the scan. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User friendly display name. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#id DataplexDatascan#id}. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the scan. A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#project DataplexDatascan#project}. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts">DataplexDatascanTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.data"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData">DataplexDatascanData</a>

data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#data DataplexDatascan#data}

---

##### `data_scan_id`<sup>Required</sup> <a name="data_scan_id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.dataScanId"></a>

- *Type:* str

DataScan identifier.

Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#data_scan_id DataplexDatascan#data_scan_id}

---

##### `execution_spec`<sup>Required</sup> <a name="execution_spec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.executionSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec">DataplexDatascanExecutionSpec</a>

execution_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#execution_spec DataplexDatascan#execution_spec}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.location"></a>

- *Type:* str

The location where the data scan should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#location DataplexDatascan#location}

---

##### `data_discovery_spec`<sup>Optional</sup> <a name="data_discovery_spec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.dataDiscoverySpec"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec">DataplexDatascanDataDiscoverySpec</a>

data_discovery_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#data_discovery_spec DataplexDatascan#data_discovery_spec}

---

##### `data_profile_spec`<sup>Optional</sup> <a name="data_profile_spec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.dataProfileSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec">DataplexDatascanDataProfileSpec</a>

data_profile_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#data_profile_spec DataplexDatascan#data_profile_spec}

---

##### `data_quality_spec`<sup>Optional</sup> <a name="data_quality_spec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.dataQualitySpec"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec">DataplexDatascanDataQualitySpec</a>

data_quality_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#data_quality_spec DataplexDatascan#data_quality_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.description"></a>

- *Type:* str

Description of the scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#description DataplexDatascan#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.displayName"></a>

- *Type:* str

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#display_name DataplexDatascan#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#id DataplexDatascan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels for the scan. A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#labels DataplexDatascan#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#project DataplexDatascan#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts">DataplexDatascanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#timeouts DataplexDatascan#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putData">put_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataDiscoverySpec">put_data_discovery_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataProfileSpec">put_data_profile_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataQualitySpec">put_data_quality_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putExecutionSpec">put_execution_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDataDiscoverySpec">reset_data_discovery_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDataProfileSpec">reset_data_profile_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDataQualitySpec">reset_data_quality_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data` <a name="put_data" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putData"></a>

```python
def put_data(
  entity: str = None,
  resource: str = None
) -> None
```

###### `entity`<sup>Optional</sup> <a name="entity" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putData.parameter.entity"></a>

- *Type:* str

The Dataplex entity that represents the data source(e.g. BigQuery table) for Datascan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#entity DataplexDatascan#entity}

---

###### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putData.parameter.resource"></a>

- *Type:* str

The service-qualified full resource name of the cloud resource for a DataScan job to scan against.

The field could be:
Cloud Storage bucket (//storage.googleapis.com/projects/PROJECT_ID/buckets/BUCKET_ID) for DataDiscoveryScan OR BigQuery table of type "TABLE" (/bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID) for DataProfileScan/DataQualityScan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#resource DataplexDatascan#resource}

---

##### `put_data_discovery_spec` <a name="put_data_discovery_spec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataDiscoverySpec"></a>

```python
def put_data_discovery_spec(
  bigquery_publishing_config: DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig = None,
  storage_config: DataplexDatascanDataDiscoverySpecStorageConfig = None
) -> None
```

###### `bigquery_publishing_config`<sup>Optional</sup> <a name="bigquery_publishing_config" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataDiscoverySpec.parameter.bigqueryPublishingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig">DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig</a>

bigquery_publishing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#bigquery_publishing_config DataplexDatascan#bigquery_publishing_config}

---

###### `storage_config`<sup>Optional</sup> <a name="storage_config" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataDiscoverySpec.parameter.storageConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig">DataplexDatascanDataDiscoverySpecStorageConfig</a>

storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#storage_config DataplexDatascan#storage_config}

---

##### `put_data_profile_spec` <a name="put_data_profile_spec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataProfileSpec"></a>

```python
def put_data_profile_spec(
  exclude_fields: DataplexDatascanDataProfileSpecExcludeFields = None,
  include_fields: DataplexDatascanDataProfileSpecIncludeFields = None,
  post_scan_actions: DataplexDatascanDataProfileSpecPostScanActions = None,
  row_filter: str = None,
  sampling_percent: typing.Union[int, float] = None
) -> None
```

###### `exclude_fields`<sup>Optional</sup> <a name="exclude_fields" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataProfileSpec.parameter.excludeFields"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFields">DataplexDatascanDataProfileSpecExcludeFields</a>

exclude_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#exclude_fields DataplexDatascan#exclude_fields}

---

###### `include_fields`<sup>Optional</sup> <a name="include_fields" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataProfileSpec.parameter.includeFields"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFields">DataplexDatascanDataProfileSpecIncludeFields</a>

include_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#include_fields DataplexDatascan#include_fields}

---

###### `post_scan_actions`<sup>Optional</sup> <a name="post_scan_actions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataProfileSpec.parameter.postScanActions"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActions">DataplexDatascanDataProfileSpecPostScanActions</a>

post_scan_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#post_scan_actions DataplexDatascan#post_scan_actions}

---

###### `row_filter`<sup>Optional</sup> <a name="row_filter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataProfileSpec.parameter.rowFilter"></a>

- *Type:* str

A filter applied to all rows in a single DataScan job.

The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#row_filter DataplexDatascan#row_filter}

---

###### `sampling_percent`<sup>Optional</sup> <a name="sampling_percent" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataProfileSpec.parameter.samplingPercent"></a>

- *Type:* typing.Union[int, float]

The percentage of the records to be selected from the dataset for DataScan.

Value can range between 0.0 and 100.0 with up to 3 significant decimal digits.
Sampling is not applied if 'sampling_percent' is not specified, 0 or 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#sampling_percent DataplexDatascan#sampling_percent}

---

##### `put_data_quality_spec` <a name="put_data_quality_spec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataQualitySpec"></a>

```python
def put_data_quality_spec(
  catalog_publishing_enabled: typing.Union[bool, IResolvable] = None,
  post_scan_actions: DataplexDatascanDataQualitySpecPostScanActions = None,
  row_filter: str = None,
  rules: typing.Union[IResolvable, typing.List[DataplexDatascanDataQualitySpecRules]] = None,
  sampling_percent: typing.Union[int, float] = None
) -> None
```

###### `catalog_publishing_enabled`<sup>Optional</sup> <a name="catalog_publishing_enabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataQualitySpec.parameter.catalogPublishingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, the latest DataScan job result will be published to Dataplex Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#catalog_publishing_enabled DataplexDatascan#catalog_publishing_enabled}

---

###### `post_scan_actions`<sup>Optional</sup> <a name="post_scan_actions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataQualitySpec.parameter.postScanActions"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions">DataplexDatascanDataQualitySpecPostScanActions</a>

post_scan_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#post_scan_actions DataplexDatascan#post_scan_actions}

---

###### `row_filter`<sup>Optional</sup> <a name="row_filter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataQualitySpec.parameter.rowFilter"></a>

- *Type:* str

A filter applied to all rows in a single DataScan job.

The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#row_filter DataplexDatascan#row_filter}

---

###### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataQualitySpec.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules">DataplexDatascanDataQualitySpecRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#rules DataplexDatascan#rules}

---

###### `sampling_percent`<sup>Optional</sup> <a name="sampling_percent" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataQualitySpec.parameter.samplingPercent"></a>

- *Type:* typing.Union[int, float]

The percentage of the records to be selected from the dataset for DataScan.

Value can range between 0.0 and 100.0 with up to 3 significant decimal digits.
Sampling is not applied if 'sampling_percent' is not specified, 0 or 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#sampling_percent DataplexDatascan#sampling_percent}

---

##### `put_execution_spec` <a name="put_execution_spec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putExecutionSpec"></a>

```python
def put_execution_spec(
  trigger: DataplexDatascanExecutionSpecTrigger,
  field: str = None
) -> None
```

###### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putExecutionSpec.parameter.trigger"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger">DataplexDatascanExecutionSpecTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#trigger DataplexDatascan#trigger}

---

###### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putExecutionSpec.parameter.field"></a>

- *Type:* str

The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time.

If not specified, a data scan will run for all data in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#field DataplexDatascan#field}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#create DataplexDatascan#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#delete DataplexDatascan#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#update DataplexDatascan#update}.

---

##### `reset_data_discovery_spec` <a name="reset_data_discovery_spec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDataDiscoverySpec"></a>

```python
def reset_data_discovery_spec() -> None
```

##### `reset_data_profile_spec` <a name="reset_data_profile_spec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDataProfileSpec"></a>

```python
def reset_data_profile_spec() -> None
```

##### `reset_data_quality_spec` <a name="reset_data_quality_spec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDataQualitySpec"></a>

```python
def reset_data_quality_spec() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataplexDatascan resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascan.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataplexDatascan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataplexDatascan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataplexDatascan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataplexDatascan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.data">data</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference">DataplexDatascanDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataDiscoverySpec">data_discovery_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference">DataplexDatascanDataDiscoverySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataProfileSpec">data_profile_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference">DataplexDatascanDataProfileSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataQualitySpec">data_quality_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference">DataplexDatascanDataQualitySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.executionSpec">execution_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference">DataplexDatascanExecutionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.executionStatus">execution_status</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList">DataplexDatascanExecutionStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference">DataplexDatascanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataDiscoverySpecInput">data_discovery_spec_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec">DataplexDatascanDataDiscoverySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataInput">data_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData">DataplexDatascanData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataProfileSpecInput">data_profile_spec_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec">DataplexDatascanDataProfileSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataQualitySpecInput">data_quality_spec_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec">DataplexDatascanDataQualitySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataScanIdInput">data_scan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.executionSpecInput">execution_spec_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec">DataplexDatascanExecutionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts">DataplexDatascanTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataScanId">data_scan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.data"></a>

```python
data: DataplexDatascanDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference">DataplexDatascanDataOutputReference</a>

---

##### `data_discovery_spec`<sup>Required</sup> <a name="data_discovery_spec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataDiscoverySpec"></a>

```python
data_discovery_spec: DataplexDatascanDataDiscoverySpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference">DataplexDatascanDataDiscoverySpecOutputReference</a>

---

##### `data_profile_spec`<sup>Required</sup> <a name="data_profile_spec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataProfileSpec"></a>

```python
data_profile_spec: DataplexDatascanDataProfileSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference">DataplexDatascanDataProfileSpecOutputReference</a>

---

##### `data_quality_spec`<sup>Required</sup> <a name="data_quality_spec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataQualitySpec"></a>

```python
data_quality_spec: DataplexDatascanDataQualitySpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference">DataplexDatascanDataQualitySpecOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `execution_spec`<sup>Required</sup> <a name="execution_spec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.executionSpec"></a>

```python
execution_spec: DataplexDatascanExecutionSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference">DataplexDatascanExecutionSpecOutputReference</a>

---

##### `execution_status`<sup>Required</sup> <a name="execution_status" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.executionStatus"></a>

```python
execution_status: DataplexDatascanExecutionStatusList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList">DataplexDatascanExecutionStatusList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.timeouts"></a>

```python
timeouts: DataplexDatascanTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference">DataplexDatascanTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `data_discovery_spec_input`<sup>Optional</sup> <a name="data_discovery_spec_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataDiscoverySpecInput"></a>

```python
data_discovery_spec_input: DataplexDatascanDataDiscoverySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec">DataplexDatascanDataDiscoverySpec</a>

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataInput"></a>

```python
data_input: DataplexDatascanData
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData">DataplexDatascanData</a>

---

##### `data_profile_spec_input`<sup>Optional</sup> <a name="data_profile_spec_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataProfileSpecInput"></a>

```python
data_profile_spec_input: DataplexDatascanDataProfileSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec">DataplexDatascanDataProfileSpec</a>

---

##### `data_quality_spec_input`<sup>Optional</sup> <a name="data_quality_spec_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataQualitySpecInput"></a>

```python
data_quality_spec_input: DataplexDatascanDataQualitySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec">DataplexDatascanDataQualitySpec</a>

---

##### `data_scan_id_input`<sup>Optional</sup> <a name="data_scan_id_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataScanIdInput"></a>

```python
data_scan_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `execution_spec_input`<sup>Optional</sup> <a name="execution_spec_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.executionSpecInput"></a>

```python
execution_spec_input: DataplexDatascanExecutionSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec">DataplexDatascanExecutionSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataplexDatascanTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts">DataplexDatascanTimeouts</a>]

---

##### `data_scan_id`<sup>Required</sup> <a name="data_scan_id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataScanId"></a>

```python
data_scan_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexDatascanConfig <a name="DataplexDatascanConfig" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data: DataplexDatascanData,
  data_scan_id: str,
  execution_spec: DataplexDatascanExecutionSpec,
  location: str,
  data_discovery_spec: DataplexDatascanDataDiscoverySpec = None,
  data_profile_spec: DataplexDatascanDataProfileSpec = None,
  data_quality_spec: DataplexDatascanDataQualitySpec = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: DataplexDatascanTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.data">data</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData">DataplexDatascanData</a></code> | data block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dataScanId">data_scan_id</a></code> | <code>str</code> | DataScan identifier. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.executionSpec">execution_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec">DataplexDatascanExecutionSpec</a></code> | execution_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.location">location</a></code> | <code>str</code> | The location where the data scan should reside. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dataDiscoverySpec">data_discovery_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec">DataplexDatascanDataDiscoverySpec</a></code> | data_discovery_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dataProfileSpec">data_profile_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec">DataplexDatascanDataProfileSpec</a></code> | data_profile_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dataQualitySpec">data_quality_spec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec">DataplexDatascanDataQualitySpec</a></code> | data_quality_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.description">description</a></code> | <code>str</code> | Description of the scan. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.displayName">display_name</a></code> | <code>str</code> | User friendly display name. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#id DataplexDatascan#id}. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the scan. A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#project DataplexDatascan#project}. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts">DataplexDatascanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.data"></a>

```python
data: DataplexDatascanData
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData">DataplexDatascanData</a>

data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#data DataplexDatascan#data}

---

##### `data_scan_id`<sup>Required</sup> <a name="data_scan_id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dataScanId"></a>

```python
data_scan_id: str
```

- *Type:* str

DataScan identifier.

Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#data_scan_id DataplexDatascan#data_scan_id}

---

##### `execution_spec`<sup>Required</sup> <a name="execution_spec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.executionSpec"></a>

```python
execution_spec: DataplexDatascanExecutionSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec">DataplexDatascanExecutionSpec</a>

execution_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#execution_spec DataplexDatascan#execution_spec}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location where the data scan should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#location DataplexDatascan#location}

---

##### `data_discovery_spec`<sup>Optional</sup> <a name="data_discovery_spec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dataDiscoverySpec"></a>

```python
data_discovery_spec: DataplexDatascanDataDiscoverySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec">DataplexDatascanDataDiscoverySpec</a>

data_discovery_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#data_discovery_spec DataplexDatascan#data_discovery_spec}

---

##### `data_profile_spec`<sup>Optional</sup> <a name="data_profile_spec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dataProfileSpec"></a>

```python
data_profile_spec: DataplexDatascanDataProfileSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec">DataplexDatascanDataProfileSpec</a>

data_profile_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#data_profile_spec DataplexDatascan#data_profile_spec}

---

##### `data_quality_spec`<sup>Optional</sup> <a name="data_quality_spec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dataQualitySpec"></a>

```python
data_quality_spec: DataplexDatascanDataQualitySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec">DataplexDatascanDataQualitySpec</a>

data_quality_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#data_quality_spec DataplexDatascan#data_quality_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#description DataplexDatascan#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#display_name DataplexDatascan#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#id DataplexDatascan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels for the scan. A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#labels DataplexDatascan#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#project DataplexDatascan#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.timeouts"></a>

```python
timeouts: DataplexDatascanTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts">DataplexDatascanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#timeouts DataplexDatascan#timeouts}

---

### DataplexDatascanData <a name="DataplexDatascanData" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanData.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanData(
  entity: str = None,
  resource: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData.property.entity">entity</a></code> | <code>str</code> | The Dataplex entity that represents the data source(e.g. BigQuery table) for Datascan. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData.property.resource">resource</a></code> | <code>str</code> | The service-qualified full resource name of the cloud resource for a DataScan job to scan against. |

---

##### `entity`<sup>Optional</sup> <a name="entity" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanData.property.entity"></a>

```python
entity: str
```

- *Type:* str

The Dataplex entity that represents the data source(e.g. BigQuery table) for Datascan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#entity DataplexDatascan#entity}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanData.property.resource"></a>

```python
resource: str
```

- *Type:* str

The service-qualified full resource name of the cloud resource for a DataScan job to scan against.

The field could be:
Cloud Storage bucket (//storage.googleapis.com/projects/PROJECT_ID/buckets/BUCKET_ID) for DataDiscoveryScan OR BigQuery table of type "TABLE" (/bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID) for DataProfileScan/DataQualityScan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#resource DataplexDatascan#resource}

---

### DataplexDatascanDataDiscoverySpec <a name="DataplexDatascanDataDiscoverySpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataDiscoverySpec(
  bigquery_publishing_config: DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig = None,
  storage_config: DataplexDatascanDataDiscoverySpecStorageConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec.property.bigqueryPublishingConfig">bigquery_publishing_config</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig">DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig</a></code> | bigquery_publishing_config block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec.property.storageConfig">storage_config</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig">DataplexDatascanDataDiscoverySpecStorageConfig</a></code> | storage_config block. |

---

##### `bigquery_publishing_config`<sup>Optional</sup> <a name="bigquery_publishing_config" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec.property.bigqueryPublishingConfig"></a>

```python
bigquery_publishing_config: DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig">DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig</a>

bigquery_publishing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#bigquery_publishing_config DataplexDatascan#bigquery_publishing_config}

---

##### `storage_config`<sup>Optional</sup> <a name="storage_config" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec.property.storageConfig"></a>

```python
storage_config: DataplexDatascanDataDiscoverySpecStorageConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig">DataplexDatascanDataDiscoverySpecStorageConfig</a>

storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#storage_config DataplexDatascan#storage_config}

---

### DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig <a name="DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig(
  connection: str = None,
  location: str = None,
  project: str = None,
  table_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig.property.connection">connection</a></code> | <code>str</code> | The BigQuery connection used to create BigLake tables. Must be in the form 'projects/{projectId}/locations/{locationId}/connections/{connection_id}'. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig.property.location">location</a></code> | <code>str</code> | The location of the BigQuery dataset to publish BigLake external or non-BigLake external tables to. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig.property.project">project</a></code> | <code>str</code> | The project of the BigQuery dataset to publish BigLake external or non-BigLake external tables to. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig.property.tableType">table_type</a></code> | <code>str</code> | Determines whether to publish discovered tables as BigLake external tables or non-BigLake external tables. Possible values: ["TABLE_TYPE_UNSPECIFIED", "EXTERNAL", "BIGLAKE"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig.property.connection"></a>

```python
connection: str
```

- *Type:* str

The BigQuery connection used to create BigLake tables. Must be in the form 'projects/{projectId}/locations/{locationId}/connections/{connection_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#connection DataplexDatascan#connection}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the BigQuery dataset to publish BigLake external or non-BigLake external tables to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#location DataplexDatascan#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project of the BigQuery dataset to publish BigLake external or non-BigLake external tables to.

If not specified, the project of the Cloud Storage bucket will be used. The format is "projects/{project_id_or_number}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#project DataplexDatascan#project}

---

##### `table_type`<sup>Optional</sup> <a name="table_type" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig.property.tableType"></a>

```python
table_type: str
```

- *Type:* str

Determines whether to publish discovered tables as BigLake external tables or non-BigLake external tables. Possible values: ["TABLE_TYPE_UNSPECIFIED", "EXTERNAL", "BIGLAKE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#table_type DataplexDatascan#table_type}

---

### DataplexDatascanDataDiscoverySpecStorageConfig <a name="DataplexDatascanDataDiscoverySpecStorageConfig" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig(
  csv_options: DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions = None,
  exclude_patterns: typing.List[str] = None,
  include_patterns: typing.List[str] = None,
  json_options: DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig.property.csvOptions">csv_options</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions">DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions</a></code> | csv_options block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig.property.excludePatterns">exclude_patterns</a></code> | <code>typing.List[str]</code> | Defines the data to exclude during discovery. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig.property.includePatterns">include_patterns</a></code> | <code>typing.List[str]</code> | Defines the data to include during discovery when only a subset of the data should be considered. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig.property.jsonOptions">json_options</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions">DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions</a></code> | json_options block. |

---

##### `csv_options`<sup>Optional</sup> <a name="csv_options" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig.property.csvOptions"></a>

```python
csv_options: DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions">DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#csv_options DataplexDatascan#csv_options}

---

##### `exclude_patterns`<sup>Optional</sup> <a name="exclude_patterns" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig.property.excludePatterns"></a>

```python
exclude_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Defines the data to exclude during discovery.

Provide a list of patterns that identify the data to exclude. For Cloud Storage bucket assets, these patterns are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these patterns are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#exclude_patterns DataplexDatascan#exclude_patterns}

---

##### `include_patterns`<sup>Optional</sup> <a name="include_patterns" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig.property.includePatterns"></a>

```python
include_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Defines the data to include during discovery when only a subset of the data should be considered.

Provide a list of patterns that identify the data to include. For Cloud Storage bucket assets, these patterns are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these patterns are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#include_patterns DataplexDatascan#include_patterns}

---

##### `json_options`<sup>Optional</sup> <a name="json_options" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig.property.jsonOptions"></a>

```python
json_options: DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions">DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions</a>

json_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#json_options DataplexDatascan#json_options}

---

### DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions <a name="DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions(
  delimiter: str = None,
  encoding: str = None,
  header_rows: typing.Union[int, float] = None,
  quote: str = None,
  type_inference_disabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions.property.delimiter">delimiter</a></code> | <code>str</code> | The delimiter that is used to separate values. The default is ',' (comma). |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions.property.encoding">encoding</a></code> | <code>str</code> | The character encoding of the data. The default is UTF-8. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions.property.headerRows">header_rows</a></code> | <code>typing.Union[int, float]</code> | The number of rows to interpret as header rows that should be skipped when reading data rows. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions.property.quote">quote</a></code> | <code>str</code> | The character used to quote column values. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions.property.typeInferenceDisabled">type_inference_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to disable the inference of data types for CSV data. If true, all columns are registered as strings. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

The delimiter that is used to separate values. The default is ',' (comma).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#delimiter DataplexDatascan#delimiter}

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#encoding DataplexDatascan#encoding}

---

##### `header_rows`<sup>Optional</sup> <a name="header_rows" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions.property.headerRows"></a>

```python
header_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of rows to interpret as header rows that should be skipped when reading data rows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#header_rows DataplexDatascan#header_rows}

---

##### `quote`<sup>Optional</sup> <a name="quote" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions.property.quote"></a>

```python
quote: str
```

- *Type:* str

The character used to quote column values.

Accepts '"' (double quotation mark) or ``` (single quotation mark). If unspecified, defaults to '"' (double quotation mark).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#quote DataplexDatascan#quote}

---

##### `type_inference_disabled`<sup>Optional</sup> <a name="type_inference_disabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions.property.typeInferenceDisabled"></a>

```python
type_inference_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to disable the inference of data types for CSV data. If true, all columns are registered as strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#type_inference_disabled DataplexDatascan#type_inference_disabled}

---

### DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions <a name="DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions(
  encoding: str = None,
  type_inference_disabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions.property.encoding">encoding</a></code> | <code>str</code> | The character encoding of the data. The default is UTF-8. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions.property.typeInferenceDisabled">type_inference_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to disable the inference of data types for JSON data. |

---

##### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#encoding DataplexDatascan#encoding}

---

##### `type_inference_disabled`<sup>Optional</sup> <a name="type_inference_disabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions.property.typeInferenceDisabled"></a>

```python
type_inference_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to disable the inference of data types for JSON data.

If true, all columns are registered as their primitive types (strings, number, or boolean).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#type_inference_disabled DataplexDatascan#type_inference_disabled}

---

### DataplexDatascanDataProfileSpec <a name="DataplexDatascanDataProfileSpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataProfileSpec(
  exclude_fields: DataplexDatascanDataProfileSpecExcludeFields = None,
  include_fields: DataplexDatascanDataProfileSpecIncludeFields = None,
  post_scan_actions: DataplexDatascanDataProfileSpecPostScanActions = None,
  row_filter: str = None,
  sampling_percent: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.property.excludeFields">exclude_fields</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFields">DataplexDatascanDataProfileSpecExcludeFields</a></code> | exclude_fields block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.property.includeFields">include_fields</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFields">DataplexDatascanDataProfileSpecIncludeFields</a></code> | include_fields block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.property.postScanActions">post_scan_actions</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActions">DataplexDatascanDataProfileSpecPostScanActions</a></code> | post_scan_actions block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.property.rowFilter">row_filter</a></code> | <code>str</code> | A filter applied to all rows in a single DataScan job. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.property.samplingPercent">sampling_percent</a></code> | <code>typing.Union[int, float]</code> | The percentage of the records to be selected from the dataset for DataScan. |

---

##### `exclude_fields`<sup>Optional</sup> <a name="exclude_fields" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.property.excludeFields"></a>

```python
exclude_fields: DataplexDatascanDataProfileSpecExcludeFields
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFields">DataplexDatascanDataProfileSpecExcludeFields</a>

exclude_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#exclude_fields DataplexDatascan#exclude_fields}

---

##### `include_fields`<sup>Optional</sup> <a name="include_fields" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.property.includeFields"></a>

```python
include_fields: DataplexDatascanDataProfileSpecIncludeFields
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFields">DataplexDatascanDataProfileSpecIncludeFields</a>

include_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#include_fields DataplexDatascan#include_fields}

---

##### `post_scan_actions`<sup>Optional</sup> <a name="post_scan_actions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.property.postScanActions"></a>

```python
post_scan_actions: DataplexDatascanDataProfileSpecPostScanActions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActions">DataplexDatascanDataProfileSpecPostScanActions</a>

post_scan_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#post_scan_actions DataplexDatascan#post_scan_actions}

---

##### `row_filter`<sup>Optional</sup> <a name="row_filter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.property.rowFilter"></a>

```python
row_filter: str
```

- *Type:* str

A filter applied to all rows in a single DataScan job.

The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#row_filter DataplexDatascan#row_filter}

---

##### `sampling_percent`<sup>Optional</sup> <a name="sampling_percent" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.property.samplingPercent"></a>

```python
sampling_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of the records to be selected from the dataset for DataScan.

Value can range between 0.0 and 100.0 with up to 3 significant decimal digits.
Sampling is not applied if 'sampling_percent' is not specified, 0 or 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#sampling_percent DataplexDatascan#sampling_percent}

---

### DataplexDatascanDataProfileSpecExcludeFields <a name="DataplexDatascanDataProfileSpecExcludeFields" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFields.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFields(
  field_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFields.property.fieldNames">field_names</a></code> | <code>typing.List[str]</code> | Expected input is a list of fully qualified names of fields as in the schema. |

---

##### `field_names`<sup>Optional</sup> <a name="field_names" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFields.property.fieldNames"></a>

```python
field_names: typing.List[str]
```

- *Type:* typing.List[str]

Expected input is a list of fully qualified names of fields as in the schema.

Only top-level field names for nested fields are supported.
For instance, if 'x' is of nested field type, listing 'x' is supported but 'x.y.z' is not supported. Here 'y' and 'y.z' are nested fields of 'x'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#field_names DataplexDatascan#field_names}

---

### DataplexDatascanDataProfileSpecIncludeFields <a name="DataplexDatascanDataProfileSpecIncludeFields" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFields.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFields(
  field_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFields.property.fieldNames">field_names</a></code> | <code>typing.List[str]</code> | Expected input is a list of fully qualified names of fields as in the schema. |

---

##### `field_names`<sup>Optional</sup> <a name="field_names" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFields.property.fieldNames"></a>

```python
field_names: typing.List[str]
```

- *Type:* typing.List[str]

Expected input is a list of fully qualified names of fields as in the schema.

Only top-level field names for nested fields are supported.
For instance, if 'x' is of nested field type, listing 'x' is supported but 'x.y.z' is not supported. Here 'y' and 'y.z' are nested fields of 'x'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#field_names DataplexDatascan#field_names}

---

### DataplexDatascanDataProfileSpecPostScanActions <a name="DataplexDatascanDataProfileSpecPostScanActions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActions(
  bigquery_export: DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActions.property.bigqueryExport">bigquery_export</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a></code> | bigquery_export block. |

---

##### `bigquery_export`<sup>Optional</sup> <a name="bigquery_export" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActions.property.bigqueryExport"></a>

```python
bigquery_export: DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a>

bigquery_export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#bigquery_export DataplexDatascan#bigquery_export}

---

### DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport <a name="DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport(
  results_table: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport.property.resultsTable">results_table</a></code> | <code>str</code> | The BigQuery table to export DataProfileScan results to. Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID. |

---

##### `results_table`<sup>Optional</sup> <a name="results_table" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport.property.resultsTable"></a>

```python
results_table: str
```

- *Type:* str

The BigQuery table to export DataProfileScan results to. Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#results_table DataplexDatascan#results_table}

---

### DataplexDatascanDataQualitySpec <a name="DataplexDatascanDataQualitySpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpec(
  catalog_publishing_enabled: typing.Union[bool, IResolvable] = None,
  post_scan_actions: DataplexDatascanDataQualitySpecPostScanActions = None,
  row_filter: str = None,
  rules: typing.Union[IResolvable, typing.List[DataplexDatascanDataQualitySpecRules]] = None,
  sampling_percent: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.catalogPublishingEnabled">catalog_publishing_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, the latest DataScan job result will be published to Dataplex Catalog. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.postScanActions">post_scan_actions</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions">DataplexDatascanDataQualitySpecPostScanActions</a></code> | post_scan_actions block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.rowFilter">row_filter</a></code> | <code>str</code> | A filter applied to all rows in a single DataScan job. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules">DataplexDatascanDataQualitySpecRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.samplingPercent">sampling_percent</a></code> | <code>typing.Union[int, float]</code> | The percentage of the records to be selected from the dataset for DataScan. |

---

##### `catalog_publishing_enabled`<sup>Optional</sup> <a name="catalog_publishing_enabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.catalogPublishingEnabled"></a>

```python
catalog_publishing_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, the latest DataScan job result will be published to Dataplex Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#catalog_publishing_enabled DataplexDatascan#catalog_publishing_enabled}

---

##### `post_scan_actions`<sup>Optional</sup> <a name="post_scan_actions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.postScanActions"></a>

```python
post_scan_actions: DataplexDatascanDataQualitySpecPostScanActions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions">DataplexDatascanDataQualitySpecPostScanActions</a>

post_scan_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#post_scan_actions DataplexDatascan#post_scan_actions}

---

##### `row_filter`<sup>Optional</sup> <a name="row_filter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.rowFilter"></a>

```python
row_filter: str
```

- *Type:* str

A filter applied to all rows in a single DataScan job.

The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#row_filter DataplexDatascan#row_filter}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[DataplexDatascanDataQualitySpecRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules">DataplexDatascanDataQualitySpecRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#rules DataplexDatascan#rules}

---

##### `sampling_percent`<sup>Optional</sup> <a name="sampling_percent" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.samplingPercent"></a>

```python
sampling_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of the records to be selected from the dataset for DataScan.

Value can range between 0.0 and 100.0 with up to 3 significant decimal digits.
Sampling is not applied if 'sampling_percent' is not specified, 0 or 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#sampling_percent DataplexDatascan#sampling_percent}

---

### DataplexDatascanDataQualitySpecPostScanActions <a name="DataplexDatascanDataQualitySpecPostScanActions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions(
  bigquery_export: DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport = None,
  notification_report: DataplexDatascanDataQualitySpecPostScanActionsNotificationReport = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions.property.bigqueryExport">bigquery_export</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a></code> | bigquery_export block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions.property.notificationReport">notification_report</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport">DataplexDatascanDataQualitySpecPostScanActionsNotificationReport</a></code> | notification_report block. |

---

##### `bigquery_export`<sup>Optional</sup> <a name="bigquery_export" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions.property.bigqueryExport"></a>

```python
bigquery_export: DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a>

bigquery_export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#bigquery_export DataplexDatascan#bigquery_export}

---

##### `notification_report`<sup>Optional</sup> <a name="notification_report" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions.property.notificationReport"></a>

```python
notification_report: DataplexDatascanDataQualitySpecPostScanActionsNotificationReport
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport">DataplexDatascanDataQualitySpecPostScanActionsNotificationReport</a>

notification_report block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#notification_report DataplexDatascan#notification_report}

---

### DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport <a name="DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport(
  results_table: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport.property.resultsTable">results_table</a></code> | <code>str</code> | The BigQuery table to export DataQualityScan results to. Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID. |

---

##### `results_table`<sup>Optional</sup> <a name="results_table" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport.property.resultsTable"></a>

```python
results_table: str
```

- *Type:* str

The BigQuery table to export DataQualityScan results to. Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#results_table DataplexDatascan#results_table}

---

### DataplexDatascanDataQualitySpecPostScanActionsNotificationReport <a name="DataplexDatascanDataQualitySpecPostScanActionsNotificationReport" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport(
  recipients: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients,
  job_end_trigger: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger = None,
  job_failure_trigger: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger = None,
  score_threshold_trigger: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport.property.recipients">recipients</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients</a></code> | recipients block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport.property.jobEndTrigger">job_end_trigger</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger</a></code> | job_end_trigger block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport.property.jobFailureTrigger">job_failure_trigger</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger</a></code> | job_failure_trigger block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport.property.scoreThresholdTrigger">score_threshold_trigger</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger</a></code> | score_threshold_trigger block. |

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport.property.recipients"></a>

```python
recipients: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients</a>

recipients block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#recipients DataplexDatascan#recipients}

---

##### `job_end_trigger`<sup>Optional</sup> <a name="job_end_trigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport.property.jobEndTrigger"></a>

```python
job_end_trigger: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger</a>

job_end_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#job_end_trigger DataplexDatascan#job_end_trigger}

---

##### `job_failure_trigger`<sup>Optional</sup> <a name="job_failure_trigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport.property.jobFailureTrigger"></a>

```python
job_failure_trigger: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger</a>

job_failure_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#job_failure_trigger DataplexDatascan#job_failure_trigger}

---

##### `score_threshold_trigger`<sup>Optional</sup> <a name="score_threshold_trigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport.property.scoreThresholdTrigger"></a>

```python
score_threshold_trigger: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger</a>

score_threshold_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#score_threshold_trigger DataplexDatascan#score_threshold_trigger}

---

### DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger <a name="DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger()
```


### DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger <a name="DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger()
```


### DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients <a name="DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients(
  emails: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients.property.emails">emails</a></code> | <code>typing.List[str]</code> | The email recipients who will receive the DataQualityScan results report. |

---

##### `emails`<sup>Optional</sup> <a name="emails" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients.property.emails"></a>

```python
emails: typing.List[str]
```

- *Type:* typing.List[str]

The email recipients who will receive the DataQualityScan results report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#emails DataplexDatascan#emails}

---

### DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger <a name="DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger(
  score_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger.property.scoreThreshold">score_threshold</a></code> | <code>typing.Union[int, float]</code> | The score range is in [0,100]. |

---

##### `score_threshold`<sup>Optional</sup> <a name="score_threshold" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger.property.scoreThreshold"></a>

```python
score_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The score range is in [0,100].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#score_threshold DataplexDatascan#score_threshold}

---

### DataplexDatascanDataQualitySpecRules <a name="DataplexDatascanDataQualitySpecRules" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecRules(
  dimension: str,
  column: str = None,
  description: str = None,
  ignore_null: typing.Union[bool, IResolvable] = None,
  name: str = None,
  non_null_expectation: DataplexDatascanDataQualitySpecRulesNonNullExpectation = None,
  range_expectation: DataplexDatascanDataQualitySpecRulesRangeExpectation = None,
  regex_expectation: DataplexDatascanDataQualitySpecRulesRegexExpectation = None,
  row_condition_expectation: DataplexDatascanDataQualitySpecRulesRowConditionExpectation = None,
  set_expectation: DataplexDatascanDataQualitySpecRulesSetExpectation = None,
  sql_assertion: DataplexDatascanDataQualitySpecRulesSqlAssertion = None,
  statistic_range_expectation: DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation = None,
  suspended: typing.Union[bool, IResolvable] = None,
  table_condition_expectation: DataplexDatascanDataQualitySpecRulesTableConditionExpectation = None,
  threshold: typing.Union[int, float] = None,
  uniqueness_expectation: DataplexDatascanDataQualitySpecRulesUniquenessExpectation = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.dimension">dimension</a></code> | <code>str</code> | The dimension name a rule belongs to. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.column">column</a></code> | <code>str</code> | The unnested column which this rule is evaluated against. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.description">description</a></code> | <code>str</code> | Description of the rule. The maximum length is 1,024 characters. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.ignoreNull">ignore_null</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Rows with null values will automatically fail a rule, unless ignoreNull is true. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.name">name</a></code> | <code>str</code> | A mutable name for the rule. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.nonNullExpectation">non_null_expectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation">DataplexDatascanDataQualitySpecRulesNonNullExpectation</a></code> | non_null_expectation block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.rangeExpectation">range_expectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation">DataplexDatascanDataQualitySpecRulesRangeExpectation</a></code> | range_expectation block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.regexExpectation">regex_expectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation">DataplexDatascanDataQualitySpecRulesRegexExpectation</a></code> | regex_expectation block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.rowConditionExpectation">row_condition_expectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation">DataplexDatascanDataQualitySpecRulesRowConditionExpectation</a></code> | row_condition_expectation block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.setExpectation">set_expectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation">DataplexDatascanDataQualitySpecRulesSetExpectation</a></code> | set_expectation block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.sqlAssertion">sql_assertion</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertion">DataplexDatascanDataQualitySpecRulesSqlAssertion</a></code> | sql_assertion block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.statisticRangeExpectation">statistic_range_expectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a></code> | statistic_range_expectation block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.suspended">suspended</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the Rule is active or suspended. Default = false. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.tableConditionExpectation">table_condition_expectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation">DataplexDatascanDataQualitySpecRulesTableConditionExpectation</a></code> | table_condition_expectation block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of [0.0, 1.0]. 0 indicates default value (i.e. 1.0). |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.uniquenessExpectation">uniqueness_expectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation">DataplexDatascanDataQualitySpecRulesUniquenessExpectation</a></code> | uniqueness_expectation block. |

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.dimension"></a>

```python
dimension: str
```

- *Type:* str

The dimension name a rule belongs to.

Custom dimension name is supported with all uppercase letters and maximum length of 30 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#dimension DataplexDatascan#dimension}

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.column"></a>

```python
column: str
```

- *Type:* str

The unnested column which this rule is evaluated against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#column DataplexDatascan#column}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the rule. The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#description DataplexDatascan#description}

---

##### `ignore_null`<sup>Optional</sup> <a name="ignore_null" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.ignoreNull"></a>

```python
ignore_null: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Rows with null values will automatically fail a rule, unless ignoreNull is true.

In that case, such null rows are trivially considered passing. Only applicable to ColumnMap rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#ignore_null DataplexDatascan#ignore_null}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.name"></a>

```python
name: str
```

- *Type:* str

A mutable name for the rule.

The name must contain only letters (a-z, A-Z), numbers (0-9), or hyphens (-).
The maximum length is 63 characters.
Must start with a letter.
Must end with a number or a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#name DataplexDatascan#name}

---

##### `non_null_expectation`<sup>Optional</sup> <a name="non_null_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.nonNullExpectation"></a>

```python
non_null_expectation: DataplexDatascanDataQualitySpecRulesNonNullExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation">DataplexDatascanDataQualitySpecRulesNonNullExpectation</a>

non_null_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#non_null_expectation DataplexDatascan#non_null_expectation}

---

##### `range_expectation`<sup>Optional</sup> <a name="range_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.rangeExpectation"></a>

```python
range_expectation: DataplexDatascanDataQualitySpecRulesRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation">DataplexDatascanDataQualitySpecRulesRangeExpectation</a>

range_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#range_expectation DataplexDatascan#range_expectation}

---

##### `regex_expectation`<sup>Optional</sup> <a name="regex_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.regexExpectation"></a>

```python
regex_expectation: DataplexDatascanDataQualitySpecRulesRegexExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation">DataplexDatascanDataQualitySpecRulesRegexExpectation</a>

regex_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#regex_expectation DataplexDatascan#regex_expectation}

---

##### `row_condition_expectation`<sup>Optional</sup> <a name="row_condition_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.rowConditionExpectation"></a>

```python
row_condition_expectation: DataplexDatascanDataQualitySpecRulesRowConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation">DataplexDatascanDataQualitySpecRulesRowConditionExpectation</a>

row_condition_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#row_condition_expectation DataplexDatascan#row_condition_expectation}

---

##### `set_expectation`<sup>Optional</sup> <a name="set_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.setExpectation"></a>

```python
set_expectation: DataplexDatascanDataQualitySpecRulesSetExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation">DataplexDatascanDataQualitySpecRulesSetExpectation</a>

set_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#set_expectation DataplexDatascan#set_expectation}

---

##### `sql_assertion`<sup>Optional</sup> <a name="sql_assertion" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.sqlAssertion"></a>

```python
sql_assertion: DataplexDatascanDataQualitySpecRulesSqlAssertion
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertion">DataplexDatascanDataQualitySpecRulesSqlAssertion</a>

sql_assertion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#sql_assertion DataplexDatascan#sql_assertion}

---

##### `statistic_range_expectation`<sup>Optional</sup> <a name="statistic_range_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.statisticRangeExpectation"></a>

```python
statistic_range_expectation: DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a>

statistic_range_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#statistic_range_expectation DataplexDatascan#statistic_range_expectation}

---

##### `suspended`<sup>Optional</sup> <a name="suspended" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.suspended"></a>

```python
suspended: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the Rule is active or suspended. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#suspended DataplexDatascan#suspended}

---

##### `table_condition_expectation`<sup>Optional</sup> <a name="table_condition_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.tableConditionExpectation"></a>

```python
table_condition_expectation: DataplexDatascanDataQualitySpecRulesTableConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation">DataplexDatascanDataQualitySpecRulesTableConditionExpectation</a>

table_condition_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#table_condition_expectation DataplexDatascan#table_condition_expectation}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of [0.0, 1.0]. 0 indicates default value (i.e. 1.0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#threshold DataplexDatascan#threshold}

---

##### `uniqueness_expectation`<sup>Optional</sup> <a name="uniqueness_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.uniquenessExpectation"></a>

```python
uniqueness_expectation: DataplexDatascanDataQualitySpecRulesUniquenessExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation">DataplexDatascanDataQualitySpecRulesUniquenessExpectation</a>

uniqueness_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#uniqueness_expectation DataplexDatascan#uniqueness_expectation}

---

### DataplexDatascanDataQualitySpecRulesNonNullExpectation <a name="DataplexDatascanDataQualitySpecRulesNonNullExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation()
```


### DataplexDatascanDataQualitySpecRulesRangeExpectation <a name="DataplexDatascanDataQualitySpecRulesRangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation(
  max_value: str = None,
  min_value: str = None,
  strict_max_enabled: typing.Union[bool, IResolvable] = None,
  strict_min_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.property.maxValue">max_value</a></code> | <code>str</code> | The maximum column value allowed for a row to pass this validation. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.property.minValue">min_value</a></code> | <code>str</code> | The minimum column value allowed for a row to pass this validation. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.property.strictMaxEnabled">strict_max_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.property.strictMinEnabled">strict_min_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed. |

---

##### `max_value`<sup>Optional</sup> <a name="max_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.property.maxValue"></a>

```python
max_value: str
```

- *Type:* str

The maximum column value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#max_value DataplexDatascan#max_value}

---

##### `min_value`<sup>Optional</sup> <a name="min_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.property.minValue"></a>

```python
min_value: str
```

- *Type:* str

The minimum column value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#min_value DataplexDatascan#min_value}

---

##### `strict_max_enabled`<sup>Optional</sup> <a name="strict_max_enabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.property.strictMaxEnabled"></a>

```python
strict_max_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed.

Only relevant if a maxValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#strict_max_enabled DataplexDatascan#strict_max_enabled}

---

##### `strict_min_enabled`<sup>Optional</sup> <a name="strict_min_enabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.property.strictMinEnabled"></a>

```python
strict_min_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed.

Only relevant if a minValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#strict_min_enabled DataplexDatascan#strict_min_enabled}

---

### DataplexDatascanDataQualitySpecRulesRegexExpectation <a name="DataplexDatascanDataQualitySpecRulesRegexExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation(
  regex: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation.property.regex">regex</a></code> | <code>str</code> | A regular expression the column value is expected to match. |

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation.property.regex"></a>

```python
regex: str
```

- *Type:* str

A regular expression the column value is expected to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#regex DataplexDatascan#regex}

---

### DataplexDatascanDataQualitySpecRulesRowConditionExpectation <a name="DataplexDatascanDataQualitySpecRulesRowConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation(
  sql_expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation.property.sqlExpression">sql_expression</a></code> | <code>str</code> | The SQL expression. |

---

##### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation.property.sqlExpression"></a>

```python
sql_expression: str
```

- *Type:* str

The SQL expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#sql_expression DataplexDatascan#sql_expression}

---

### DataplexDatascanDataQualitySpecRulesSetExpectation <a name="DataplexDatascanDataQualitySpecRulesSetExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation(
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation.property.values">values</a></code> | <code>typing.List[str]</code> | Expected values for the column value. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Expected values for the column value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#values DataplexDatascan#values}

---

### DataplexDatascanDataQualitySpecRulesSqlAssertion <a name="DataplexDatascanDataQualitySpecRulesSqlAssertion" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertion.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertion(
  sql_statement: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertion.property.sqlStatement">sql_statement</a></code> | <code>str</code> | The SQL statement. |

---

##### `sql_statement`<sup>Required</sup> <a name="sql_statement" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertion.property.sqlStatement"></a>

```python
sql_statement: str
```

- *Type:* str

The SQL statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#sql_statement DataplexDatascan#sql_statement}

---

### DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation <a name="DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation(
  statistic: str,
  max_value: str = None,
  min_value: str = None,
  strict_max_enabled: typing.Union[bool, IResolvable] = None,
  strict_min_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.statistic">statistic</a></code> | <code>str</code> | column statistics. Possible values: ["STATISTIC_UNDEFINED", "MEAN", "MIN", "MAX"]. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.maxValue">max_value</a></code> | <code>str</code> | The maximum column statistic value allowed for a row to pass this validation. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.minValue">min_value</a></code> | <code>str</code> | The minimum column statistic value allowed for a row to pass this validation. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.strictMaxEnabled">strict_max_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.strictMinEnabled">strict_min_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed. |

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

column statistics. Possible values: ["STATISTIC_UNDEFINED", "MEAN", "MIN", "MAX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#statistic DataplexDatascan#statistic}

---

##### `max_value`<sup>Optional</sup> <a name="max_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.maxValue"></a>

```python
max_value: str
```

- *Type:* str

The maximum column statistic value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#max_value DataplexDatascan#max_value}

---

##### `min_value`<sup>Optional</sup> <a name="min_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.minValue"></a>

```python
min_value: str
```

- *Type:* str

The minimum column statistic value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#min_value DataplexDatascan#min_value}

---

##### `strict_max_enabled`<sup>Optional</sup> <a name="strict_max_enabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.strictMaxEnabled"></a>

```python
strict_max_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed.

Only relevant if a maxValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#strict_max_enabled DataplexDatascan#strict_max_enabled}

---

##### `strict_min_enabled`<sup>Optional</sup> <a name="strict_min_enabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.strictMinEnabled"></a>

```python
strict_min_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed.

Only relevant if a minValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#strict_min_enabled DataplexDatascan#strict_min_enabled}

---

### DataplexDatascanDataQualitySpecRulesTableConditionExpectation <a name="DataplexDatascanDataQualitySpecRulesTableConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation(
  sql_expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation.property.sqlExpression">sql_expression</a></code> | <code>str</code> | The SQL expression. |

---

##### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation.property.sqlExpression"></a>

```python
sql_expression: str
```

- *Type:* str

The SQL expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#sql_expression DataplexDatascan#sql_expression}

---

### DataplexDatascanDataQualitySpecRulesUniquenessExpectation <a name="DataplexDatascanDataQualitySpecRulesUniquenessExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation()
```


### DataplexDatascanExecutionSpec <a name="DataplexDatascanExecutionSpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanExecutionSpec(
  trigger: DataplexDatascanExecutionSpecTrigger,
  field: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger">DataplexDatascanExecutionSpecTrigger</a></code> | trigger block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec.property.field">field</a></code> | <code>str</code> | The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time. |

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec.property.trigger"></a>

```python
trigger: DataplexDatascanExecutionSpecTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger">DataplexDatascanExecutionSpecTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#trigger DataplexDatascan#trigger}

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec.property.field"></a>

```python
field: str
```

- *Type:* str

The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time.

If not specified, a data scan will run for all data in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#field DataplexDatascan#field}

---

### DataplexDatascanExecutionSpecTrigger <a name="DataplexDatascanExecutionSpecTrigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanExecutionSpecTrigger(
  on_demand: DataplexDatascanExecutionSpecTriggerOnDemand = None,
  schedule: DataplexDatascanExecutionSpecTriggerSchedule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger.property.onDemand">on_demand</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand">DataplexDatascanExecutionSpecTriggerOnDemand</a></code> | on_demand block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule">DataplexDatascanExecutionSpecTriggerSchedule</a></code> | schedule block. |

---

##### `on_demand`<sup>Optional</sup> <a name="on_demand" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger.property.onDemand"></a>

```python
on_demand: DataplexDatascanExecutionSpecTriggerOnDemand
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand">DataplexDatascanExecutionSpecTriggerOnDemand</a>

on_demand block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#on_demand DataplexDatascan#on_demand}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger.property.schedule"></a>

```python
schedule: DataplexDatascanExecutionSpecTriggerSchedule
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule">DataplexDatascanExecutionSpecTriggerSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#schedule DataplexDatascan#schedule}

---

### DataplexDatascanExecutionSpecTriggerOnDemand <a name="DataplexDatascanExecutionSpecTriggerOnDemand" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand()
```


### DataplexDatascanExecutionSpecTriggerSchedule <a name="DataplexDatascanExecutionSpecTriggerSchedule" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule(
  cron: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule.property.cron">cron</a></code> | <code>str</code> | Cron schedule for running scans periodically. This field is required for Schedule scans. |

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule.property.cron"></a>

```python
cron: str
```

- *Type:* str

Cron schedule for running scans periodically. This field is required for Schedule scans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#cron DataplexDatascan#cron}

---

### DataplexDatascanExecutionStatus <a name="DataplexDatascanExecutionStatus" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanExecutionStatus()
```


### DataplexDatascanTimeouts <a name="DataplexDatascanTimeouts" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#create DataplexDatascan#create}. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#delete DataplexDatascan#delete}. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#update DataplexDatascan#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#create DataplexDatascan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#delete DataplexDatascan#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#update DataplexDatascan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference <a name="DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.resetConnection">reset_connection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.resetTableType">reset_table_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection` <a name="reset_connection" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.resetConnection"></a>

```python
def reset_connection() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_table_type` <a name="reset_table_type" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.resetTableType"></a>

```python
def reset_table_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.connectionInput">connection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.tableTypeInput">table_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.connection">connection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.tableType">table_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig">DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_input`<sup>Optional</sup> <a name="connection_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.connectionInput"></a>

```python
connection_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `table_type_input`<sup>Optional</sup> <a name="table_type_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.tableTypeInput"></a>

```python
table_type_input: str
```

- *Type:* str

---

##### `connection`<sup>Required</sup> <a name="connection" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.connection"></a>

```python
connection: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `table_type`<sup>Required</sup> <a name="table_type" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.tableType"></a>

```python
table_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig">DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig</a>

---


### DataplexDatascanDataDiscoverySpecOutputReference <a name="DataplexDatascanDataDiscoverySpecOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.putBigqueryPublishingConfig">put_bigquery_publishing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.putStorageConfig">put_storage_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.resetBigqueryPublishingConfig">reset_bigquery_publishing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.resetStorageConfig">reset_storage_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bigquery_publishing_config` <a name="put_bigquery_publishing_config" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.putBigqueryPublishingConfig"></a>

```python
def put_bigquery_publishing_config(
  connection: str = None,
  location: str = None,
  project: str = None,
  table_type: str = None
) -> None
```

###### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.putBigqueryPublishingConfig.parameter.connection"></a>

- *Type:* str

The BigQuery connection used to create BigLake tables. Must be in the form 'projects/{projectId}/locations/{locationId}/connections/{connection_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#connection DataplexDatascan#connection}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.putBigqueryPublishingConfig.parameter.location"></a>

- *Type:* str

The location of the BigQuery dataset to publish BigLake external or non-BigLake external tables to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#location DataplexDatascan#location}

---

###### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.putBigqueryPublishingConfig.parameter.project"></a>

- *Type:* str

The project of the BigQuery dataset to publish BigLake external or non-BigLake external tables to.

If not specified, the project of the Cloud Storage bucket will be used. The format is "projects/{project_id_or_number}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#project DataplexDatascan#project}

---

###### `table_type`<sup>Optional</sup> <a name="table_type" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.putBigqueryPublishingConfig.parameter.tableType"></a>

- *Type:* str

Determines whether to publish discovered tables as BigLake external tables or non-BigLake external tables. Possible values: ["TABLE_TYPE_UNSPECIFIED", "EXTERNAL", "BIGLAKE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#table_type DataplexDatascan#table_type}

---

##### `put_storage_config` <a name="put_storage_config" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.putStorageConfig"></a>

```python
def put_storage_config(
  csv_options: DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions = None,
  exclude_patterns: typing.List[str] = None,
  include_patterns: typing.List[str] = None,
  json_options: DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions = None
) -> None
```

###### `csv_options`<sup>Optional</sup> <a name="csv_options" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.putStorageConfig.parameter.csvOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions">DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#csv_options DataplexDatascan#csv_options}

---

###### `exclude_patterns`<sup>Optional</sup> <a name="exclude_patterns" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.putStorageConfig.parameter.excludePatterns"></a>

- *Type:* typing.List[str]

Defines the data to exclude during discovery.

Provide a list of patterns that identify the data to exclude. For Cloud Storage bucket assets, these patterns are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these patterns are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#exclude_patterns DataplexDatascan#exclude_patterns}

---

###### `include_patterns`<sup>Optional</sup> <a name="include_patterns" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.putStorageConfig.parameter.includePatterns"></a>

- *Type:* typing.List[str]

Defines the data to include during discovery when only a subset of the data should be considered.

Provide a list of patterns that identify the data to include. For Cloud Storage bucket assets, these patterns are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these patterns are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#include_patterns DataplexDatascan#include_patterns}

---

###### `json_options`<sup>Optional</sup> <a name="json_options" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.putStorageConfig.parameter.jsonOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions">DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions</a>

json_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#json_options DataplexDatascan#json_options}

---

##### `reset_bigquery_publishing_config` <a name="reset_bigquery_publishing_config" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.resetBigqueryPublishingConfig"></a>

```python
def reset_bigquery_publishing_config() -> None
```

##### `reset_storage_config` <a name="reset_storage_config" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.resetStorageConfig"></a>

```python
def reset_storage_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.bigqueryPublishingConfig">bigquery_publishing_config</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference">DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.storageConfig">storage_config</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference">DataplexDatascanDataDiscoverySpecStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.bigqueryPublishingConfigInput">bigquery_publishing_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig">DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.storageConfigInput">storage_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig">DataplexDatascanDataDiscoverySpecStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec">DataplexDatascanDataDiscoverySpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bigquery_publishing_config`<sup>Required</sup> <a name="bigquery_publishing_config" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.bigqueryPublishingConfig"></a>

```python
bigquery_publishing_config: DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference">DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference</a>

---

##### `storage_config`<sup>Required</sup> <a name="storage_config" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.storageConfig"></a>

```python
storage_config: DataplexDatascanDataDiscoverySpecStorageConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference">DataplexDatascanDataDiscoverySpecStorageConfigOutputReference</a>

---

##### `bigquery_publishing_config_input`<sup>Optional</sup> <a name="bigquery_publishing_config_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.bigqueryPublishingConfigInput"></a>

```python
bigquery_publishing_config_input: DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig">DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig</a>

---

##### `storage_config_input`<sup>Optional</sup> <a name="storage_config_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.storageConfigInput"></a>

```python
storage_config_input: DataplexDatascanDataDiscoverySpecStorageConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig">DataplexDatascanDataDiscoverySpecStorageConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataDiscoverySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec">DataplexDatascanDataDiscoverySpec</a>

---


### DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference <a name="DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resetDelimiter">reset_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resetHeaderRows">reset_header_rows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resetQuote">reset_quote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resetTypeInferenceDisabled">reset_type_inference_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delimiter` <a name="reset_delimiter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resetDelimiter"></a>

```python
def reset_delimiter() -> None
```

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_header_rows` <a name="reset_header_rows" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resetHeaderRows"></a>

```python
def reset_header_rows() -> None
```

##### `reset_quote` <a name="reset_quote" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resetQuote"></a>

```python
def reset_quote() -> None
```

##### `reset_type_inference_disabled` <a name="reset_type_inference_disabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resetTypeInferenceDisabled"></a>

```python
def reset_type_inference_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.delimiterInput">delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.headerRowsInput">header_rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.quoteInput">quote_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.typeInferenceDisabledInput">type_inference_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.delimiter">delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.headerRows">header_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.quote">quote</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.typeInferenceDisabled">type_inference_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions">DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delimiter_input`<sup>Optional</sup> <a name="delimiter_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.delimiterInput"></a>

```python
delimiter_input: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `header_rows_input`<sup>Optional</sup> <a name="header_rows_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.headerRowsInput"></a>

```python
header_rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `quote_input`<sup>Optional</sup> <a name="quote_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.quoteInput"></a>

```python
quote_input: str
```

- *Type:* str

---

##### `type_inference_disabled_input`<sup>Optional</sup> <a name="type_inference_disabled_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.typeInferenceDisabledInput"></a>

```python
type_inference_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `header_rows`<sup>Required</sup> <a name="header_rows" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.headerRows"></a>

```python
header_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `quote`<sup>Required</sup> <a name="quote" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.quote"></a>

```python
quote: str
```

- *Type:* str

---

##### `type_inference_disabled`<sup>Required</sup> <a name="type_inference_disabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.typeInferenceDisabled"></a>

```python
type_inference_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions">DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions</a>

---


### DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference <a name="DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.resetEncoding">reset_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.resetTypeInferenceDisabled">reset_type_inference_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encoding` <a name="reset_encoding" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.resetEncoding"></a>

```python
def reset_encoding() -> None
```

##### `reset_type_inference_disabled` <a name="reset_type_inference_disabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.resetTypeInferenceDisabled"></a>

```python
def reset_type_inference_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.encodingInput">encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.typeInferenceDisabledInput">type_inference_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.encoding">encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.typeInferenceDisabled">type_inference_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions">DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encoding_input`<sup>Optional</sup> <a name="encoding_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.encodingInput"></a>

```python
encoding_input: str
```

- *Type:* str

---

##### `type_inference_disabled_input`<sup>Optional</sup> <a name="type_inference_disabled_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.typeInferenceDisabledInput"></a>

```python
type_inference_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encoding`<sup>Required</sup> <a name="encoding" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.encoding"></a>

```python
encoding: str
```

- *Type:* str

---

##### `type_inference_disabled`<sup>Required</sup> <a name="type_inference_disabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.typeInferenceDisabled"></a>

```python
type_inference_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions">DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions</a>

---


### DataplexDatascanDataDiscoverySpecStorageConfigOutputReference <a name="DataplexDatascanDataDiscoverySpecStorageConfigOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.putCsvOptions">put_csv_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.putJsonOptions">put_json_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.resetCsvOptions">reset_csv_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.resetExcludePatterns">reset_exclude_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.resetIncludePatterns">reset_include_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.resetJsonOptions">reset_json_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_csv_options` <a name="put_csv_options" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.putCsvOptions"></a>

```python
def put_csv_options(
  delimiter: str = None,
  encoding: str = None,
  header_rows: typing.Union[int, float] = None,
  quote: str = None,
  type_inference_disabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.putCsvOptions.parameter.delimiter"></a>

- *Type:* str

The delimiter that is used to separate values. The default is ',' (comma).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#delimiter DataplexDatascan#delimiter}

---

###### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.putCsvOptions.parameter.encoding"></a>

- *Type:* str

The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#encoding DataplexDatascan#encoding}

---

###### `header_rows`<sup>Optional</sup> <a name="header_rows" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.putCsvOptions.parameter.headerRows"></a>

- *Type:* typing.Union[int, float]

The number of rows to interpret as header rows that should be skipped when reading data rows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#header_rows DataplexDatascan#header_rows}

---

###### `quote`<sup>Optional</sup> <a name="quote" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.putCsvOptions.parameter.quote"></a>

- *Type:* str

The character used to quote column values.

Accepts '"' (double quotation mark) or ``` (single quotation mark). If unspecified, defaults to '"' (double quotation mark).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#quote DataplexDatascan#quote}

---

###### `type_inference_disabled`<sup>Optional</sup> <a name="type_inference_disabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.putCsvOptions.parameter.typeInferenceDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to disable the inference of data types for CSV data. If true, all columns are registered as strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#type_inference_disabled DataplexDatascan#type_inference_disabled}

---

##### `put_json_options` <a name="put_json_options" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.putJsonOptions"></a>

```python
def put_json_options(
  encoding: str = None,
  type_inference_disabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `encoding`<sup>Optional</sup> <a name="encoding" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.putJsonOptions.parameter.encoding"></a>

- *Type:* str

The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#encoding DataplexDatascan#encoding}

---

###### `type_inference_disabled`<sup>Optional</sup> <a name="type_inference_disabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.putJsonOptions.parameter.typeInferenceDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to disable the inference of data types for JSON data.

If true, all columns are registered as their primitive types (strings, number, or boolean).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#type_inference_disabled DataplexDatascan#type_inference_disabled}

---

##### `reset_csv_options` <a name="reset_csv_options" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.resetCsvOptions"></a>

```python
def reset_csv_options() -> None
```

##### `reset_exclude_patterns` <a name="reset_exclude_patterns" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.resetExcludePatterns"></a>

```python
def reset_exclude_patterns() -> None
```

##### `reset_include_patterns` <a name="reset_include_patterns" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.resetIncludePatterns"></a>

```python
def reset_include_patterns() -> None
```

##### `reset_json_options` <a name="reset_json_options" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.resetJsonOptions"></a>

```python
def reset_json_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.csvOptions">csv_options</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference">DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.jsonOptions">json_options</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference">DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.csvOptionsInput">csv_options_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions">DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.excludePatternsInput">exclude_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.includePatternsInput">include_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.jsonOptionsInput">json_options_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions">DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.excludePatterns">exclude_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.includePatterns">include_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig">DataplexDatascanDataDiscoverySpecStorageConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `csv_options`<sup>Required</sup> <a name="csv_options" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.csvOptions"></a>

```python
csv_options: DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference">DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference</a>

---

##### `json_options`<sup>Required</sup> <a name="json_options" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.jsonOptions"></a>

```python
json_options: DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference">DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference</a>

---

##### `csv_options_input`<sup>Optional</sup> <a name="csv_options_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.csvOptionsInput"></a>

```python
csv_options_input: DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions">DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions</a>

---

##### `exclude_patterns_input`<sup>Optional</sup> <a name="exclude_patterns_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.excludePatternsInput"></a>

```python
exclude_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_patterns_input`<sup>Optional</sup> <a name="include_patterns_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.includePatternsInput"></a>

```python
include_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `json_options_input`<sup>Optional</sup> <a name="json_options_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.jsonOptionsInput"></a>

```python
json_options_input: DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions">DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions</a>

---

##### `exclude_patterns`<sup>Required</sup> <a name="exclude_patterns" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.excludePatterns"></a>

```python
exclude_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_patterns`<sup>Required</sup> <a name="include_patterns" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.includePatterns"></a>

```python
include_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataDiscoverySpecStorageConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig">DataplexDatascanDataDiscoverySpecStorageConfig</a>

---


### DataplexDatascanDataOutputReference <a name="DataplexDatascanDataOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.resetEntity">reset_entity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.resetResource">reset_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_entity` <a name="reset_entity" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.resetEntity"></a>

```python
def reset_entity() -> None
```

##### `reset_resource` <a name="reset_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.resetResource"></a>

```python
def reset_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.entityInput">entity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.entity">entity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData">DataplexDatascanData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_input`<sup>Optional</sup> <a name="entity_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.entityInput"></a>

```python
entity_input: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `entity`<sup>Required</sup> <a name="entity" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.entity"></a>

```python
entity: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanData
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData">DataplexDatascanData</a>

---


### DataplexDatascanDataProfileSpecExcludeFieldsOutputReference <a name="DataplexDatascanDataProfileSpecExcludeFieldsOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resetFieldNames">reset_field_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field_names` <a name="reset_field_names" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resetFieldNames"></a>

```python
def reset_field_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fieldNamesInput">field_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fieldNames">field_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFields">DataplexDatascanDataProfileSpecExcludeFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_names_input`<sup>Optional</sup> <a name="field_names_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fieldNamesInput"></a>

```python
field_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field_names`<sup>Required</sup> <a name="field_names" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fieldNames"></a>

```python
field_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataProfileSpecExcludeFields
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFields">DataplexDatascanDataProfileSpecExcludeFields</a>

---


### DataplexDatascanDataProfileSpecIncludeFieldsOutputReference <a name="DataplexDatascanDataProfileSpecIncludeFieldsOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resetFieldNames">reset_field_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_field_names` <a name="reset_field_names" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resetFieldNames"></a>

```python
def reset_field_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fieldNamesInput">field_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fieldNames">field_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFields">DataplexDatascanDataProfileSpecIncludeFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_names_input`<sup>Optional</sup> <a name="field_names_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fieldNamesInput"></a>

```python
field_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field_names`<sup>Required</sup> <a name="field_names" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fieldNames"></a>

```python
field_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataProfileSpecIncludeFields
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFields">DataplexDatascanDataProfileSpecIncludeFields</a>

---


### DataplexDatascanDataProfileSpecOutputReference <a name="DataplexDatascanDataProfileSpecOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.putExcludeFields">put_exclude_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.putIncludeFields">put_include_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.putPostScanActions">put_post_scan_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resetExcludeFields">reset_exclude_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resetIncludeFields">reset_include_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resetPostScanActions">reset_post_scan_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resetRowFilter">reset_row_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resetSamplingPercent">reset_sampling_percent</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_exclude_fields` <a name="put_exclude_fields" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.putExcludeFields"></a>

```python
def put_exclude_fields(
  field_names: typing.List[str] = None
) -> None
```

###### `field_names`<sup>Optional</sup> <a name="field_names" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.putExcludeFields.parameter.fieldNames"></a>

- *Type:* typing.List[str]

Expected input is a list of fully qualified names of fields as in the schema.

Only top-level field names for nested fields are supported.
For instance, if 'x' is of nested field type, listing 'x' is supported but 'x.y.z' is not supported. Here 'y' and 'y.z' are nested fields of 'x'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#field_names DataplexDatascan#field_names}

---

##### `put_include_fields` <a name="put_include_fields" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.putIncludeFields"></a>

```python
def put_include_fields(
  field_names: typing.List[str] = None
) -> None
```

###### `field_names`<sup>Optional</sup> <a name="field_names" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.putIncludeFields.parameter.fieldNames"></a>

- *Type:* typing.List[str]

Expected input is a list of fully qualified names of fields as in the schema.

Only top-level field names for nested fields are supported.
For instance, if 'x' is of nested field type, listing 'x' is supported but 'x.y.z' is not supported. Here 'y' and 'y.z' are nested fields of 'x'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#field_names DataplexDatascan#field_names}

---

##### `put_post_scan_actions` <a name="put_post_scan_actions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.putPostScanActions"></a>

```python
def put_post_scan_actions(
  bigquery_export: DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport = None
) -> None
```

###### `bigquery_export`<sup>Optional</sup> <a name="bigquery_export" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.putPostScanActions.parameter.bigqueryExport"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a>

bigquery_export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#bigquery_export DataplexDatascan#bigquery_export}

---

##### `reset_exclude_fields` <a name="reset_exclude_fields" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resetExcludeFields"></a>

```python
def reset_exclude_fields() -> None
```

##### `reset_include_fields` <a name="reset_include_fields" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resetIncludeFields"></a>

```python
def reset_include_fields() -> None
```

##### `reset_post_scan_actions` <a name="reset_post_scan_actions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resetPostScanActions"></a>

```python
def reset_post_scan_actions() -> None
```

##### `reset_row_filter` <a name="reset_row_filter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resetRowFilter"></a>

```python
def reset_row_filter() -> None
```

##### `reset_sampling_percent` <a name="reset_sampling_percent" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resetSamplingPercent"></a>

```python
def reset_sampling_percent() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.excludeFields">exclude_fields</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference">DataplexDatascanDataProfileSpecExcludeFieldsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.includeFields">include_fields</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference">DataplexDatascanDataProfileSpecIncludeFieldsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.postScanActions">post_scan_actions</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference">DataplexDatascanDataProfileSpecPostScanActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.excludeFieldsInput">exclude_fields_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFields">DataplexDatascanDataProfileSpecExcludeFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.includeFieldsInput">include_fields_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFields">DataplexDatascanDataProfileSpecIncludeFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.postScanActionsInput">post_scan_actions_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActions">DataplexDatascanDataProfileSpecPostScanActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.rowFilterInput">row_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.samplingPercentInput">sampling_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.rowFilter">row_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.samplingPercent">sampling_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec">DataplexDatascanDataProfileSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_fields`<sup>Required</sup> <a name="exclude_fields" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.excludeFields"></a>

```python
exclude_fields: DataplexDatascanDataProfileSpecExcludeFieldsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference">DataplexDatascanDataProfileSpecExcludeFieldsOutputReference</a>

---

##### `include_fields`<sup>Required</sup> <a name="include_fields" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.includeFields"></a>

```python
include_fields: DataplexDatascanDataProfileSpecIncludeFieldsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference">DataplexDatascanDataProfileSpecIncludeFieldsOutputReference</a>

---

##### `post_scan_actions`<sup>Required</sup> <a name="post_scan_actions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.postScanActions"></a>

```python
post_scan_actions: DataplexDatascanDataProfileSpecPostScanActionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference">DataplexDatascanDataProfileSpecPostScanActionsOutputReference</a>

---

##### `exclude_fields_input`<sup>Optional</sup> <a name="exclude_fields_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.excludeFieldsInput"></a>

```python
exclude_fields_input: DataplexDatascanDataProfileSpecExcludeFields
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFields">DataplexDatascanDataProfileSpecExcludeFields</a>

---

##### `include_fields_input`<sup>Optional</sup> <a name="include_fields_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.includeFieldsInput"></a>

```python
include_fields_input: DataplexDatascanDataProfileSpecIncludeFields
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFields">DataplexDatascanDataProfileSpecIncludeFields</a>

---

##### `post_scan_actions_input`<sup>Optional</sup> <a name="post_scan_actions_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.postScanActionsInput"></a>

```python
post_scan_actions_input: DataplexDatascanDataProfileSpecPostScanActions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActions">DataplexDatascanDataProfileSpecPostScanActions</a>

---

##### `row_filter_input`<sup>Optional</sup> <a name="row_filter_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.rowFilterInput"></a>

```python
row_filter_input: str
```

- *Type:* str

---

##### `sampling_percent_input`<sup>Optional</sup> <a name="sampling_percent_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.samplingPercentInput"></a>

```python
sampling_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `row_filter`<sup>Required</sup> <a name="row_filter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.rowFilter"></a>

```python
row_filter: str
```

- *Type:* str

---

##### `sampling_percent`<sup>Required</sup> <a name="sampling_percent" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.samplingPercent"></a>

```python
sampling_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataProfileSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec">DataplexDatascanDataProfileSpec</a>

---


### DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference <a name="DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resetResultsTable">reset_results_table</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_results_table` <a name="reset_results_table" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resetResultsTable"></a>

```python
def reset_results_table() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.resultsTableInput">results_table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.resultsTable">results_table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `results_table_input`<sup>Optional</sup> <a name="results_table_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.resultsTableInput"></a>

```python
results_table_input: str
```

- *Type:* str

---

##### `results_table`<sup>Required</sup> <a name="results_table" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.resultsTable"></a>

```python
results_table: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a>

---


### DataplexDatascanDataProfileSpecPostScanActionsOutputReference <a name="DataplexDatascanDataProfileSpecPostScanActionsOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.putBigqueryExport">put_bigquery_export</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.resetBigqueryExport">reset_bigquery_export</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bigquery_export` <a name="put_bigquery_export" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.putBigqueryExport"></a>

```python
def put_bigquery_export(
  results_table: str = None
) -> None
```

###### `results_table`<sup>Optional</sup> <a name="results_table" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.putBigqueryExport.parameter.resultsTable"></a>

- *Type:* str

The BigQuery table to export DataProfileScan results to. Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#results_table DataplexDatascan#results_table}

---

##### `reset_bigquery_export` <a name="reset_bigquery_export" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.resetBigqueryExport"></a>

```python
def reset_bigquery_export() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.bigqueryExport">bigquery_export</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference">DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.bigqueryExportInput">bigquery_export_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActions">DataplexDatascanDataProfileSpecPostScanActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bigquery_export`<sup>Required</sup> <a name="bigquery_export" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.bigqueryExport"></a>

```python
bigquery_export: DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference">DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference</a>

---

##### `bigquery_export_input`<sup>Optional</sup> <a name="bigquery_export_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.bigqueryExportInput"></a>

```python
bigquery_export_input: DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataProfileSpecPostScanActions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActions">DataplexDatascanDataProfileSpecPostScanActions</a>

---


### DataplexDatascanDataQualitySpecOutputReference <a name="DataplexDatascanDataQualitySpecOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.putPostScanActions">put_post_scan_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetCatalogPublishingEnabled">reset_catalog_publishing_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetPostScanActions">reset_post_scan_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetRowFilter">reset_row_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetRules">reset_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetSamplingPercent">reset_sampling_percent</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_post_scan_actions` <a name="put_post_scan_actions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.putPostScanActions"></a>

```python
def put_post_scan_actions(
  bigquery_export: DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport = None,
  notification_report: DataplexDatascanDataQualitySpecPostScanActionsNotificationReport = None
) -> None
```

###### `bigquery_export`<sup>Optional</sup> <a name="bigquery_export" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.putPostScanActions.parameter.bigqueryExport"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a>

bigquery_export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#bigquery_export DataplexDatascan#bigquery_export}

---

###### `notification_report`<sup>Optional</sup> <a name="notification_report" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.putPostScanActions.parameter.notificationReport"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport">DataplexDatascanDataQualitySpecPostScanActionsNotificationReport</a>

notification_report block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#notification_report DataplexDatascan#notification_report}

---

##### `put_rules` <a name="put_rules" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[DataplexDatascanDataQualitySpecRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules">DataplexDatascanDataQualitySpecRules</a>]]

---

##### `reset_catalog_publishing_enabled` <a name="reset_catalog_publishing_enabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetCatalogPublishingEnabled"></a>

```python
def reset_catalog_publishing_enabled() -> None
```

##### `reset_post_scan_actions` <a name="reset_post_scan_actions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetPostScanActions"></a>

```python
def reset_post_scan_actions() -> None
```

##### `reset_row_filter` <a name="reset_row_filter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetRowFilter"></a>

```python
def reset_row_filter() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```

##### `reset_sampling_percent` <a name="reset_sampling_percent" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetSamplingPercent"></a>

```python
def reset_sampling_percent() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.postScanActions">post_scan_actions</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference">DataplexDatascanDataQualitySpecPostScanActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList">DataplexDatascanDataQualitySpecRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.catalogPublishingEnabledInput">catalog_publishing_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.postScanActionsInput">post_scan_actions_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions">DataplexDatascanDataQualitySpecPostScanActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.rowFilterInput">row_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules">DataplexDatascanDataQualitySpecRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.samplingPercentInput">sampling_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.catalogPublishingEnabled">catalog_publishing_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.rowFilter">row_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.samplingPercent">sampling_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec">DataplexDatascanDataQualitySpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `post_scan_actions`<sup>Required</sup> <a name="post_scan_actions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.postScanActions"></a>

```python
post_scan_actions: DataplexDatascanDataQualitySpecPostScanActionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference">DataplexDatascanDataQualitySpecPostScanActionsOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.rules"></a>

```python
rules: DataplexDatascanDataQualitySpecRulesList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList">DataplexDatascanDataQualitySpecRulesList</a>

---

##### `catalog_publishing_enabled_input`<sup>Optional</sup> <a name="catalog_publishing_enabled_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.catalogPublishingEnabledInput"></a>

```python
catalog_publishing_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `post_scan_actions_input`<sup>Optional</sup> <a name="post_scan_actions_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.postScanActionsInput"></a>

```python
post_scan_actions_input: DataplexDatascanDataQualitySpecPostScanActions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions">DataplexDatascanDataQualitySpecPostScanActions</a>

---

##### `row_filter_input`<sup>Optional</sup> <a name="row_filter_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.rowFilterInput"></a>

```python
row_filter_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[DataplexDatascanDataQualitySpecRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules">DataplexDatascanDataQualitySpecRules</a>]]

---

##### `sampling_percent_input`<sup>Optional</sup> <a name="sampling_percent_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.samplingPercentInput"></a>

```python
sampling_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `catalog_publishing_enabled`<sup>Required</sup> <a name="catalog_publishing_enabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.catalogPublishingEnabled"></a>

```python
catalog_publishing_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `row_filter`<sup>Required</sup> <a name="row_filter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.rowFilter"></a>

```python
row_filter: str
```

- *Type:* str

---

##### `sampling_percent`<sup>Required</sup> <a name="sampling_percent" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.samplingPercent"></a>

```python
sampling_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataQualitySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec">DataplexDatascanDataQualitySpec</a>

---


### DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference <a name="DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resetResultsTable">reset_results_table</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_results_table` <a name="reset_results_table" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resetResultsTable"></a>

```python
def reset_results_table() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.resultsTableInput">results_table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.resultsTable">results_table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `results_table_input`<sup>Optional</sup> <a name="results_table_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.resultsTableInput"></a>

```python
results_table_input: str
```

- *Type:* str

---

##### `results_table`<sup>Required</sup> <a name="results_table" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.resultsTable"></a>

```python
results_table: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a>

---


### DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference <a name="DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger</a>

---


### DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference <a name="DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger</a>

---


### DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference <a name="DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.putJobEndTrigger">put_job_end_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.putJobFailureTrigger">put_job_failure_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.putRecipients">put_recipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.putScoreThresholdTrigger">put_score_threshold_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.resetJobEndTrigger">reset_job_end_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.resetJobFailureTrigger">reset_job_failure_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.resetScoreThresholdTrigger">reset_score_threshold_trigger</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_job_end_trigger` <a name="put_job_end_trigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.putJobEndTrigger"></a>

```python
def put_job_end_trigger() -> None
```

##### `put_job_failure_trigger` <a name="put_job_failure_trigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.putJobFailureTrigger"></a>

```python
def put_job_failure_trigger() -> None
```

##### `put_recipients` <a name="put_recipients" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.putRecipients"></a>

```python
def put_recipients(
  emails: typing.List[str] = None
) -> None
```

###### `emails`<sup>Optional</sup> <a name="emails" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.putRecipients.parameter.emails"></a>

- *Type:* typing.List[str]

The email recipients who will receive the DataQualityScan results report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#emails DataplexDatascan#emails}

---

##### `put_score_threshold_trigger` <a name="put_score_threshold_trigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.putScoreThresholdTrigger"></a>

```python
def put_score_threshold_trigger(
  score_threshold: typing.Union[int, float] = None
) -> None
```

###### `score_threshold`<sup>Optional</sup> <a name="score_threshold" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.putScoreThresholdTrigger.parameter.scoreThreshold"></a>

- *Type:* typing.Union[int, float]

The score range is in [0,100].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#score_threshold DataplexDatascan#score_threshold}

---

##### `reset_job_end_trigger` <a name="reset_job_end_trigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.resetJobEndTrigger"></a>

```python
def reset_job_end_trigger() -> None
```

##### `reset_job_failure_trigger` <a name="reset_job_failure_trigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.resetJobFailureTrigger"></a>

```python
def reset_job_failure_trigger() -> None
```

##### `reset_score_threshold_trigger` <a name="reset_score_threshold_trigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.resetScoreThresholdTrigger"></a>

```python
def reset_score_threshold_trigger() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.jobEndTrigger">job_end_trigger</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.jobFailureTrigger">job_failure_trigger</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.recipients">recipients</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.scoreThresholdTrigger">score_threshold_trigger</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.jobEndTriggerInput">job_end_trigger_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.jobFailureTriggerInput">job_failure_trigger_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.recipientsInput">recipients_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.scoreThresholdTriggerInput">score_threshold_trigger_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport">DataplexDatascanDataQualitySpecPostScanActionsNotificationReport</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `job_end_trigger`<sup>Required</sup> <a name="job_end_trigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.jobEndTrigger"></a>

```python
job_end_trigger: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference</a>

---

##### `job_failure_trigger`<sup>Required</sup> <a name="job_failure_trigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.jobFailureTrigger"></a>

```python
job_failure_trigger: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference</a>

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.recipients"></a>

```python
recipients: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference</a>

---

##### `score_threshold_trigger`<sup>Required</sup> <a name="score_threshold_trigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.scoreThresholdTrigger"></a>

```python
score_threshold_trigger: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference</a>

---

##### `job_end_trigger_input`<sup>Optional</sup> <a name="job_end_trigger_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.jobEndTriggerInput"></a>

```python
job_end_trigger_input: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger</a>

---

##### `job_failure_trigger_input`<sup>Optional</sup> <a name="job_failure_trigger_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.jobFailureTriggerInput"></a>

```python
job_failure_trigger_input: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger</a>

---

##### `recipients_input`<sup>Optional</sup> <a name="recipients_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.recipientsInput"></a>

```python
recipients_input: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients</a>

---

##### `score_threshold_trigger_input`<sup>Optional</sup> <a name="score_threshold_trigger_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.scoreThresholdTriggerInput"></a>

```python
score_threshold_trigger_input: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataQualitySpecPostScanActionsNotificationReport
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport">DataplexDatascanDataQualitySpecPostScanActionsNotificationReport</a>

---


### DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference <a name="DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.resetEmails">reset_emails</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_emails` <a name="reset_emails" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.resetEmails"></a>

```python
def reset_emails() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.property.emailsInput">emails_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.property.emails">emails</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `emails_input`<sup>Optional</sup> <a name="emails_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.property.emailsInput"></a>

```python
emails_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.property.emails"></a>

```python
emails: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients</a>

---


### DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference <a name="DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.resetScoreThreshold">reset_score_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_score_threshold` <a name="reset_score_threshold" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.resetScoreThreshold"></a>

```python
def reset_score_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.property.scoreThresholdInput">score_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.property.scoreThreshold">score_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `score_threshold_input`<sup>Optional</sup> <a name="score_threshold_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.property.scoreThresholdInput"></a>

```python
score_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `score_threshold`<sup>Required</sup> <a name="score_threshold" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.property.scoreThreshold"></a>

```python
score_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger</a>

---


### DataplexDatascanDataQualitySpecPostScanActionsOutputReference <a name="DataplexDatascanDataQualitySpecPostScanActionsOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.putBigqueryExport">put_bigquery_export</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.putNotificationReport">put_notification_report</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.resetBigqueryExport">reset_bigquery_export</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.resetNotificationReport">reset_notification_report</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bigquery_export` <a name="put_bigquery_export" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.putBigqueryExport"></a>

```python
def put_bigquery_export(
  results_table: str = None
) -> None
```

###### `results_table`<sup>Optional</sup> <a name="results_table" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.putBigqueryExport.parameter.resultsTable"></a>

- *Type:* str

The BigQuery table to export DataQualityScan results to. Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#results_table DataplexDatascan#results_table}

---

##### `put_notification_report` <a name="put_notification_report" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.putNotificationReport"></a>

```python
def put_notification_report(
  recipients: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients,
  job_end_trigger: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger = None,
  job_failure_trigger: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger = None,
  score_threshold_trigger: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger = None
) -> None
```

###### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.putNotificationReport.parameter.recipients"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients</a>

recipients block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#recipients DataplexDatascan#recipients}

---

###### `job_end_trigger`<sup>Optional</sup> <a name="job_end_trigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.putNotificationReport.parameter.jobEndTrigger"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger</a>

job_end_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#job_end_trigger DataplexDatascan#job_end_trigger}

---

###### `job_failure_trigger`<sup>Optional</sup> <a name="job_failure_trigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.putNotificationReport.parameter.jobFailureTrigger"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger</a>

job_failure_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#job_failure_trigger DataplexDatascan#job_failure_trigger}

---

###### `score_threshold_trigger`<sup>Optional</sup> <a name="score_threshold_trigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.putNotificationReport.parameter.scoreThresholdTrigger"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger</a>

score_threshold_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#score_threshold_trigger DataplexDatascan#score_threshold_trigger}

---

##### `reset_bigquery_export` <a name="reset_bigquery_export" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.resetBigqueryExport"></a>

```python
def reset_bigquery_export() -> None
```

##### `reset_notification_report` <a name="reset_notification_report" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.resetNotificationReport"></a>

```python
def reset_notification_report() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.bigqueryExport">bigquery_export</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference">DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.notificationReport">notification_report</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.bigqueryExportInput">bigquery_export_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.notificationReportInput">notification_report_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport">DataplexDatascanDataQualitySpecPostScanActionsNotificationReport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions">DataplexDatascanDataQualitySpecPostScanActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bigquery_export`<sup>Required</sup> <a name="bigquery_export" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.bigqueryExport"></a>

```python
bigquery_export: DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference">DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference</a>

---

##### `notification_report`<sup>Required</sup> <a name="notification_report" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.notificationReport"></a>

```python
notification_report: DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference</a>

---

##### `bigquery_export_input`<sup>Optional</sup> <a name="bigquery_export_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.bigqueryExportInput"></a>

```python
bigquery_export_input: DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a>

---

##### `notification_report_input`<sup>Optional</sup> <a name="notification_report_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.notificationReportInput"></a>

```python
notification_report_input: DataplexDatascanDataQualitySpecPostScanActionsNotificationReport
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport">DataplexDatascanDataQualitySpecPostScanActionsNotificationReport</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataQualitySpecPostScanActions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions">DataplexDatascanDataQualitySpecPostScanActions</a>

---


### DataplexDatascanDataQualitySpecRulesList <a name="DataplexDatascanDataQualitySpecRulesList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataplexDatascanDataQualitySpecRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules">DataplexDatascanDataQualitySpecRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataplexDatascanDataQualitySpecRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules">DataplexDatascanDataQualitySpecRules</a>]]

---


### DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference <a name="DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation">DataplexDatascanDataQualitySpecRulesNonNullExpectation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataQualitySpecRulesNonNullExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation">DataplexDatascanDataQualitySpecRulesNonNullExpectation</a>

---


### DataplexDatascanDataQualitySpecRulesOutputReference <a name="DataplexDatascanDataQualitySpecRulesOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putNonNullExpectation">put_non_null_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRangeExpectation">put_range_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRegexExpectation">put_regex_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRowConditionExpectation">put_row_condition_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putSetExpectation">put_set_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putSqlAssertion">put_sql_assertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation">put_statistic_range_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putTableConditionExpectation">put_table_condition_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putUniquenessExpectation">put_uniqueness_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetColumn">reset_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetIgnoreNull">reset_ignore_null</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetNonNullExpectation">reset_non_null_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetRangeExpectation">reset_range_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetRegexExpectation">reset_regex_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetRowConditionExpectation">reset_row_condition_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetSetExpectation">reset_set_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetSqlAssertion">reset_sql_assertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetStatisticRangeExpectation">reset_statistic_range_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetSuspended">reset_suspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetTableConditionExpectation">reset_table_condition_expectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetUniquenessExpectation">reset_uniqueness_expectation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_non_null_expectation` <a name="put_non_null_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putNonNullExpectation"></a>

```python
def put_non_null_expectation() -> None
```

##### `put_range_expectation` <a name="put_range_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRangeExpectation"></a>

```python
def put_range_expectation(
  max_value: str = None,
  min_value: str = None,
  strict_max_enabled: typing.Union[bool, IResolvable] = None,
  strict_min_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `max_value`<sup>Optional</sup> <a name="max_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRangeExpectation.parameter.maxValue"></a>

- *Type:* str

The maximum column value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#max_value DataplexDatascan#max_value}

---

###### `min_value`<sup>Optional</sup> <a name="min_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRangeExpectation.parameter.minValue"></a>

- *Type:* str

The minimum column value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#min_value DataplexDatascan#min_value}

---

###### `strict_max_enabled`<sup>Optional</sup> <a name="strict_max_enabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRangeExpectation.parameter.strictMaxEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed.

Only relevant if a maxValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#strict_max_enabled DataplexDatascan#strict_max_enabled}

---

###### `strict_min_enabled`<sup>Optional</sup> <a name="strict_min_enabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRangeExpectation.parameter.strictMinEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed.

Only relevant if a minValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#strict_min_enabled DataplexDatascan#strict_min_enabled}

---

##### `put_regex_expectation` <a name="put_regex_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRegexExpectation"></a>

```python
def put_regex_expectation(
  regex: str
) -> None
```

###### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRegexExpectation.parameter.regex"></a>

- *Type:* str

A regular expression the column value is expected to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#regex DataplexDatascan#regex}

---

##### `put_row_condition_expectation` <a name="put_row_condition_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRowConditionExpectation"></a>

```python
def put_row_condition_expectation(
  sql_expression: str
) -> None
```

###### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRowConditionExpectation.parameter.sqlExpression"></a>

- *Type:* str

The SQL expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#sql_expression DataplexDatascan#sql_expression}

---

##### `put_set_expectation` <a name="put_set_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putSetExpectation"></a>

```python
def put_set_expectation(
  values: typing.List[str]
) -> None
```

###### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putSetExpectation.parameter.values"></a>

- *Type:* typing.List[str]

Expected values for the column value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#values DataplexDatascan#values}

---

##### `put_sql_assertion` <a name="put_sql_assertion" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putSqlAssertion"></a>

```python
def put_sql_assertion(
  sql_statement: str
) -> None
```

###### `sql_statement`<sup>Required</sup> <a name="sql_statement" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putSqlAssertion.parameter.sqlStatement"></a>

- *Type:* str

The SQL statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#sql_statement DataplexDatascan#sql_statement}

---

##### `put_statistic_range_expectation` <a name="put_statistic_range_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation"></a>

```python
def put_statistic_range_expectation(
  statistic: str,
  max_value: str = None,
  min_value: str = None,
  strict_max_enabled: typing.Union[bool, IResolvable] = None,
  strict_min_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation.parameter.statistic"></a>

- *Type:* str

column statistics. Possible values: ["STATISTIC_UNDEFINED", "MEAN", "MIN", "MAX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#statistic DataplexDatascan#statistic}

---

###### `max_value`<sup>Optional</sup> <a name="max_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation.parameter.maxValue"></a>

- *Type:* str

The maximum column statistic value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#max_value DataplexDatascan#max_value}

---

###### `min_value`<sup>Optional</sup> <a name="min_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation.parameter.minValue"></a>

- *Type:* str

The minimum column statistic value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#min_value DataplexDatascan#min_value}

---

###### `strict_max_enabled`<sup>Optional</sup> <a name="strict_max_enabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation.parameter.strictMaxEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed.

Only relevant if a maxValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#strict_max_enabled DataplexDatascan#strict_max_enabled}

---

###### `strict_min_enabled`<sup>Optional</sup> <a name="strict_min_enabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation.parameter.strictMinEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed.

Only relevant if a minValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#strict_min_enabled DataplexDatascan#strict_min_enabled}

---

##### `put_table_condition_expectation` <a name="put_table_condition_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putTableConditionExpectation"></a>

```python
def put_table_condition_expectation(
  sql_expression: str
) -> None
```

###### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putTableConditionExpectation.parameter.sqlExpression"></a>

- *Type:* str

The SQL expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#sql_expression DataplexDatascan#sql_expression}

---

##### `put_uniqueness_expectation` <a name="put_uniqueness_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putUniquenessExpectation"></a>

```python
def put_uniqueness_expectation() -> None
```

##### `reset_column` <a name="reset_column" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetColumn"></a>

```python
def reset_column() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_ignore_null` <a name="reset_ignore_null" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetIgnoreNull"></a>

```python
def reset_ignore_null() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_non_null_expectation` <a name="reset_non_null_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetNonNullExpectation"></a>

```python
def reset_non_null_expectation() -> None
```

##### `reset_range_expectation` <a name="reset_range_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetRangeExpectation"></a>

```python
def reset_range_expectation() -> None
```

##### `reset_regex_expectation` <a name="reset_regex_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetRegexExpectation"></a>

```python
def reset_regex_expectation() -> None
```

##### `reset_row_condition_expectation` <a name="reset_row_condition_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetRowConditionExpectation"></a>

```python
def reset_row_condition_expectation() -> None
```

##### `reset_set_expectation` <a name="reset_set_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetSetExpectation"></a>

```python
def reset_set_expectation() -> None
```

##### `reset_sql_assertion` <a name="reset_sql_assertion" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetSqlAssertion"></a>

```python
def reset_sql_assertion() -> None
```

##### `reset_statistic_range_expectation` <a name="reset_statistic_range_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetStatisticRangeExpectation"></a>

```python
def reset_statistic_range_expectation() -> None
```

##### `reset_suspended` <a name="reset_suspended" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetSuspended"></a>

```python
def reset_suspended() -> None
```

##### `reset_table_condition_expectation` <a name="reset_table_condition_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetTableConditionExpectation"></a>

```python
def reset_table_condition_expectation() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```

##### `reset_uniqueness_expectation` <a name="reset_uniqueness_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetUniquenessExpectation"></a>

```python
def reset_uniqueness_expectation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.nonNullExpectation">non_null_expectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference">DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.rangeExpectation">range_expectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference">DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.regexExpectation">regex_expectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference">DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.rowConditionExpectation">row_condition_expectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference">DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.setExpectation">set_expectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference">DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.sqlAssertion">sql_assertion</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference">DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.statisticRangeExpectation">statistic_range_expectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.tableConditionExpectation">table_condition_expectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference">DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.uniquenessExpectation">uniqueness_expectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference">DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.columnInput">column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.dimensionInput">dimension_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.ignoreNullInput">ignore_null_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.nonNullExpectationInput">non_null_expectation_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation">DataplexDatascanDataQualitySpecRulesNonNullExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.rangeExpectationInput">range_expectation_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation">DataplexDatascanDataQualitySpecRulesRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.regexExpectationInput">regex_expectation_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation">DataplexDatascanDataQualitySpecRulesRegexExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.rowConditionExpectationInput">row_condition_expectation_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation">DataplexDatascanDataQualitySpecRulesRowConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.setExpectationInput">set_expectation_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation">DataplexDatascanDataQualitySpecRulesSetExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.sqlAssertionInput">sql_assertion_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertion">DataplexDatascanDataQualitySpecRulesSqlAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.statisticRangeExpectationInput">statistic_range_expectation_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.suspendedInput">suspended_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.tableConditionExpectationInput">table_condition_expectation_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation">DataplexDatascanDataQualitySpecRulesTableConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.uniquenessExpectationInput">uniqueness_expectation_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation">DataplexDatascanDataQualitySpecRulesUniquenessExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.column">column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.dimension">dimension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.ignoreNull">ignore_null</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.suspended">suspended</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules">DataplexDatascanDataQualitySpecRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `non_null_expectation`<sup>Required</sup> <a name="non_null_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.nonNullExpectation"></a>

```python
non_null_expectation: DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference">DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference</a>

---

##### `range_expectation`<sup>Required</sup> <a name="range_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.rangeExpectation"></a>

```python
range_expectation: DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference">DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference</a>

---

##### `regex_expectation`<sup>Required</sup> <a name="regex_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.regexExpectation"></a>

```python
regex_expectation: DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference">DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference</a>

---

##### `row_condition_expectation`<sup>Required</sup> <a name="row_condition_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.rowConditionExpectation"></a>

```python
row_condition_expectation: DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference">DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference</a>

---

##### `set_expectation`<sup>Required</sup> <a name="set_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.setExpectation"></a>

```python
set_expectation: DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference">DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference</a>

---

##### `sql_assertion`<sup>Required</sup> <a name="sql_assertion" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.sqlAssertion"></a>

```python
sql_assertion: DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference">DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference</a>

---

##### `statistic_range_expectation`<sup>Required</sup> <a name="statistic_range_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.statisticRangeExpectation"></a>

```python
statistic_range_expectation: DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference</a>

---

##### `table_condition_expectation`<sup>Required</sup> <a name="table_condition_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.tableConditionExpectation"></a>

```python
table_condition_expectation: DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference">DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference</a>

---

##### `uniqueness_expectation`<sup>Required</sup> <a name="uniqueness_expectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.uniquenessExpectation"></a>

```python
uniqueness_expectation: DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference">DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference</a>

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.columnInput"></a>

```python
column_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.dimensionInput"></a>

```python
dimension_input: str
```

- *Type:* str

---

##### `ignore_null_input`<sup>Optional</sup> <a name="ignore_null_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.ignoreNullInput"></a>

```python
ignore_null_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `non_null_expectation_input`<sup>Optional</sup> <a name="non_null_expectation_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.nonNullExpectationInput"></a>

```python
non_null_expectation_input: DataplexDatascanDataQualitySpecRulesNonNullExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation">DataplexDatascanDataQualitySpecRulesNonNullExpectation</a>

---

##### `range_expectation_input`<sup>Optional</sup> <a name="range_expectation_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.rangeExpectationInput"></a>

```python
range_expectation_input: DataplexDatascanDataQualitySpecRulesRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation">DataplexDatascanDataQualitySpecRulesRangeExpectation</a>

---

##### `regex_expectation_input`<sup>Optional</sup> <a name="regex_expectation_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.regexExpectationInput"></a>

```python
regex_expectation_input: DataplexDatascanDataQualitySpecRulesRegexExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation">DataplexDatascanDataQualitySpecRulesRegexExpectation</a>

---

##### `row_condition_expectation_input`<sup>Optional</sup> <a name="row_condition_expectation_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.rowConditionExpectationInput"></a>

```python
row_condition_expectation_input: DataplexDatascanDataQualitySpecRulesRowConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation">DataplexDatascanDataQualitySpecRulesRowConditionExpectation</a>

---

##### `set_expectation_input`<sup>Optional</sup> <a name="set_expectation_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.setExpectationInput"></a>

```python
set_expectation_input: DataplexDatascanDataQualitySpecRulesSetExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation">DataplexDatascanDataQualitySpecRulesSetExpectation</a>

---

##### `sql_assertion_input`<sup>Optional</sup> <a name="sql_assertion_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.sqlAssertionInput"></a>

```python
sql_assertion_input: DataplexDatascanDataQualitySpecRulesSqlAssertion
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertion">DataplexDatascanDataQualitySpecRulesSqlAssertion</a>

---

##### `statistic_range_expectation_input`<sup>Optional</sup> <a name="statistic_range_expectation_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.statisticRangeExpectationInput"></a>

```python
statistic_range_expectation_input: DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a>

---

##### `suspended_input`<sup>Optional</sup> <a name="suspended_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.suspendedInput"></a>

```python
suspended_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `table_condition_expectation_input`<sup>Optional</sup> <a name="table_condition_expectation_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.tableConditionExpectationInput"></a>

```python
table_condition_expectation_input: DataplexDatascanDataQualitySpecRulesTableConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation">DataplexDatascanDataQualitySpecRulesTableConditionExpectation</a>

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uniqueness_expectation_input`<sup>Optional</sup> <a name="uniqueness_expectation_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.uniquenessExpectationInput"></a>

```python
uniqueness_expectation_input: DataplexDatascanDataQualitySpecRulesUniquenessExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation">DataplexDatascanDataQualitySpecRulesUniquenessExpectation</a>

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.column"></a>

```python
column: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.dimension"></a>

```python
dimension: str
```

- *Type:* str

---

##### `ignore_null`<sup>Required</sup> <a name="ignore_null" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.ignoreNull"></a>

```python
ignore_null: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `suspended`<sup>Required</sup> <a name="suspended" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.suspended"></a>

```python
suspended: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataplexDatascanDataQualitySpecRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules">DataplexDatascanDataQualitySpecRules</a>]

---


### DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference <a name="DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetMaxValue">reset_max_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetMinValue">reset_min_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetStrictMaxEnabled">reset_strict_max_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetStrictMinEnabled">reset_strict_min_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_value` <a name="reset_max_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetMaxValue"></a>

```python
def reset_max_value() -> None
```

##### `reset_min_value` <a name="reset_min_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetMinValue"></a>

```python
def reset_min_value() -> None
```

##### `reset_strict_max_enabled` <a name="reset_strict_max_enabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetStrictMaxEnabled"></a>

```python
def reset_strict_max_enabled() -> None
```

##### `reset_strict_min_enabled` <a name="reset_strict_min_enabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetStrictMinEnabled"></a>

```python
def reset_strict_min_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.maxValueInput">max_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.minValueInput">min_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMaxEnabledInput">strict_max_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMinEnabledInput">strict_min_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.maxValue">max_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.minValue">min_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMaxEnabled">strict_max_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMinEnabled">strict_min_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation">DataplexDatascanDataQualitySpecRulesRangeExpectation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_value_input`<sup>Optional</sup> <a name="max_value_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.maxValueInput"></a>

```python
max_value_input: str
```

- *Type:* str

---

##### `min_value_input`<sup>Optional</sup> <a name="min_value_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.minValueInput"></a>

```python
min_value_input: str
```

- *Type:* str

---

##### `strict_max_enabled_input`<sup>Optional</sup> <a name="strict_max_enabled_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMaxEnabledInput"></a>

```python
strict_max_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `strict_min_enabled_input`<sup>Optional</sup> <a name="strict_min_enabled_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMinEnabledInput"></a>

```python
strict_min_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_value`<sup>Required</sup> <a name="max_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.maxValue"></a>

```python
max_value: str
```

- *Type:* str

---

##### `min_value`<sup>Required</sup> <a name="min_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.minValue"></a>

```python
min_value: str
```

- *Type:* str

---

##### `strict_max_enabled`<sup>Required</sup> <a name="strict_max_enabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMaxEnabled"></a>

```python
strict_max_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `strict_min_enabled`<sup>Required</sup> <a name="strict_min_enabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMinEnabled"></a>

```python
strict_min_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataQualitySpecRulesRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation">DataplexDatascanDataQualitySpecRulesRangeExpectation</a>

---


### DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference <a name="DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation">DataplexDatascanDataQualitySpecRulesRegexExpectation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataQualitySpecRulesRegexExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation">DataplexDatascanDataQualitySpecRulesRegexExpectation</a>

---


### DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference <a name="DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.sqlExpressionInput">sql_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.sqlExpression">sql_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation">DataplexDatascanDataQualitySpecRulesRowConditionExpectation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sql_expression_input`<sup>Optional</sup> <a name="sql_expression_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.sqlExpressionInput"></a>

```python
sql_expression_input: str
```

- *Type:* str

---

##### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.sqlExpression"></a>

```python
sql_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataQualitySpecRulesRowConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation">DataplexDatascanDataQualitySpecRulesRowConditionExpectation</a>

---


### DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference <a name="DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation">DataplexDatascanDataQualitySpecRulesSetExpectation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataQualitySpecRulesSetExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation">DataplexDatascanDataQualitySpecRulesSetExpectation</a>

---


### DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference <a name="DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.sqlStatementInput">sql_statement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.sqlStatement">sql_statement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertion">DataplexDatascanDataQualitySpecRulesSqlAssertion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sql_statement_input`<sup>Optional</sup> <a name="sql_statement_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.sqlStatementInput"></a>

```python
sql_statement_input: str
```

- *Type:* str

---

##### `sql_statement`<sup>Required</sup> <a name="sql_statement" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.sqlStatement"></a>

```python
sql_statement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataQualitySpecRulesSqlAssertion
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertion">DataplexDatascanDataQualitySpecRulesSqlAssertion</a>

---


### DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference <a name="DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetMaxValue">reset_max_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetMinValue">reset_min_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetStrictMaxEnabled">reset_strict_max_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetStrictMinEnabled">reset_strict_min_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_value` <a name="reset_max_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetMaxValue"></a>

```python
def reset_max_value() -> None
```

##### `reset_min_value` <a name="reset_min_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetMinValue"></a>

```python
def reset_min_value() -> None
```

##### `reset_strict_max_enabled` <a name="reset_strict_max_enabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetStrictMaxEnabled"></a>

```python
def reset_strict_max_enabled() -> None
```

##### `reset_strict_min_enabled` <a name="reset_strict_min_enabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetStrictMinEnabled"></a>

```python
def reset_strict_min_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.maxValueInput">max_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.minValueInput">min_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabledInput">strict_max_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMinEnabledInput">strict_min_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.maxValue">max_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.minValue">min_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabled">strict_max_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMinEnabled">strict_min_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_value_input`<sup>Optional</sup> <a name="max_value_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.maxValueInput"></a>

```python
max_value_input: str
```

- *Type:* str

---

##### `min_value_input`<sup>Optional</sup> <a name="min_value_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.minValueInput"></a>

```python
min_value_input: str
```

- *Type:* str

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `strict_max_enabled_input`<sup>Optional</sup> <a name="strict_max_enabled_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabledInput"></a>

```python
strict_max_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `strict_min_enabled_input`<sup>Optional</sup> <a name="strict_min_enabled_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMinEnabledInput"></a>

```python
strict_min_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_value`<sup>Required</sup> <a name="max_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.maxValue"></a>

```python
max_value: str
```

- *Type:* str

---

##### `min_value`<sup>Required</sup> <a name="min_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.minValue"></a>

```python
min_value: str
```

- *Type:* str

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `strict_max_enabled`<sup>Required</sup> <a name="strict_max_enabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabled"></a>

```python
strict_max_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `strict_min_enabled`<sup>Required</sup> <a name="strict_min_enabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMinEnabled"></a>

```python
strict_min_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a>

---


### DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference <a name="DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.sqlExpressionInput">sql_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.sqlExpression">sql_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation">DataplexDatascanDataQualitySpecRulesTableConditionExpectation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sql_expression_input`<sup>Optional</sup> <a name="sql_expression_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.sqlExpressionInput"></a>

```python
sql_expression_input: str
```

- *Type:* str

---

##### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.sqlExpression"></a>

```python
sql_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataQualitySpecRulesTableConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation">DataplexDatascanDataQualitySpecRulesTableConditionExpectation</a>

---


### DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference <a name="DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation">DataplexDatascanDataQualitySpecRulesUniquenessExpectation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanDataQualitySpecRulesUniquenessExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation">DataplexDatascanDataQualitySpecRulesUniquenessExpectation</a>

---


### DataplexDatascanExecutionSpecOutputReference <a name="DataplexDatascanExecutionSpecOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanExecutionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.putTrigger">put_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.resetField">reset_field</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_trigger` <a name="put_trigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.putTrigger"></a>

```python
def put_trigger(
  on_demand: DataplexDatascanExecutionSpecTriggerOnDemand = None,
  schedule: DataplexDatascanExecutionSpecTriggerSchedule = None
) -> None
```

###### `on_demand`<sup>Optional</sup> <a name="on_demand" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.putTrigger.parameter.onDemand"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand">DataplexDatascanExecutionSpecTriggerOnDemand</a>

on_demand block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#on_demand DataplexDatascan#on_demand}

---

###### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.putTrigger.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule">DataplexDatascanExecutionSpecTriggerSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#schedule DataplexDatascan#schedule}

---

##### `reset_field` <a name="reset_field" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.resetField"></a>

```python
def reset_field() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference">DataplexDatascanExecutionSpecTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.fieldInput">field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.triggerInput">trigger_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger">DataplexDatascanExecutionSpecTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec">DataplexDatascanExecutionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.trigger"></a>

```python
trigger: DataplexDatascanExecutionSpecTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference">DataplexDatascanExecutionSpecTriggerOutputReference</a>

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.fieldInput"></a>

```python
field_input: str
```

- *Type:* str

---

##### `trigger_input`<sup>Optional</sup> <a name="trigger_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.triggerInput"></a>

```python
trigger_input: DataplexDatascanExecutionSpecTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger">DataplexDatascanExecutionSpecTrigger</a>

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanExecutionSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec">DataplexDatascanExecutionSpec</a>

---


### DataplexDatascanExecutionSpecTriggerOnDemandOutputReference <a name="DataplexDatascanExecutionSpecTriggerOnDemandOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand">DataplexDatascanExecutionSpecTriggerOnDemand</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanExecutionSpecTriggerOnDemand
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand">DataplexDatascanExecutionSpecTriggerOnDemand</a>

---


### DataplexDatascanExecutionSpecTriggerOutputReference <a name="DataplexDatascanExecutionSpecTriggerOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.putOnDemand">put_on_demand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.resetOnDemand">reset_on_demand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.resetSchedule">reset_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_on_demand` <a name="put_on_demand" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.putOnDemand"></a>

```python
def put_on_demand() -> None
```

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.putSchedule"></a>

```python
def put_schedule(
  cron: str
) -> None
```

###### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.putSchedule.parameter.cron"></a>

- *Type:* str

Cron schedule for running scans periodically. This field is required for Schedule scans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dataplex_datascan#cron DataplexDatascan#cron}

---

##### `reset_on_demand` <a name="reset_on_demand" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.resetOnDemand"></a>

```python
def reset_on_demand() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.resetSchedule"></a>

```python
def reset_schedule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.onDemand">on_demand</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference">DataplexDatascanExecutionSpecTriggerOnDemandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference">DataplexDatascanExecutionSpecTriggerScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.onDemandInput">on_demand_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand">DataplexDatascanExecutionSpecTriggerOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.scheduleInput">schedule_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule">DataplexDatascanExecutionSpecTriggerSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger">DataplexDatascanExecutionSpecTrigger</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_demand`<sup>Required</sup> <a name="on_demand" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.onDemand"></a>

```python
on_demand: DataplexDatascanExecutionSpecTriggerOnDemandOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference">DataplexDatascanExecutionSpecTriggerOnDemandOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.schedule"></a>

```python
schedule: DataplexDatascanExecutionSpecTriggerScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference">DataplexDatascanExecutionSpecTriggerScheduleOutputReference</a>

---

##### `on_demand_input`<sup>Optional</sup> <a name="on_demand_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.onDemandInput"></a>

```python
on_demand_input: DataplexDatascanExecutionSpecTriggerOnDemand
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand">DataplexDatascanExecutionSpecTriggerOnDemand</a>

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.scheduleInput"></a>

```python
schedule_input: DataplexDatascanExecutionSpecTriggerSchedule
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule">DataplexDatascanExecutionSpecTriggerSchedule</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanExecutionSpecTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger">DataplexDatascanExecutionSpecTrigger</a>

---


### DataplexDatascanExecutionSpecTriggerScheduleOutputReference <a name="DataplexDatascanExecutionSpecTriggerScheduleOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.cronInput">cron_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.cron">cron</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule">DataplexDatascanExecutionSpecTriggerSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_input`<sup>Optional</sup> <a name="cron_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.cronInput"></a>

```python
cron_input: str
```

- *Type:* str

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.cron"></a>

```python
cron: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanExecutionSpecTriggerSchedule
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule">DataplexDatascanExecutionSpecTriggerSchedule</a>

---


### DataplexDatascanExecutionStatusList <a name="DataplexDatascanExecutionStatusList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanExecutionStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataplexDatascanExecutionStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataplexDatascanExecutionStatusOutputReference <a name="DataplexDatascanExecutionStatusOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanExecutionStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.latestJobEndTime">latest_job_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.latestJobStartTime">latest_job_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatus">DataplexDatascanExecutionStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `latest_job_end_time`<sup>Required</sup> <a name="latest_job_end_time" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.latestJobEndTime"></a>

```python
latest_job_end_time: str
```

- *Type:* str

---

##### `latest_job_start_time`<sup>Required</sup> <a name="latest_job_start_time" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.latestJobStartTime"></a>

```python
latest_job_start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDatascanExecutionStatus
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatus">DataplexDatascanExecutionStatus</a>

---


### DataplexDatascanTimeoutsOutputReference <a name="DataplexDatascanTimeoutsOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_datascan

dataplexDatascan.DataplexDatascanTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts">DataplexDatascanTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataplexDatascanTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts">DataplexDatascanTimeouts</a>]

---



