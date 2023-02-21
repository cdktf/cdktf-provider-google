# `iapTunnelInstanceIamBinding` Submodule <a name="`iapTunnelInstanceIamBinding` Submodule" id="@cdktf/provider-google.iapTunnelInstanceIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapTunnelInstanceIamBinding <a name="IapTunnelInstanceIamBinding" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding google_iap_tunnel_instance_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_tunnel_instance_iam_binding

iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance: str,
  members: typing.List[str],
  role: str,
  condition: IapTunnelInstanceIamBindingCondition = None,
  id: str = None,
  project: str = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.instance">instance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#instance IapTunnelInstanceIamBinding#instance}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#members IapTunnelInstanceIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#role IapTunnelInstanceIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition">IapTunnelInstanceIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#id IapTunnelInstanceIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#project IapTunnelInstanceIamBinding#project}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#zone IapTunnelInstanceIamBinding#zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.instance"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#instance IapTunnelInstanceIamBinding#instance}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.members"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#members IapTunnelInstanceIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#role IapTunnelInstanceIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition">IapTunnelInstanceIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#condition IapTunnelInstanceIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#id IapTunnelInstanceIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#project IapTunnelInstanceIamBinding#project}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.Initializer.parameter.zone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#zone IapTunnelInstanceIamBinding#zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#expression IapTunnelInstanceIamBinding#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#title IapTunnelInstanceIamBinding#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#description IapTunnelInstanceIamBinding#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import iap_tunnel_instance_iam_binding

iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import iap_tunnel_instance_iam_binding

iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import iap_tunnel_instance_iam_binding

iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference">IapTunnelInstanceIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition">IapTunnelInstanceIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.condition"></a>

```python
condition: IapTunnelInstanceIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference">IapTunnelInstanceIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.conditionInput"></a>

```python
condition_input: IapTunnelInstanceIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition">IapTunnelInstanceIamBindingCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IapTunnelInstanceIamBindingCondition <a name="IapTunnelInstanceIamBindingCondition" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_tunnel_instance_iam_binding

iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#expression IapTunnelInstanceIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#title IapTunnelInstanceIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#description IapTunnelInstanceIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#expression IapTunnelInstanceIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#title IapTunnelInstanceIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#description IapTunnelInstanceIamBinding#description}.

---

### IapTunnelInstanceIamBindingConfig <a name="IapTunnelInstanceIamBindingConfig" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_tunnel_instance_iam_binding

iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance: str,
  members: typing.List[str],
  role: str,
  condition: IapTunnelInstanceIamBindingCondition = None,
  id: str = None,
  project: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.instance">instance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#instance IapTunnelInstanceIamBinding#instance}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#members IapTunnelInstanceIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#role IapTunnelInstanceIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition">IapTunnelInstanceIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#id IapTunnelInstanceIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#project IapTunnelInstanceIamBinding#project}. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#zone IapTunnelInstanceIamBinding#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#instance IapTunnelInstanceIamBinding#instance}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#members IapTunnelInstanceIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#role IapTunnelInstanceIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.condition"></a>

```python
condition: IapTunnelInstanceIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition">IapTunnelInstanceIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#condition IapTunnelInstanceIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#id IapTunnelInstanceIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#project IapTunnelInstanceIamBinding#project}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_tunnel_instance_iam_binding#zone IapTunnelInstanceIamBinding#zone}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapTunnelInstanceIamBindingConditionOutputReference <a name="IapTunnelInstanceIamBindingConditionOutputReference" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_tunnel_instance_iam_binding

iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition">IapTunnelInstanceIamBindingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingConditionOutputReference.property.internalValue"></a>

```python
internal_value: IapTunnelInstanceIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.iapTunnelInstanceIamBinding.IapTunnelInstanceIamBindingCondition">IapTunnelInstanceIamBindingCondition</a>

---



