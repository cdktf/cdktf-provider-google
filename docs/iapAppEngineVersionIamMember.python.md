# `iapAppEngineVersionIamMember` Submodule <a name="`iapAppEngineVersionIamMember` Submodule" id="@cdktf/provider-google.iapAppEngineVersionIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapAppEngineVersionIamMember <a name="IapAppEngineVersionIamMember" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member google_iap_app_engine_version_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_app_engine_version_iam_member

iapAppEngineVersionIamMember.IapAppEngineVersionIamMember(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_id: str,
  member: str,
  role: str,
  service: str,
  version_id: str,
  condition: IapAppEngineVersionIamMemberCondition = None,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#app_id IapAppEngineVersionIamMember#app_id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#member IapAppEngineVersionIamMember#member}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#role IapAppEngineVersionIamMember#role}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#service IapAppEngineVersionIamMember#service}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.versionId">version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#version_id IapAppEngineVersionIamMember#version_id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberCondition">IapAppEngineVersionIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#id IapAppEngineVersionIamMember#id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#project IapAppEngineVersionIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.appId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#app_id IapAppEngineVersionIamMember#app_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#member IapAppEngineVersionIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#role IapAppEngineVersionIamMember#role}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.service"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#service IapAppEngineVersionIamMember#service}.

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.versionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#version_id IapAppEngineVersionIamMember#version_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberCondition">IapAppEngineVersionIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#condition IapAppEngineVersionIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#id IapAppEngineVersionIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#project IapAppEngineVersionIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#expression IapAppEngineVersionIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#title IapAppEngineVersionIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#description IapAppEngineVersionIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IapAppEngineVersionIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import iap_app_engine_version_iam_member

iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import iap_app_engine_version_iam_member

iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import iap_app_engine_version_iam_member

iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import iap_app_engine_version_iam_member

iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IapAppEngineVersionIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IapAppEngineVersionIamMember to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IapAppEngineVersionIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IapAppEngineVersionIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference">IapAppEngineVersionIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberCondition">IapAppEngineVersionIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.versionIdInput">version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.condition"></a>

```python
condition: IapAppEngineVersionIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference">IapAppEngineVersionIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.conditionInput"></a>

```python
condition_input: IapAppEngineVersionIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberCondition">IapAppEngineVersionIamMemberCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `version_id_input`<sup>Optional</sup> <a name="version_id_input" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.versionIdInput"></a>

```python
version_id_input: str
```

- *Type:* str

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IapAppEngineVersionIamMemberCondition <a name="IapAppEngineVersionIamMemberCondition" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_app_engine_version_iam_member

iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#expression IapAppEngineVersionIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#title IapAppEngineVersionIamMember#title}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#description IapAppEngineVersionIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#expression IapAppEngineVersionIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#title IapAppEngineVersionIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#description IapAppEngineVersionIamMember#description}.

---

### IapAppEngineVersionIamMemberConfig <a name="IapAppEngineVersionIamMemberConfig" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_app_engine_version_iam_member

iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_id: str,
  member: str,
  role: str,
  service: str,
  version_id: str,
  condition: IapAppEngineVersionIamMemberCondition = None,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#app_id IapAppEngineVersionIamMember#app_id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#member IapAppEngineVersionIamMember#member}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#role IapAppEngineVersionIamMember#role}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#service IapAppEngineVersionIamMember#service}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.versionId">version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#version_id IapAppEngineVersionIamMember#version_id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberCondition">IapAppEngineVersionIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#id IapAppEngineVersionIamMember#id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#project IapAppEngineVersionIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.appId"></a>

```python
app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#app_id IapAppEngineVersionIamMember#app_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#member IapAppEngineVersionIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#role IapAppEngineVersionIamMember#role}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.service"></a>

```python
service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#service IapAppEngineVersionIamMember#service}.

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#version_id IapAppEngineVersionIamMember#version_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.condition"></a>

```python
condition: IapAppEngineVersionIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberCondition">IapAppEngineVersionIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#condition IapAppEngineVersionIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#id IapAppEngineVersionIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/iap_app_engine_version_iam_member#project IapAppEngineVersionIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapAppEngineVersionIamMemberConditionOutputReference <a name="IapAppEngineVersionIamMemberConditionOutputReference" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_app_engine_version_iam_member

iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberCondition">IapAppEngineVersionIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: IapAppEngineVersionIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineVersionIamMember.IapAppEngineVersionIamMemberCondition">IapAppEngineVersionIamMemberCondition</a>

---



