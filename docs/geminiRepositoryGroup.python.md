# `geminiRepositoryGroup` Submodule <a name="`geminiRepositoryGroup` Submodule" id="@cdktf/provider-google.geminiRepositoryGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiRepositoryGroup <a name="GeminiRepositoryGroup" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group google_gemini_repository_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_repository_group

geminiRepositoryGroup.GeminiRepositoryGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  code_repository_index: str,
  location: str,
  repositories: typing.Union[IResolvable, typing.List[GeminiRepositoryGroupRepositories]],
  repository_group_id: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GeminiRepositoryGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.codeRepositoryIndex">code_repository_index</a></code> | <code>str</code> | Required. Id of the Code Repository Index. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the Code Repository Index, for example 'us-central1'. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.repositories">repositories</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositories">GeminiRepositoryGroupRepositories</a>]]</code> | repositories block. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.repositoryGroupId">repository_group_id</a></code> | <code>str</code> | Required. Id of the Repository Group. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#id GeminiRepositoryGroup#id}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#project GeminiRepositoryGroup#project}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts">GeminiRepositoryGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `code_repository_index`<sup>Required</sup> <a name="code_repository_index" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.codeRepositoryIndex"></a>

- *Type:* str

Required. Id of the Code Repository Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#code_repository_index GeminiRepositoryGroup#code_repository_index}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.location"></a>

- *Type:* str

The location of the Code Repository Index, for example 'us-central1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#location GeminiRepositoryGroup#location}

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.repositories"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositories">GeminiRepositoryGroupRepositories</a>]]

repositories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#repositories GeminiRepositoryGroup#repositories}

---

##### `repository_group_id`<sup>Required</sup> <a name="repository_group_id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.repositoryGroupId"></a>

- *Type:* str

Required. Id of the Repository Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#repository_group_id GeminiRepositoryGroup#repository_group_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#id GeminiRepositoryGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#labels GeminiRepositoryGroup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#project GeminiRepositoryGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts">GeminiRepositoryGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#timeouts GeminiRepositoryGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.putRepositories">put_repositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_repositories` <a name="put_repositories" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.putRepositories"></a>

```python
def put_repositories(
  value: typing.Union[IResolvable, typing.List[GeminiRepositoryGroupRepositories]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.putRepositories.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositories">GeminiRepositoryGroupRepositories</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#create GeminiRepositoryGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#delete GeminiRepositoryGroup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#update GeminiRepositoryGroup#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GeminiRepositoryGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import gemini_repository_group

geminiRepositoryGroup.GeminiRepositoryGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import gemini_repository_group

geminiRepositoryGroup.GeminiRepositoryGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import gemini_repository_group

geminiRepositoryGroup.GeminiRepositoryGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import gemini_repository_group

geminiRepositoryGroup.GeminiRepositoryGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GeminiRepositoryGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GeminiRepositoryGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GeminiRepositoryGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GeminiRepositoryGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.repositories">repositories</a></code> | <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList">GeminiRepositoryGroupRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference">GeminiRepositoryGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.codeRepositoryIndexInput">code_repository_index_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.repositoriesInput">repositories_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositories">GeminiRepositoryGroupRepositories</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.repositoryGroupIdInput">repository_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts">GeminiRepositoryGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.codeRepositoryIndex">code_repository_index</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.repositoryGroupId">repository_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.repositories"></a>

```python
repositories: GeminiRepositoryGroupRepositoriesList
```

- *Type:* <a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList">GeminiRepositoryGroupRepositoriesList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.timeouts"></a>

```python
timeouts: GeminiRepositoryGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference">GeminiRepositoryGroupTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `code_repository_index_input`<sup>Optional</sup> <a name="code_repository_index_input" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.codeRepositoryIndexInput"></a>

```python
code_repository_index_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `repositories_input`<sup>Optional</sup> <a name="repositories_input" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.repositoriesInput"></a>

```python
repositories_input: typing.Union[IResolvable, typing.List[GeminiRepositoryGroupRepositories]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositories">GeminiRepositoryGroupRepositories</a>]]

---

##### `repository_group_id_input`<sup>Optional</sup> <a name="repository_group_id_input" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.repositoryGroupIdInput"></a>

```python
repository_group_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GeminiRepositoryGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts">GeminiRepositoryGroupTimeouts</a>]

---

##### `code_repository_index`<sup>Required</sup> <a name="code_repository_index" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.codeRepositoryIndex"></a>

```python
code_repository_index: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `repository_group_id`<sup>Required</sup> <a name="repository_group_id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.repositoryGroupId"></a>

```python
repository_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiRepositoryGroupConfig <a name="GeminiRepositoryGroupConfig" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_repository_group

geminiRepositoryGroup.GeminiRepositoryGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  code_repository_index: str,
  location: str,
  repositories: typing.Union[IResolvable, typing.List[GeminiRepositoryGroupRepositories]],
  repository_group_id: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GeminiRepositoryGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.codeRepositoryIndex">code_repository_index</a></code> | <code>str</code> | Required. Id of the Code Repository Index. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.location">location</a></code> | <code>str</code> | The location of the Code Repository Index, for example 'us-central1'. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.repositories">repositories</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositories">GeminiRepositoryGroupRepositories</a>]]</code> | repositories block. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.repositoryGroupId">repository_group_id</a></code> | <code>str</code> | Required. Id of the Repository Group. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#id GeminiRepositoryGroup#id}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#project GeminiRepositoryGroup#project}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts">GeminiRepositoryGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `code_repository_index`<sup>Required</sup> <a name="code_repository_index" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.codeRepositoryIndex"></a>

```python
code_repository_index: str
```

- *Type:* str

Required. Id of the Code Repository Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#code_repository_index GeminiRepositoryGroup#code_repository_index}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the Code Repository Index, for example 'us-central1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#location GeminiRepositoryGroup#location}

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.repositories"></a>

```python
repositories: typing.Union[IResolvable, typing.List[GeminiRepositoryGroupRepositories]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositories">GeminiRepositoryGroupRepositories</a>]]

repositories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#repositories GeminiRepositoryGroup#repositories}

---

##### `repository_group_id`<sup>Required</sup> <a name="repository_group_id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.repositoryGroupId"></a>

```python
repository_group_id: str
```

- *Type:* str

Required. Id of the Repository Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#repository_group_id GeminiRepositoryGroup#repository_group_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#id GeminiRepositoryGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#labels GeminiRepositoryGroup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#project GeminiRepositoryGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupConfig.property.timeouts"></a>

```python
timeouts: GeminiRepositoryGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts">GeminiRepositoryGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#timeouts GeminiRepositoryGroup#timeouts}

---

### GeminiRepositoryGroupRepositories <a name="GeminiRepositoryGroupRepositories" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositories.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_repository_group

geminiRepositoryGroup.GeminiRepositoryGroupRepositories(
  branch_pattern: str,
  resource: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositories.property.branchPattern">branch_pattern</a></code> | <code>str</code> | Required. The Git branch pattern used for indexing in RE2 syntax. See https://github.com/google/re2/wiki/syntax for syntax. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositories.property.resource">resource</a></code> | <code>str</code> | Required. The DeveloperConnect repository full resource name, relative resource name or resource URL to be indexed. |

---

##### `branch_pattern`<sup>Required</sup> <a name="branch_pattern" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositories.property.branchPattern"></a>

```python
branch_pattern: str
```

- *Type:* str

Required. The Git branch pattern used for indexing in RE2 syntax. See https://github.com/google/re2/wiki/syntax for syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#branch_pattern GeminiRepositoryGroup#branch_pattern}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositories.property.resource"></a>

```python
resource: str
```

- *Type:* str

Required. The DeveloperConnect repository full resource name, relative resource name or resource URL to be indexed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#resource GeminiRepositoryGroup#resource}

---

### GeminiRepositoryGroupTimeouts <a name="GeminiRepositoryGroupTimeouts" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_repository_group

geminiRepositoryGroup.GeminiRepositoryGroupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#create GeminiRepositoryGroup#create}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#delete GeminiRepositoryGroup#delete}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#update GeminiRepositoryGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#create GeminiRepositoryGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#delete GeminiRepositoryGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group#update GeminiRepositoryGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiRepositoryGroupRepositoriesList <a name="GeminiRepositoryGroupRepositoriesList" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_repository_group

geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GeminiRepositoryGroupRepositoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositories">GeminiRepositoryGroupRepositories</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GeminiRepositoryGroupRepositories]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositories">GeminiRepositoryGroupRepositories</a>]]

---


### GeminiRepositoryGroupRepositoriesOutputReference <a name="GeminiRepositoryGroupRepositoriesOutputReference" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_repository_group

geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.branchPatternInput">branch_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.branchPattern">branch_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositories">GeminiRepositoryGroupRepositories</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_pattern_input`<sup>Optional</sup> <a name="branch_pattern_input" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.branchPatternInput"></a>

```python
branch_pattern_input: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `branch_pattern`<sup>Required</sup> <a name="branch_pattern" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.branchPattern"></a>

```python
branch_pattern: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositoriesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GeminiRepositoryGroupRepositories]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupRepositories">GeminiRepositoryGroupRepositories</a>]

---


### GeminiRepositoryGroupTimeoutsOutputReference <a name="GeminiRepositoryGroupTimeoutsOutputReference" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gemini_repository_group

geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts">GeminiRepositoryGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GeminiRepositoryGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.geminiRepositoryGroup.GeminiRepositoryGroupTimeouts">GeminiRepositoryGroupTimeouts</a>]

---



