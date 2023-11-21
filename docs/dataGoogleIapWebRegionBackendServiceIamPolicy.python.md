# `data_google_iap_web_region_backend_service_iam_policy`

Refer to the Terraform Registory for docs: [`data_google_iap_web_region_backend_service_iam_policy`](https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/data-sources/iap_web_region_backend_service_iam_policy).

# `dataGoogleIapWebRegionBackendServiceIamPolicy` Submodule <a name="`dataGoogleIapWebRegionBackendServiceIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIapWebRegionBackendServiceIamPolicy <a name="DataGoogleIapWebRegionBackendServiceIamPolicy" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/data-sources/iap_web_region_backend_service_iam_policy google_iap_web_region_backend_service_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_iap_web_region_backend_service_iam_policy

dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  web_region_backend_service: str,
  id: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.webRegionBackendService">web_region_backend_service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/data-sources/iap_web_region_backend_service_iam_policy#web_region_backend_service DataGoogleIapWebRegionBackendServiceIamPolicy#web_region_backend_service}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/data-sources/iap_web_region_backend_service_iam_policy#id DataGoogleIapWebRegionBackendServiceIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/data-sources/iap_web_region_backend_service_iam_policy#project DataGoogleIapWebRegionBackendServiceIamPolicy#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/data-sources/iap_web_region_backend_service_iam_policy#region DataGoogleIapWebRegionBackendServiceIamPolicy#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `web_region_backend_service`<sup>Required</sup> <a name="web_region_backend_service" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.webRegionBackendService"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/data-sources/iap_web_region_backend_service_iam_policy#web_region_backend_service DataGoogleIapWebRegionBackendServiceIamPolicy#web_region_backend_service}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/data-sources/iap_web_region_backend_service_iam_policy#id DataGoogleIapWebRegionBackendServiceIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/data-sources/iap_web_region_backend_service_iam_policy#project DataGoogleIapWebRegionBackendServiceIamPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/data-sources/iap_web_region_backend_service_iam_policy#region DataGoogleIapWebRegionBackendServiceIamPolicy#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleIapWebRegionBackendServiceIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_iap_web_region_backend_service_iam_policy

dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_iap_web_region_backend_service_iam_policy

dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_iap_web_region_backend_service_iam_policy

dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_iap_web_region_backend_service_iam_policy

dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleIapWebRegionBackendServiceIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleIapWebRegionBackendServiceIamPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleIapWebRegionBackendServiceIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/data-sources/iap_web_region_backend_service_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleIapWebRegionBackendServiceIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.policyData">policy_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.webRegionBackendServiceInput">web_region_backend_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.webRegionBackendService">web_region_backend_service</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `web_region_backend_service_input`<sup>Optional</sup> <a name="web_region_backend_service_input" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.webRegionBackendServiceInput"></a>

```python
web_region_backend_service_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `web_region_backend_service`<sup>Required</sup> <a name="web_region_backend_service" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.webRegionBackendService"></a>

```python
web_region_backend_service: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIapWebRegionBackendServiceIamPolicyConfig <a name="DataGoogleIapWebRegionBackendServiceIamPolicyConfig" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_iap_web_region_backend_service_iam_policy

dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  web_region_backend_service: str,
  id: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.webRegionBackendService">web_region_backend_service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/data-sources/iap_web_region_backend_service_iam_policy#web_region_backend_service DataGoogleIapWebRegionBackendServiceIamPolicy#web_region_backend_service}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/data-sources/iap_web_region_backend_service_iam_policy#id DataGoogleIapWebRegionBackendServiceIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/data-sources/iap_web_region_backend_service_iam_policy#project DataGoogleIapWebRegionBackendServiceIamPolicy#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/data-sources/iap_web_region_backend_service_iam_policy#region DataGoogleIapWebRegionBackendServiceIamPolicy#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `web_region_backend_service`<sup>Required</sup> <a name="web_region_backend_service" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.webRegionBackendService"></a>

```python
web_region_backend_service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/data-sources/iap_web_region_backend_service_iam_policy#web_region_backend_service DataGoogleIapWebRegionBackendServiceIamPolicy#web_region_backend_service}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/data-sources/iap_web_region_backend_service_iam_policy#id DataGoogleIapWebRegionBackendServiceIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/data-sources/iap_web_region_backend_service_iam_policy#project DataGoogleIapWebRegionBackendServiceIamPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataGoogleIapWebRegionBackendServiceIamPolicy.DataGoogleIapWebRegionBackendServiceIamPolicyConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/data-sources/iap_web_region_backend_service_iam_policy#region DataGoogleIapWebRegionBackendServiceIamPolicy#region}.

---



