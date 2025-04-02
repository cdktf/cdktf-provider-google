# `artifactRegistryRepositoryIamPolicy` Submodule <a name="`artifactRegistryRepositoryIamPolicy` Submodule" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArtifactRegistryRepositoryIamPolicy <a name="ArtifactRegistryRepositoryIamPolicy" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/artifact_registry_repository_iam_policy google_artifact_registry_repository_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import artifact_registry_repository_iam_policy

artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_data: str,
  repository: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/artifact_registry_repository_iam_policy#policy_data ArtifactRegistryRepositoryIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.repository">repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/artifact_registry_repository_iam_policy#repository ArtifactRegistryRepositoryIamPolicy#repository}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/artifact_registry_repository_iam_policy#id ArtifactRegistryRepositoryIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/artifact_registry_repository_iam_policy#location ArtifactRegistryRepositoryIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/artifact_registry_repository_iam_policy#project ArtifactRegistryRepositoryIamPolicy#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.policyData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/artifact_registry_repository_iam_policy#policy_data ArtifactRegistryRepositoryIamPolicy#policy_data}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.repository"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/artifact_registry_repository_iam_policy#repository ArtifactRegistryRepositoryIamPolicy#repository}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/artifact_registry_repository_iam_policy#id ArtifactRegistryRepositoryIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/artifact_registry_repository_iam_policy#location ArtifactRegistryRepositoryIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/artifact_registry_repository_iam_policy#project ArtifactRegistryRepositoryIamPolicy#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ArtifactRegistryRepositoryIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import artifact_registry_repository_iam_policy

artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import artifact_registry_repository_iam_policy

artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import artifact_registry_repository_iam_policy

artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import artifact_registry_repository_iam_policy

artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ArtifactRegistryRepositoryIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ArtifactRegistryRepositoryIamPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ArtifactRegistryRepositoryIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/artifact_registry_repository_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ArtifactRegistryRepositoryIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.policyDataInput">policy_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.policyData">policy_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.repository">repository</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `policy_data_input`<sup>Optional</sup> <a name="policy_data_input" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.policyDataInput"></a>

```python
policy_data_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ArtifactRegistryRepositoryIamPolicyConfig <a name="ArtifactRegistryRepositoryIamPolicyConfig" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import artifact_registry_repository_iam_policy

artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_data: str,
  repository: str,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.property.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/artifact_registry_repository_iam_policy#policy_data ArtifactRegistryRepositoryIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.property.repository">repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/artifact_registry_repository_iam_policy#repository ArtifactRegistryRepositoryIamPolicy#repository}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/artifact_registry_repository_iam_policy#id ArtifactRegistryRepositoryIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/artifact_registry_repository_iam_policy#location ArtifactRegistryRepositoryIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/artifact_registry_repository_iam_policy#project ArtifactRegistryRepositoryIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/artifact_registry_repository_iam_policy#policy_data ArtifactRegistryRepositoryIamPolicy#policy_data}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/artifact_registry_repository_iam_policy#repository ArtifactRegistryRepositoryIamPolicy#repository}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/artifact_registry_repository_iam_policy#id ArtifactRegistryRepositoryIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/artifact_registry_repository_iam_policy#location ArtifactRegistryRepositoryIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.artifactRegistryRepositoryIamPolicy.ArtifactRegistryRepositoryIamPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/artifact_registry_repository_iam_policy#project ArtifactRegistryRepositoryIamPolicy#project}.

---



