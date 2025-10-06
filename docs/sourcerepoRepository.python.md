# `sourcerepoRepository` Submodule <a name="`sourcerepoRepository` Submodule" id="@cdktf/provider-google.sourcerepoRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SourcerepoRepository <a name="SourcerepoRepository" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository google_sourcerepo_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_google import sourcerepo_repository

sourcerepoRepository.SourcerepoRepository(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  create_ignore_already_exists: bool | IResolvable = None,
  id: str = None,
  project: str = None,
  pubsub_configs: IResolvable | typing.List[SourcerepoRepositoryPubsubConfigs] = None,
  timeouts: SourcerepoRepositoryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.name">name</a></code> | <code>str</code> | Resource name of the repository, of the form '{{repo}}'. The repo name may contain slashes. eg, 'name/with/slash'. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.createIgnoreAlreadyExists">create_ignore_already_exists</a></code> | <code>bool \| cdktf.IResolvable</code> | If set to true, skip repository creation if a repository with the same name already exists. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#id SourcerepoRepository#id}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#project SourcerepoRepository#project}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.pubsubConfigs">pubsub_configs</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs">SourcerepoRepositoryPubsubConfigs</a>]</code> | pubsub_configs block. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts">SourcerepoRepositoryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.name"></a>

- *Type:* str

Resource name of the repository, of the form '{{repo}}'. The repo name may contain slashes. eg, 'name/with/slash'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#name SourcerepoRepository#name}

---

##### `create_ignore_already_exists`<sup>Optional</sup> <a name="create_ignore_already_exists" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.createIgnoreAlreadyExists"></a>

- *Type:* bool | cdktf.IResolvable

If set to true, skip repository creation if a repository with the same name already exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#create_ignore_already_exists SourcerepoRepository#create_ignore_already_exists}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#id SourcerepoRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#project SourcerepoRepository#project}.

---

##### `pubsub_configs`<sup>Optional</sup> <a name="pubsub_configs" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.pubsubConfigs"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs">SourcerepoRepositoryPubsubConfigs</a>]

pubsub_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#pubsub_configs SourcerepoRepository#pubsub_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts">SourcerepoRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#timeouts SourcerepoRepository#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.putPubsubConfigs">put_pubsub_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.resetCreateIgnoreAlreadyExists">reset_create_ignore_already_exists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.resetPubsubConfigs">reset_pubsub_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_pubsub_configs` <a name="put_pubsub_configs" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.putPubsubConfigs"></a>

```python
def put_pubsub_configs(
  value: IResolvable | typing.List[SourcerepoRepositoryPubsubConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.putPubsubConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs">SourcerepoRepositoryPubsubConfigs</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#create SourcerepoRepository#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#delete SourcerepoRepository#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#update SourcerepoRepository#update}.

---

##### `reset_create_ignore_already_exists` <a name="reset_create_ignore_already_exists" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.resetCreateIgnoreAlreadyExists"></a>

```python
def reset_create_ignore_already_exists() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_pubsub_configs` <a name="reset_pubsub_configs" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.resetPubsubConfigs"></a>

```python
def reset_pubsub_configs() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SourcerepoRepository resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import sourcerepo_repository

sourcerepoRepository.SourcerepoRepository.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import sourcerepo_repository

sourcerepoRepository.SourcerepoRepository.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import sourcerepo_repository

sourcerepoRepository.SourcerepoRepository.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import sourcerepo_repository

sourcerepoRepository.SourcerepoRepository.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SourcerepoRepository resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SourcerepoRepository to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SourcerepoRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SourcerepoRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.pubsubConfigs">pubsub_configs</a></code> | <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList">SourcerepoRepositoryPubsubConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference">SourcerepoRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.createIgnoreAlreadyExistsInput">create_ignore_already_exists_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.pubsubConfigsInput">pubsub_configs_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs">SourcerepoRepositoryPubsubConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts">SourcerepoRepositoryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.createIgnoreAlreadyExists">create_ignore_already_exists</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `pubsub_configs`<sup>Required</sup> <a name="pubsub_configs" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.pubsubConfigs"></a>

```python
pubsub_configs: SourcerepoRepositoryPubsubConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList">SourcerepoRepositoryPubsubConfigsList</a>

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.timeouts"></a>

```python
timeouts: SourcerepoRepositoryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference">SourcerepoRepositoryTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `create_ignore_already_exists_input`<sup>Optional</sup> <a name="create_ignore_already_exists_input" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.createIgnoreAlreadyExistsInput"></a>

```python
create_ignore_already_exists_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `pubsub_configs_input`<sup>Optional</sup> <a name="pubsub_configs_input" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.pubsubConfigsInput"></a>

```python
pubsub_configs_input: IResolvable | typing.List[SourcerepoRepositoryPubsubConfigs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs">SourcerepoRepositoryPubsubConfigs</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | SourcerepoRepositoryTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts">SourcerepoRepositoryTimeouts</a>

---

##### `create_ignore_already_exists`<sup>Required</sup> <a name="create_ignore_already_exists" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.createIgnoreAlreadyExists"></a>

```python
create_ignore_already_exists: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepository.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SourcerepoRepositoryConfig <a name="SourcerepoRepositoryConfig" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import sourcerepo_repository

sourcerepoRepository.SourcerepoRepositoryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  create_ignore_already_exists: bool | IResolvable = None,
  id: str = None,
  project: str = None,
  pubsub_configs: IResolvable | typing.List[SourcerepoRepositoryPubsubConfigs] = None,
  timeouts: SourcerepoRepositoryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.name">name</a></code> | <code>str</code> | Resource name of the repository, of the form '{{repo}}'. The repo name may contain slashes. eg, 'name/with/slash'. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.createIgnoreAlreadyExists">create_ignore_already_exists</a></code> | <code>bool \| cdktf.IResolvable</code> | If set to true, skip repository creation if a repository with the same name already exists. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#id SourcerepoRepository#id}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#project SourcerepoRepository#project}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.pubsubConfigs">pubsub_configs</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs">SourcerepoRepositoryPubsubConfigs</a>]</code> | pubsub_configs block. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts">SourcerepoRepositoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Resource name of the repository, of the form '{{repo}}'. The repo name may contain slashes. eg, 'name/with/slash'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#name SourcerepoRepository#name}

---

##### `create_ignore_already_exists`<sup>Optional</sup> <a name="create_ignore_already_exists" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.createIgnoreAlreadyExists"></a>

```python
create_ignore_already_exists: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If set to true, skip repository creation if a repository with the same name already exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#create_ignore_already_exists SourcerepoRepository#create_ignore_already_exists}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#id SourcerepoRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#project SourcerepoRepository#project}.

---

##### `pubsub_configs`<sup>Optional</sup> <a name="pubsub_configs" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.pubsubConfigs"></a>

```python
pubsub_configs: IResolvable | typing.List[SourcerepoRepositoryPubsubConfigs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs">SourcerepoRepositoryPubsubConfigs</a>]

pubsub_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#pubsub_configs SourcerepoRepository#pubsub_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryConfig.property.timeouts"></a>

```python
timeouts: SourcerepoRepositoryTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts">SourcerepoRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#timeouts SourcerepoRepository#timeouts}

---

### SourcerepoRepositoryPubsubConfigs <a name="SourcerepoRepositoryPubsubConfigs" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import sourcerepo_repository

sourcerepoRepository.SourcerepoRepositoryPubsubConfigs(
  message_format: str,
  topic: str,
  service_account_email: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs.property.messageFormat">message_format</a></code> | <code>str</code> | The format of the Cloud Pub/Sub messages. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs.property.topic">topic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#topic SourcerepoRepository#topic}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | Email address of the service account used for publishing Cloud Pub/Sub messages. |

---

##### `message_format`<sup>Required</sup> <a name="message_format" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs.property.messageFormat"></a>

```python
message_format: str
```

- *Type:* str

The format of the Cloud Pub/Sub messages.

* PROTOBUF: The message payload is a serialized protocol buffer of SourceRepoEvent.
* JSON: The message payload is a JSON string of SourceRepoEvent. Possible values: ["PROTOBUF", "JSON"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#message_format SourcerepoRepository#message_format}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs.property.topic"></a>

```python
topic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#topic SourcerepoRepository#topic}.

---

##### `service_account_email`<sup>Optional</sup> <a name="service_account_email" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

Email address of the service account used for publishing Cloud Pub/Sub messages.

This service account needs to be in the same project as the PubsubConfig. When added,
the caller needs to have iam.serviceAccounts.actAs permission on this service account.
If unspecified, it defaults to the compute engine default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#service_account_email SourcerepoRepository#service_account_email}

---

### SourcerepoRepositoryTimeouts <a name="SourcerepoRepositoryTimeouts" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import sourcerepo_repository

sourcerepoRepository.SourcerepoRepositoryTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#create SourcerepoRepository#create}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#delete SourcerepoRepository#delete}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#update SourcerepoRepository#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#create SourcerepoRepository#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#delete SourcerepoRepository#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/sourcerepo_repository#update SourcerepoRepository#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SourcerepoRepositoryPubsubConfigsList <a name="SourcerepoRepositoryPubsubConfigsList" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import sourcerepo_repository

sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SourcerepoRepositoryPubsubConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs">SourcerepoRepositoryPubsubConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SourcerepoRepositoryPubsubConfigs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs">SourcerepoRepositoryPubsubConfigs</a>]

---


### SourcerepoRepositoryPubsubConfigsOutputReference <a name="SourcerepoRepositoryPubsubConfigsOutputReference" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import sourcerepo_repository

sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.resetServiceAccountEmail">reset_service_account_email</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_account_email` <a name="reset_service_account_email" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.resetServiceAccountEmail"></a>

```python
def reset_service_account_email() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.messageFormatInput">message_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.serviceAccountEmailInput">service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.messageFormat">message_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs">SourcerepoRepositoryPubsubConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_format_input`<sup>Optional</sup> <a name="message_format_input" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.messageFormatInput"></a>

```python
message_format_input: str
```

- *Type:* str

---

##### `service_account_email_input`<sup>Optional</sup> <a name="service_account_email_input" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.serviceAccountEmailInput"></a>

```python
service_account_email_input: str
```

- *Type:* str

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `message_format`<sup>Required</sup> <a name="message_format" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.messageFormat"></a>

```python
message_format: str
```

- *Type:* str

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SourcerepoRepositoryPubsubConfigs
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryPubsubConfigs">SourcerepoRepositoryPubsubConfigs</a>

---


### SourcerepoRepositoryTimeoutsOutputReference <a name="SourcerepoRepositoryTimeoutsOutputReference" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import sourcerepo_repository

sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts">SourcerepoRepositoryTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SourcerepoRepositoryTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.sourcerepoRepository.SourcerepoRepositoryTimeouts">SourcerepoRepositoryTimeouts</a>

---



