# `google_iap_app_engine_service_iam_member`

Refer to the Terraform Registory for docs: [`google_iap_app_engine_service_iam_member`](https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member).

# `iapAppEngineServiceIamMember` Submodule <a name="`iapAppEngineServiceIamMember` Submodule" id="@cdktf/provider-google.iapAppEngineServiceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapAppEngineServiceIamMember <a name="IapAppEngineServiceIamMember" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member google_iap_app_engine_service_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_app_engine_service_iam_member

iapAppEngineServiceIamMember.IapAppEngineServiceIamMember(
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
  condition: IapAppEngineServiceIamMemberCondition = None,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#app_id IapAppEngineServiceIamMember#app_id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#member IapAppEngineServiceIamMember#member}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#role IapAppEngineServiceIamMember#role}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#service IapAppEngineServiceIamMember#service}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition">IapAppEngineServiceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#id IapAppEngineServiceIamMember#id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#project IapAppEngineServiceIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.appId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#app_id IapAppEngineServiceIamMember#app_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#member IapAppEngineServiceIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#role IapAppEngineServiceIamMember#role}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.service"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#service IapAppEngineServiceIamMember#service}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition">IapAppEngineServiceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#condition IapAppEngineServiceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#id IapAppEngineServiceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#project IapAppEngineServiceIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#expression IapAppEngineServiceIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#title IapAppEngineServiceIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#description IapAppEngineServiceIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import iap_app_engine_service_iam_member

iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import iap_app_engine_service_iam_member

iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import iap_app_engine_service_iam_member

iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference">IapAppEngineServiceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition">IapAppEngineServiceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.service">service</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.condition"></a>

```python
condition: IapAppEngineServiceIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference">IapAppEngineServiceIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.conditionInput"></a>

```python
condition_input: IapAppEngineServiceIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition">IapAppEngineServiceIamMemberCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.service"></a>

```python
service: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IapAppEngineServiceIamMemberCondition <a name="IapAppEngineServiceIamMemberCondition" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_app_engine_service_iam_member

iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#expression IapAppEngineServiceIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#title IapAppEngineServiceIamMember#title}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#description IapAppEngineServiceIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#expression IapAppEngineServiceIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#title IapAppEngineServiceIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#description IapAppEngineServiceIamMember#description}.

---

### IapAppEngineServiceIamMemberConfig <a name="IapAppEngineServiceIamMemberConfig" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_app_engine_service_iam_member

iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig(
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
  condition: IapAppEngineServiceIamMemberCondition = None,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#app_id IapAppEngineServiceIamMember#app_id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#member IapAppEngineServiceIamMember#member}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#role IapAppEngineServiceIamMember#role}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#service IapAppEngineServiceIamMember#service}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition">IapAppEngineServiceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#id IapAppEngineServiceIamMember#id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#project IapAppEngineServiceIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.appId"></a>

```python
app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#app_id IapAppEngineServiceIamMember#app_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#member IapAppEngineServiceIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#role IapAppEngineServiceIamMember#role}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.service"></a>

```python
service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#service IapAppEngineServiceIamMember#service}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.condition"></a>

```python
condition: IapAppEngineServiceIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition">IapAppEngineServiceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#condition IapAppEngineServiceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#id IapAppEngineServiceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/iap_app_engine_service_iam_member#project IapAppEngineServiceIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapAppEngineServiceIamMemberConditionOutputReference <a name="IapAppEngineServiceIamMemberConditionOutputReference" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iap_app_engine_service_iam_member

iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition">IapAppEngineServiceIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: IapAppEngineServiceIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition">IapAppEngineServiceIamMemberCondition</a>

---



