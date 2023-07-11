# `google_folder_iam_audit_config`

Refer to the Terraform Registory for docs: [`google_folder_iam_audit_config`](https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/folder_iam_audit_config).

# `folderIamAuditConfig` Submodule <a name="`folderIamAuditConfig` Submodule" id="@cdktf/provider-google.folderIamAuditConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FolderIamAuditConfig <a name="FolderIamAuditConfig" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/folder_iam_audit_config google_folder_iam_audit_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import folder_iam_audit_config

folderIamAuditConfig.FolderIamAuditConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  audit_log_config: typing.Union[IResolvable, typing.List[FolderIamAuditConfigAuditLogConfig]],
  folder: str,
  service: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.auditLogConfig">audit_log_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig">FolderIamAuditConfigAuditLogConfig</a>]]</code> | audit_log_config block. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.folder">folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/folder_iam_audit_config#folder FolderIamAuditConfig#folder}. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.service">service</a></code> | <code>str</code> | Service which will be enabled for audit logging. The special value allServices covers all services. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/folder_iam_audit_config#id FolderIamAuditConfig#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `audit_log_config`<sup>Required</sup> <a name="audit_log_config" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.auditLogConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig">FolderIamAuditConfigAuditLogConfig</a>]]

audit_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/folder_iam_audit_config#audit_log_config FolderIamAuditConfig#audit_log_config}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.folder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/folder_iam_audit_config#folder FolderIamAuditConfig#folder}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.service"></a>

- *Type:* str

Service which will be enabled for audit logging. The special value allServices covers all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/folder_iam_audit_config#service FolderIamAuditConfig#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/folder_iam_audit_config#id FolderIamAuditConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.putAuditLogConfig">put_audit_log_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_audit_log_config` <a name="put_audit_log_config" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.putAuditLogConfig"></a>

```python
def put_audit_log_config(
  value: typing.Union[IResolvable, typing.List[FolderIamAuditConfigAuditLogConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.putAuditLogConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig">FolderIamAuditConfigAuditLogConfig</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import folder_iam_audit_config

folderIamAuditConfig.FolderIamAuditConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import folder_iam_audit_config

folderIamAuditConfig.FolderIamAuditConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import folder_iam_audit_config

folderIamAuditConfig.FolderIamAuditConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.auditLogConfig">audit_log_config</a></code> | <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList">FolderIamAuditConfigAuditLogConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.auditLogConfigInput">audit_log_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig">FolderIamAuditConfigAuditLogConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.service">service</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `audit_log_config`<sup>Required</sup> <a name="audit_log_config" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.auditLogConfig"></a>

```python
audit_log_config: FolderIamAuditConfigAuditLogConfigList
```

- *Type:* <a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList">FolderIamAuditConfigAuditLogConfigList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `audit_log_config_input`<sup>Optional</sup> <a name="audit_log_config_input" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.auditLogConfigInput"></a>

```python
audit_log_config_input: typing.Union[IResolvable, typing.List[FolderIamAuditConfigAuditLogConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig">FolderIamAuditConfigAuditLogConfig</a>]]

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.service"></a>

```python
service: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FolderIamAuditConfigAuditLogConfig <a name="FolderIamAuditConfigAuditLogConfig" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import folder_iam_audit_config

folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig(
  log_type: str,
  exempted_members: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig.property.logType">log_type</a></code> | <code>str</code> | Permission type for which logging is to be configured. Must be one of DATA_READ, DATA_WRITE, or ADMIN_READ. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig.property.exemptedMembers">exempted_members</a></code> | <code>typing.List[str]</code> | Identities that do not cause logging for this type of permission. |

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig.property.logType"></a>

```python
log_type: str
```

- *Type:* str

Permission type for which logging is to be configured. Must be one of DATA_READ, DATA_WRITE, or ADMIN_READ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/folder_iam_audit_config#log_type FolderIamAuditConfig#log_type}

---

##### `exempted_members`<sup>Optional</sup> <a name="exempted_members" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig.property.exemptedMembers"></a>

```python
exempted_members: typing.List[str]
```

- *Type:* typing.List[str]

Identities that do not cause logging for this type of permission.

Each entry can have one of the following values:user:{emailid}: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com. serviceAccount:{emailid}: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/folder_iam_audit_config#exempted_members FolderIamAuditConfig#exempted_members}

---

### FolderIamAuditConfigConfig <a name="FolderIamAuditConfigConfig" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import folder_iam_audit_config

folderIamAuditConfig.FolderIamAuditConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  audit_log_config: typing.Union[IResolvable, typing.List[FolderIamAuditConfigAuditLogConfig]],
  folder: str,
  service: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.auditLogConfig">audit_log_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig">FolderIamAuditConfigAuditLogConfig</a>]]</code> | audit_log_config block. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.folder">folder</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/folder_iam_audit_config#folder FolderIamAuditConfig#folder}. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.service">service</a></code> | <code>str</code> | Service which will be enabled for audit logging. The special value allServices covers all services. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/folder_iam_audit_config#id FolderIamAuditConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `audit_log_config`<sup>Required</sup> <a name="audit_log_config" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.auditLogConfig"></a>

```python
audit_log_config: typing.Union[IResolvable, typing.List[FolderIamAuditConfigAuditLogConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig">FolderIamAuditConfigAuditLogConfig</a>]]

audit_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/folder_iam_audit_config#audit_log_config FolderIamAuditConfig#audit_log_config}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/folder_iam_audit_config#folder FolderIamAuditConfig#folder}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.service"></a>

```python
service: str
```

- *Type:* str

Service which will be enabled for audit logging. The special value allServices covers all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/folder_iam_audit_config#service FolderIamAuditConfig#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.0/docs/resources/folder_iam_audit_config#id FolderIamAuditConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### FolderIamAuditConfigAuditLogConfigList <a name="FolderIamAuditConfigAuditLogConfigList" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import folder_iam_audit_config

folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FolderIamAuditConfigAuditLogConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig">FolderIamAuditConfigAuditLogConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FolderIamAuditConfigAuditLogConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig">FolderIamAuditConfigAuditLogConfig</a>]]

---


### FolderIamAuditConfigAuditLogConfigOutputReference <a name="FolderIamAuditConfigAuditLogConfigOutputReference" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import folder_iam_audit_config

folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.resetExemptedMembers">reset_exempted_members</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exempted_members` <a name="reset_exempted_members" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.resetExemptedMembers"></a>

```python
def reset_exempted_members() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembersInput">exempted_members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.logTypeInput">log_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembers">exempted_members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.logType">log_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig">FolderIamAuditConfigAuditLogConfig</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exempted_members_input`<sup>Optional</sup> <a name="exempted_members_input" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembersInput"></a>

```python
exempted_members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `log_type_input`<sup>Optional</sup> <a name="log_type_input" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.logTypeInput"></a>

```python
log_type_input: str
```

- *Type:* str

---

##### `exempted_members`<sup>Required</sup> <a name="exempted_members" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembers"></a>

```python
exempted_members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.logType"></a>

```python
log_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FolderIamAuditConfigAuditLogConfig]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.folderIamAuditConfig.FolderIamAuditConfigAuditLogConfig">FolderIamAuditConfigAuditLogConfig</a>]

---



