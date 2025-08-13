# `apihubCuration` Submodule <a name="`apihubCuration` Submodule" id="@cdktf/provider-google.apihubCuration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApihubCuration <a name="ApihubCuration" id="@cdktf/provider-google.apihubCuration.ApihubCuration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation google_apihub_curation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_curation

apihubCuration.ApihubCuration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  curation_id: str,
  display_name: str,
  endpoint: ApihubCurationEndpoint,
  location: str,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: ApihubCurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.curationId">curation_id</a></code> | <code>str</code> | The ID to use for the curation resource, which will become the final component of the curations's resource name. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the curation. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpoint">ApihubCurationEndpoint</a></code> | endpoint block. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the curation. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#id ApihubCuration#id}. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#project ApihubCuration#project}. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeouts">ApihubCurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `curation_id`<sup>Required</sup> <a name="curation_id" id="@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.curationId"></a>

- *Type:* str

The ID to use for the curation resource, which will become the final component of the curations's resource name.

This field is optional.

* If provided, the same will be used. The service will throw an error if
  the specified ID is already used by another curation resource in the API
  hub.
* If not provided, a system generated ID will be used.

This value should be 4-500 characters, and valid characters
are /a-z[0-9]-_/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#curation_id ApihubCuration#curation_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the curation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#display_name ApihubCuration#display_name}

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.endpoint"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpoint">ApihubCurationEndpoint</a>

endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#endpoint ApihubCuration#endpoint}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#location ApihubCuration#location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.description"></a>

- *Type:* str

The description of the curation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#description ApihubCuration#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#id ApihubCuration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#project ApihubCuration#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apihubCuration.ApihubCuration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeouts">ApihubCurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#timeouts ApihubCuration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.putEndpoint">put_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apihubCuration.ApihubCuration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.apihubCuration.ApihubCuration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apihubCuration.ApihubCuration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubCuration.ApihubCuration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.apihubCuration.ApihubCuration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.apihubCuration.ApihubCuration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.apihubCuration.ApihubCuration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.apihubCuration.ApihubCuration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.apihubCuration.ApihubCuration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.apihubCuration.ApihubCuration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.apihubCuration.ApihubCuration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apihubCuration.ApihubCuration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCuration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCuration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCuration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCuration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCuration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCuration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCuration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCuration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCuration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCuration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCuration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCuration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCuration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCuration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCuration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCuration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCuration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCuration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.apihubCuration.ApihubCuration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.apihubCuration.ApihubCuration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubCuration.ApihubCuration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubCuration.ApihubCuration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCuration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCuration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.apihubCuration.ApihubCuration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubCuration.ApihubCuration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.apihubCuration.ApihubCuration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apihubCuration.ApihubCuration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apihubCuration.ApihubCuration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.apihubCuration.ApihubCuration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubCuration.ApihubCuration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_endpoint` <a name="put_endpoint" id="@cdktf/provider-google.apihubCuration.ApihubCuration.putEndpoint"></a>

```python
def put_endpoint(
  application_integration_endpoint_details: ApihubCurationEndpointApplicationIntegrationEndpointDetails
) -> None
```

###### `application_integration_endpoint_details`<sup>Required</sup> <a name="application_integration_endpoint_details" id="@cdktf/provider-google.apihubCuration.ApihubCuration.putEndpoint.parameter.applicationIntegrationEndpointDetails"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails">ApihubCurationEndpointApplicationIntegrationEndpointDetails</a>

application_integration_endpoint_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#application_integration_endpoint_details ApihubCuration#application_integration_endpoint_details}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.apihubCuration.ApihubCuration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apihubCuration.ApihubCuration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#create ApihubCuration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apihubCuration.ApihubCuration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#delete ApihubCuration#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apihubCuration.ApihubCuration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#update ApihubCuration#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.apihubCuration.ApihubCuration.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.apihubCuration.ApihubCuration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.apihubCuration.ApihubCuration.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.apihubCuration.ApihubCuration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApihubCuration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.apihubCuration.ApihubCuration.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import apihub_curation

apihubCuration.ApihubCuration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubCuration.ApihubCuration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.apihubCuration.ApihubCuration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import apihub_curation

apihubCuration.ApihubCuration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubCuration.ApihubCuration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.apihubCuration.ApihubCuration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import apihub_curation

apihubCuration.ApihubCuration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubCuration.ApihubCuration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.apihubCuration.ApihubCuration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import apihub_curation

apihubCuration.ApihubCuration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApihubCuration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apihubCuration.ApihubCuration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.apihubCuration.ApihubCuration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApihubCuration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.apihubCuration.ApihubCuration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApihubCuration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubCuration.ApihubCuration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApihubCuration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference">ApihubCurationEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.lastExecutionErrorCode">last_execution_error_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.lastExecutionErrorMessage">last_execution_error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.lastExecutionState">last_execution_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.pluginInstanceActions">plugin_instance_actions</a></code> | <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList">ApihubCurationPluginInstanceActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference">ApihubCurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.curationIdInput">curation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.endpointInput">endpoint_input</a></code> | <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpoint">ApihubCurationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeouts">ApihubCurationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.curationId">curation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.endpoint"></a>

```python
endpoint: ApihubCurationEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference">ApihubCurationEndpointOutputReference</a>

---

##### `last_execution_error_code`<sup>Required</sup> <a name="last_execution_error_code" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.lastExecutionErrorCode"></a>

```python
last_execution_error_code: str
```

- *Type:* str

---

##### `last_execution_error_message`<sup>Required</sup> <a name="last_execution_error_message" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.lastExecutionErrorMessage"></a>

```python
last_execution_error_message: str
```

- *Type:* str

---

##### `last_execution_state`<sup>Required</sup> <a name="last_execution_state" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.lastExecutionState"></a>

```python
last_execution_state: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `plugin_instance_actions`<sup>Required</sup> <a name="plugin_instance_actions" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.pluginInstanceActions"></a>

```python
plugin_instance_actions: ApihubCurationPluginInstanceActionsList
```

- *Type:* <a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList">ApihubCurationPluginInstanceActionsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.timeouts"></a>

```python
timeouts: ApihubCurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference">ApihubCurationTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `curation_id_input`<sup>Optional</sup> <a name="curation_id_input" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.curationIdInput"></a>

```python
curation_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.endpointInput"></a>

```python
endpoint_input: ApihubCurationEndpoint
```

- *Type:* <a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpoint">ApihubCurationEndpoint</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApihubCurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeouts">ApihubCurationTimeouts</a>]

---

##### `curation_id`<sup>Required</sup> <a name="curation_id" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.curationId"></a>

```python
curation_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCuration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apihubCuration.ApihubCuration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApihubCurationConfig <a name="ApihubCurationConfig" id="@cdktf/provider-google.apihubCuration.ApihubCurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubCuration.ApihubCurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_curation

apihubCuration.ApihubCurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  curation_id: str,
  display_name: str,
  endpoint: ApihubCurationEndpoint,
  location: str,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: ApihubCurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.curationId">curation_id</a></code> | <code>str</code> | The ID to use for the curation resource, which will become the final component of the curations's resource name. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the curation. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpoint">ApihubCurationEndpoint</a></code> | endpoint block. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.description">description</a></code> | <code>str</code> | The description of the curation. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#id ApihubCuration#id}. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#project ApihubCuration#project}. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeouts">ApihubCurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `curation_id`<sup>Required</sup> <a name="curation_id" id="@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.curationId"></a>

```python
curation_id: str
```

- *Type:* str

The ID to use for the curation resource, which will become the final component of the curations's resource name.

This field is optional.

* If provided, the same will be used. The service will throw an error if
  the specified ID is already used by another curation resource in the API
  hub.
* If not provided, a system generated ID will be used.

This value should be 4-500 characters, and valid characters
are /a-z[0-9]-_/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#curation_id ApihubCuration#curation_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the curation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#display_name ApihubCuration#display_name}

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.endpoint"></a>

```python
endpoint: ApihubCurationEndpoint
```

- *Type:* <a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpoint">ApihubCurationEndpoint</a>

endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#endpoint ApihubCuration#endpoint}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#location ApihubCuration#location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the curation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#description ApihubCuration#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#id ApihubCuration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#project ApihubCuration#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apihubCuration.ApihubCurationConfig.property.timeouts"></a>

```python
timeouts: ApihubCurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeouts">ApihubCurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#timeouts ApihubCuration#timeouts}

---

### ApihubCurationEndpoint <a name="ApihubCurationEndpoint" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_curation

apihubCuration.ApihubCurationEndpoint(
  application_integration_endpoint_details: ApihubCurationEndpointApplicationIntegrationEndpointDetails
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpoint.property.applicationIntegrationEndpointDetails">application_integration_endpoint_details</a></code> | <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails">ApihubCurationEndpointApplicationIntegrationEndpointDetails</a></code> | application_integration_endpoint_details block. |

---

##### `application_integration_endpoint_details`<sup>Required</sup> <a name="application_integration_endpoint_details" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpoint.property.applicationIntegrationEndpointDetails"></a>

```python
application_integration_endpoint_details: ApihubCurationEndpointApplicationIntegrationEndpointDetails
```

- *Type:* <a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails">ApihubCurationEndpointApplicationIntegrationEndpointDetails</a>

application_integration_endpoint_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#application_integration_endpoint_details ApihubCuration#application_integration_endpoint_details}

---

### ApihubCurationEndpointApplicationIntegrationEndpointDetails <a name="ApihubCurationEndpointApplicationIntegrationEndpointDetails" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_curation

apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails(
  trigger_id: str,
  uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails.property.triggerId">trigger_id</a></code> | <code>str</code> | The API trigger ID of the Application Integration workflow. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails.property.uri">uri</a></code> | <code>str</code> | The endpoint URI should be a valid REST URI for triggering an Application Integration. Format: 'https://integrations.googleapis.com/v1/{name=projects/* /locations/* /integrations/*}:execute' or 'https://{location}-integrations.googleapis.com/v1/{name=projects/* /locations/* /integrations/*}:execute'. |

---

##### `trigger_id`<sup>Required</sup> <a name="trigger_id" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails.property.triggerId"></a>

```python
trigger_id: str
```

- *Type:* str

The API trigger ID of the Application Integration workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#trigger_id ApihubCuration#trigger_id}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails.property.uri"></a>

```python
uri: str
```

- *Type:* str

The endpoint URI should be a valid REST URI for triggering an Application Integration. Format: 'https://integrations.googleapis.com/v1/{name=projects/* /locations/* /integrations/*}:execute' or 'https://{location}-integrations.googleapis.com/v1/{name=projects/* /locations/* /integrations/*}:execute'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#uri ApihubCuration#uri}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### ApihubCurationPluginInstanceActions <a name="ApihubCurationPluginInstanceActions" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_curation

apihubCuration.ApihubCurationPluginInstanceActions()
```


### ApihubCurationTimeouts <a name="ApihubCurationTimeouts" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_curation

apihubCuration.ApihubCurationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#create ApihubCuration#create}. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#delete ApihubCuration#delete}. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#update ApihubCuration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#create ApihubCuration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#delete ApihubCuration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#update ApihubCuration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference <a name="ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_curation

apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.triggerIdInput">trigger_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.triggerId">trigger_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails">ApihubCurationEndpointApplicationIntegrationEndpointDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `trigger_id_input`<sup>Optional</sup> <a name="trigger_id_input" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.triggerIdInput"></a>

```python
trigger_id_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `trigger_id`<sup>Required</sup> <a name="trigger_id" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.triggerId"></a>

```python
trigger_id: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.internalValue"></a>

```python
internal_value: ApihubCurationEndpointApplicationIntegrationEndpointDetails
```

- *Type:* <a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails">ApihubCurationEndpointApplicationIntegrationEndpointDetails</a>

---


### ApihubCurationEndpointOutputReference <a name="ApihubCurationEndpointOutputReference" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_curation

apihubCuration.ApihubCurationEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.putApplicationIntegrationEndpointDetails">put_application_integration_endpoint_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_application_integration_endpoint_details` <a name="put_application_integration_endpoint_details" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.putApplicationIntegrationEndpointDetails"></a>

```python
def put_application_integration_endpoint_details(
  trigger_id: str,
  uri: str
) -> None
```

###### `trigger_id`<sup>Required</sup> <a name="trigger_id" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.putApplicationIntegrationEndpointDetails.parameter.triggerId"></a>

- *Type:* str

The API trigger ID of the Application Integration workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#trigger_id ApihubCuration#trigger_id}

---

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.putApplicationIntegrationEndpointDetails.parameter.uri"></a>

- *Type:* str

The endpoint URI should be a valid REST URI for triggering an Application Integration. Format: 'https://integrations.googleapis.com/v1/{name=projects/* /locations/* /integrations/*}:execute' or 'https://{location}-integrations.googleapis.com/v1/{name=projects/* /locations/* /integrations/*}:execute'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/apihub_curation#uri ApihubCuration#uri}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.property.applicationIntegrationEndpointDetails">application_integration_endpoint_details</a></code> | <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference">ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.property.applicationIntegrationEndpointDetailsInput">application_integration_endpoint_details_input</a></code> | <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails">ApihubCurationEndpointApplicationIntegrationEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpoint">ApihubCurationEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_integration_endpoint_details`<sup>Required</sup> <a name="application_integration_endpoint_details" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.property.applicationIntegrationEndpointDetails"></a>

```python
application_integration_endpoint_details: ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference">ApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference</a>

---

##### `application_integration_endpoint_details_input`<sup>Optional</sup> <a name="application_integration_endpoint_details_input" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.property.applicationIntegrationEndpointDetailsInput"></a>

```python
application_integration_endpoint_details_input: ApihubCurationEndpointApplicationIntegrationEndpointDetails
```

- *Type:* <a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpointApplicationIntegrationEndpointDetails">ApihubCurationEndpointApplicationIntegrationEndpointDetails</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apihubCuration.ApihubCurationEndpointOutputReference.property.internalValue"></a>

```python
internal_value: ApihubCurationEndpoint
```

- *Type:* <a href="#@cdktf/provider-google.apihubCuration.ApihubCurationEndpoint">ApihubCurationEndpoint</a>

---


### ApihubCurationPluginInstanceActionsList <a name="ApihubCurationPluginInstanceActionsList" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_curation

apihubCuration.ApihubCurationPluginInstanceActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApihubCurationPluginInstanceActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApihubCurationPluginInstanceActionsOutputReference <a name="ApihubCurationPluginInstanceActionsOutputReference" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_curation

apihubCuration.ApihubCurationPluginInstanceActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.property.actionId">action_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.property.pluginInstance">plugin_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActions">ApihubCurationPluginInstanceActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_id`<sup>Required</sup> <a name="action_id" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.property.actionId"></a>

```python
action_id: str
```

- *Type:* str

---

##### `plugin_instance`<sup>Required</sup> <a name="plugin_instance" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.property.pluginInstance"></a>

```python
plugin_instance: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActionsOutputReference.property.internalValue"></a>

```python
internal_value: ApihubCurationPluginInstanceActions
```

- *Type:* <a href="#@cdktf/provider-google.apihubCuration.ApihubCurationPluginInstanceActions">ApihubCurationPluginInstanceActions</a>

---


### ApihubCurationTimeoutsOutputReference <a name="ApihubCurationTimeoutsOutputReference" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apihub_curation

apihubCuration.ApihubCurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeouts">ApihubCurationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apihubCuration.ApihubCurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApihubCurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apihubCuration.ApihubCurationTimeouts">ApihubCurationTimeouts</a>]

---



