# `google_cloudbuildv2_repository`

Refer to the Terraform Registory for docs: [`google_cloudbuildv2_repository`](https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository).

# `cloudbuildv2Repository` Submodule <a name="`cloudbuildv2Repository` Submodule" id="@cdktf/provider-google.cloudbuildv2Repository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloudbuildv2Repository <a name="Cloudbuildv2Repository" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository google_cloudbuildv2_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuildv2_repository

cloudbuildv2Repository.Cloudbuildv2Repository(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  parent_connection: str,
  remote_uri: str,
  annotations: typing.Mapping[str] = None,
  id: str = None,
  location: str = None,
  project: str = None,
  timeouts: Cloudbuildv2RepositoryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the repository. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.parentConnection">parent_connection</a></code> | <code>str</code> | The connection for the resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.remoteUri">remote_uri</a></code> | <code>str</code> | Required. Git Clone HTTPS URI. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Allows clients to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository#id Cloudbuildv2Repository#id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts">Cloudbuildv2RepositoryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.name"></a>

- *Type:* str

Name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository#name Cloudbuildv2Repository#name}

---

##### `parent_connection`<sup>Required</sup> <a name="parent_connection" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.parentConnection"></a>

- *Type:* str

The connection for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository#parent_connection Cloudbuildv2Repository#parent_connection}

---

##### `remote_uri`<sup>Required</sup> <a name="remote_uri" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.remoteUri"></a>

- *Type:* str

Required. Git Clone HTTPS URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository#remote_uri Cloudbuildv2Repository#remote_uri}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Allows clients to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository#annotations Cloudbuildv2Repository#annotations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository#id Cloudbuildv2Repository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository#location Cloudbuildv2Repository#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.project"></a>

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository#project Cloudbuildv2Repository#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts">Cloudbuildv2RepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository#timeouts Cloudbuildv2Repository#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository#create Cloudbuildv2Repository#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository#delete Cloudbuildv2Repository#delete}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import cloudbuildv2_repository

cloudbuildv2Repository.Cloudbuildv2Repository.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import cloudbuildv2_repository

cloudbuildv2Repository.Cloudbuildv2Repository.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import cloudbuildv2_repository

cloudbuildv2Repository.Cloudbuildv2Repository.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference">Cloudbuildv2RepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.parentConnectionInput">parent_connection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.remoteUriInput">remote_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts">Cloudbuildv2RepositoryTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.parentConnection">parent_connection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.remoteUri">remote_uri</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.timeouts"></a>

```python
timeouts: Cloudbuildv2RepositoryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference">Cloudbuildv2RepositoryTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_connection_input`<sup>Optional</sup> <a name="parent_connection_input" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.parentConnectionInput"></a>

```python
parent_connection_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `remote_uri_input`<sup>Optional</sup> <a name="remote_uri_input" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.remoteUriInput"></a>

```python
remote_uri_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, Cloudbuildv2RepositoryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts">Cloudbuildv2RepositoryTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_connection`<sup>Required</sup> <a name="parent_connection" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.parentConnection"></a>

```python
parent_connection: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `remote_uri`<sup>Required</sup> <a name="remote_uri" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.remoteUri"></a>

```python
remote_uri: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2Repository.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Cloudbuildv2RepositoryConfig <a name="Cloudbuildv2RepositoryConfig" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuildv2_repository

cloudbuildv2Repository.Cloudbuildv2RepositoryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  parent_connection: str,
  remote_uri: str,
  annotations: typing.Mapping[str] = None,
  id: str = None,
  location: str = None,
  project: str = None,
  timeouts: Cloudbuildv2RepositoryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.name">name</a></code> | <code>str</code> | Name of the repository. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.parentConnection">parent_connection</a></code> | <code>str</code> | The connection for the resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.remoteUri">remote_uri</a></code> | <code>str</code> | Required. Git Clone HTTPS URI. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Allows clients to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository#id Cloudbuildv2Repository#id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts">Cloudbuildv2RepositoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository#name Cloudbuildv2Repository#name}

---

##### `parent_connection`<sup>Required</sup> <a name="parent_connection" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.parentConnection"></a>

```python
parent_connection: str
```

- *Type:* str

The connection for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository#parent_connection Cloudbuildv2Repository#parent_connection}

---

##### `remote_uri`<sup>Required</sup> <a name="remote_uri" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.remoteUri"></a>

```python
remote_uri: str
```

- *Type:* str

Required. Git Clone HTTPS URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository#remote_uri Cloudbuildv2Repository#remote_uri}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Allows clients to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository#annotations Cloudbuildv2Repository#annotations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository#id Cloudbuildv2Repository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository#location Cloudbuildv2Repository#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository#project Cloudbuildv2Repository#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryConfig.property.timeouts"></a>

```python
timeouts: Cloudbuildv2RepositoryTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts">Cloudbuildv2RepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository#timeouts Cloudbuildv2Repository#timeouts}

---

### Cloudbuildv2RepositoryTimeouts <a name="Cloudbuildv2RepositoryTimeouts" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuildv2_repository

cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository#create Cloudbuildv2Repository#create}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository#delete Cloudbuildv2Repository#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository#create Cloudbuildv2Repository#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/cloudbuildv2_repository#delete Cloudbuildv2Repository#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Cloudbuildv2RepositoryTimeoutsOutputReference <a name="Cloudbuildv2RepositoryTimeoutsOutputReference" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuildv2_repository

cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts">Cloudbuildv2RepositoryTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Cloudbuildv2RepositoryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.cloudbuildv2Repository.Cloudbuildv2RepositoryTimeouts">Cloudbuildv2RepositoryTimeouts</a>]

---



