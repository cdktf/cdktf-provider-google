# `discoveryEngineDataStore` Submodule <a name="`discoveryEngineDataStore` Submodule" id="@cdktf/provider-google.discoveryEngineDataStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineDataStore <a name="DiscoveryEngineDataStore" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store google_discovery_engine_data_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStore(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  content_config: str,
  data_store_id: str,
  display_name: str,
  industry_vertical: str,
  location: str,
  create_advanced_site_search: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  solution_types: typing.List[str] = None,
  timeouts: DiscoveryEngineDataStoreTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.contentConfig">content_config</a></code> | <code>str</code> | The content config of the data store. Possible values: ["NO_CONTENT", "CONTENT_REQUIRED", "PUBLIC_WEBSITE"]. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.dataStoreId">data_store_id</a></code> | <code>str</code> | The unique id of the data store. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the data store. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.industryVertical">industry_vertical</a></code> | <code>str</code> | The industry vertical that the data store registers. Possible values: ["GENERIC", "MEDIA"]. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.createAdvancedSiteSearch">create_advanced_site_search</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, an advanced data store for site search will be created. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#id DiscoveryEngineDataStore#id}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#project DiscoveryEngineDataStore#project}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.solutionTypes">solution_types</a></code> | <code>typing.List[str]</code> | The solutions that the data store enrolls. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT"]. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `content_config`<sup>Required</sup> <a name="content_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.contentConfig"></a>

- *Type:* str

The content config of the data store. Possible values: ["NO_CONTENT", "CONTENT_REQUIRED", "PUBLIC_WEBSITE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#content_config DiscoveryEngineDataStore#content_config}

---

##### `data_store_id`<sup>Required</sup> <a name="data_store_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.dataStoreId"></a>

- *Type:* str

The unique id of the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#data_store_id DiscoveryEngineDataStore#data_store_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the data store.

This field must be a UTF-8 encoded
string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#display_name DiscoveryEngineDataStore#display_name}

---

##### `industry_vertical`<sup>Required</sup> <a name="industry_vertical" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.industryVertical"></a>

- *Type:* str

The industry vertical that the data store registers. Possible values: ["GENERIC", "MEDIA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#industry_vertical DiscoveryEngineDataStore#industry_vertical}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.location"></a>

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#location DiscoveryEngineDataStore#location}

---

##### `create_advanced_site_search`<sup>Optional</sup> <a name="create_advanced_site_search" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.createAdvancedSiteSearch"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, an advanced data store for site search will be created.

If the
data store is not configured as site search (GENERIC vertical and
PUBLIC_WEBSITE contentConfig), this flag will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#create_advanced_site_search DiscoveryEngineDataStore#create_advanced_site_search}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#id DiscoveryEngineDataStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#project DiscoveryEngineDataStore#project}.

---

##### `solution_types`<sup>Optional</sup> <a name="solution_types" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.solutionTypes"></a>

- *Type:* typing.List[str]

The solutions that the data store enrolls. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#solution_types DiscoveryEngineDataStore#solution_types}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#timeouts DiscoveryEngineDataStore#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetCreateAdvancedSiteSearch">reset_create_advanced_site_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetSolutionTypes">reset_solution_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#create DiscoveryEngineDataStore#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#delete DiscoveryEngineDataStore#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#update DiscoveryEngineDataStore#update}.

---

##### `reset_create_advanced_site_search` <a name="reset_create_advanced_site_search" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetCreateAdvancedSiteSearch"></a>

```python
def reset_create_advanced_site_search() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_solution_types` <a name="reset_solution_types" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetSolutionTypes"></a>

```python
def reset_solution_types() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DiscoveryEngineDataStore resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DiscoveryEngineDataStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DiscoveryEngineDataStore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DiscoveryEngineDataStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineDataStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.defaultSchemaId">default_schema_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference">DiscoveryEngineDataStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.contentConfigInput">content_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.createAdvancedSiteSearchInput">create_advanced_site_search_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.dataStoreIdInput">data_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.industryVerticalInput">industry_vertical_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.solutionTypesInput">solution_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.contentConfig">content_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.createAdvancedSiteSearch">create_advanced_site_search</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.dataStoreId">data_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.industryVertical">industry_vertical</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.solutionTypes">solution_types</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `default_schema_id`<sup>Required</sup> <a name="default_schema_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.defaultSchemaId"></a>

```python
default_schema_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.timeouts"></a>

```python
timeouts: DiscoveryEngineDataStoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference">DiscoveryEngineDataStoreTimeoutsOutputReference</a>

---

##### `content_config_input`<sup>Optional</sup> <a name="content_config_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.contentConfigInput"></a>

```python
content_config_input: str
```

- *Type:* str

---

##### `create_advanced_site_search_input`<sup>Optional</sup> <a name="create_advanced_site_search_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.createAdvancedSiteSearchInput"></a>

```python
create_advanced_site_search_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_store_id_input`<sup>Optional</sup> <a name="data_store_id_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.dataStoreIdInput"></a>

```python
data_store_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `industry_vertical_input`<sup>Optional</sup> <a name="industry_vertical_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.industryVerticalInput"></a>

```python
industry_vertical_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `solution_types_input`<sup>Optional</sup> <a name="solution_types_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.solutionTypesInput"></a>

```python
solution_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DiscoveryEngineDataStoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a>]

---

##### `content_config`<sup>Required</sup> <a name="content_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.contentConfig"></a>

```python
content_config: str
```

- *Type:* str

---

##### `create_advanced_site_search`<sup>Required</sup> <a name="create_advanced_site_search" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.createAdvancedSiteSearch"></a>

```python
create_advanced_site_search: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_store_id`<sup>Required</sup> <a name="data_store_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.dataStoreId"></a>

```python
data_store_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `industry_vertical`<sup>Required</sup> <a name="industry_vertical" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.industryVertical"></a>

```python
industry_vertical: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `solution_types`<sup>Required</sup> <a name="solution_types" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.solutionTypes"></a>

```python
solution_types: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineDataStoreConfig <a name="DiscoveryEngineDataStoreConfig" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  content_config: str,
  data_store_id: str,
  display_name: str,
  industry_vertical: str,
  location: str,
  create_advanced_site_search: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  solution_types: typing.List[str] = None,
  timeouts: DiscoveryEngineDataStoreTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.contentConfig">content_config</a></code> | <code>str</code> | The content config of the data store. Possible values: ["NO_CONTENT", "CONTENT_REQUIRED", "PUBLIC_WEBSITE"]. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.dataStoreId">data_store_id</a></code> | <code>str</code> | The unique id of the data store. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the data store. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.industryVertical">industry_vertical</a></code> | <code>str</code> | The industry vertical that the data store registers. Possible values: ["GENERIC", "MEDIA"]. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.createAdvancedSiteSearch">create_advanced_site_search</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, an advanced data store for site search will be created. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#id DiscoveryEngineDataStore#id}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#project DiscoveryEngineDataStore#project}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.solutionTypes">solution_types</a></code> | <code>typing.List[str]</code> | The solutions that the data store enrolls. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT"]. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `content_config`<sup>Required</sup> <a name="content_config" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.contentConfig"></a>

```python
content_config: str
```

- *Type:* str

The content config of the data store. Possible values: ["NO_CONTENT", "CONTENT_REQUIRED", "PUBLIC_WEBSITE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#content_config DiscoveryEngineDataStore#content_config}

---

##### `data_store_id`<sup>Required</sup> <a name="data_store_id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.dataStoreId"></a>

```python
data_store_id: str
```

- *Type:* str

The unique id of the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#data_store_id DiscoveryEngineDataStore#data_store_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the data store.

This field must be a UTF-8 encoded
string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#display_name DiscoveryEngineDataStore#display_name}

---

##### `industry_vertical`<sup>Required</sup> <a name="industry_vertical" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.industryVertical"></a>

```python
industry_vertical: str
```

- *Type:* str

The industry vertical that the data store registers. Possible values: ["GENERIC", "MEDIA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#industry_vertical DiscoveryEngineDataStore#industry_vertical}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#location DiscoveryEngineDataStore#location}

---

##### `create_advanced_site_search`<sup>Optional</sup> <a name="create_advanced_site_search" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.createAdvancedSiteSearch"></a>

```python
create_advanced_site_search: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, an advanced data store for site search will be created.

If the
data store is not configured as site search (GENERIC vertical and
PUBLIC_WEBSITE contentConfig), this flag will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#create_advanced_site_search DiscoveryEngineDataStore#create_advanced_site_search}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#id DiscoveryEngineDataStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#project DiscoveryEngineDataStore#project}.

---

##### `solution_types`<sup>Optional</sup> <a name="solution_types" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.solutionTypes"></a>

```python
solution_types: typing.List[str]
```

- *Type:* typing.List[str]

The solutions that the data store enrolls. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#solution_types DiscoveryEngineDataStore#solution_types}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreConfig.property.timeouts"></a>

```python
timeouts: DiscoveryEngineDataStoreTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#timeouts DiscoveryEngineDataStore#timeouts}

---

### DiscoveryEngineDataStoreTimeouts <a name="DiscoveryEngineDataStoreTimeouts" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#create DiscoveryEngineDataStore#create}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#delete DiscoveryEngineDataStore#delete}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#update DiscoveryEngineDataStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#create DiscoveryEngineDataStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#delete DiscoveryEngineDataStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/discovery_engine_data_store#update DiscoveryEngineDataStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineDataStoreTimeoutsOutputReference <a name="DiscoveryEngineDataStoreTimeoutsOutputReference" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import discovery_engine_data_store

discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DiscoveryEngineDataStoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.discoveryEngineDataStore.DiscoveryEngineDataStoreTimeouts">DiscoveryEngineDataStoreTimeouts</a>]

---



