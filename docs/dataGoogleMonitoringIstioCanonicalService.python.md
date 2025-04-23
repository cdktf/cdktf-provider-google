# `dataGoogleMonitoringIstioCanonicalService` Submodule <a name="`dataGoogleMonitoringIstioCanonicalService` Submodule" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleMonitoringIstioCanonicalService <a name="DataGoogleMonitoringIstioCanonicalService" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_istio_canonical_service google_monitoring_istio_canonical_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_istio_canonical_service

dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  canonical_service: str,
  canonical_service_namespace: str,
  mesh_uid: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.canonicalService">canonical_service</a></code> | <code>str</code> | The name of the canonical service underlying this service..                          Corresponds to the destination_service_name metric label in Istio metrics. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.canonicalServiceNamespace">canonical_service_namespace</a></code> | <code>str</code> | The namespace of the canonical service underlying this service. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.meshUid">mesh_uid</a></code> | <code>str</code> | Identifier for the Istio mesh in which this canonical service is defined. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_istio_canonical_service#id DataGoogleMonitoringIstioCanonicalService#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_istio_canonical_service#project DataGoogleMonitoringIstioCanonicalService#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `canonical_service`<sup>Required</sup> <a name="canonical_service" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.canonicalService"></a>

- *Type:* str

The name of the canonical service underlying this service..                          Corresponds to the destination_service_name metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_istio_canonical_service#canonical_service DataGoogleMonitoringIstioCanonicalService#canonical_service}

---

##### `canonical_service_namespace`<sup>Required</sup> <a name="canonical_service_namespace" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.canonicalServiceNamespace"></a>

- *Type:* str

The namespace of the canonical service underlying this service.

Corresponds to the destination_service_namespace metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_istio_canonical_service#canonical_service_namespace DataGoogleMonitoringIstioCanonicalService#canonical_service_namespace}

---

##### `mesh_uid`<sup>Required</sup> <a name="mesh_uid" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.meshUid"></a>

- *Type:* str

Identifier for the Istio mesh in which this canonical service is defined.

Corresponds to the meshUid metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_istio_canonical_service#mesh_uid DataGoogleMonitoringIstioCanonicalService#mesh_uid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_istio_canonical_service#id DataGoogleMonitoringIstioCanonicalService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_istio_canonical_service#project DataGoogleMonitoringIstioCanonicalService#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataGoogleMonitoringIstioCanonicalService resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_istio_canonical_service

dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_istio_canonical_service

dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_istio_canonical_service

dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_istio_canonical_service

dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataGoogleMonitoringIstioCanonicalService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleMonitoringIstioCanonicalService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleMonitoringIstioCanonicalService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_istio_canonical_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleMonitoringIstioCanonicalService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.telemetry">telemetry</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList">DataGoogleMonitoringIstioCanonicalServiceTelemetryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.userLabels">user_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.canonicalServiceInput">canonical_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.canonicalServiceNamespaceInput">canonical_service_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.meshUidInput">mesh_uid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.canonicalService">canonical_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.canonicalServiceNamespace">canonical_service_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.meshUid">mesh_uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

##### `telemetry`<sup>Required</sup> <a name="telemetry" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.telemetry"></a>

```python
telemetry: DataGoogleMonitoringIstioCanonicalServiceTelemetryList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList">DataGoogleMonitoringIstioCanonicalServiceTelemetryList</a>

---

##### `user_labels`<sup>Required</sup> <a name="user_labels" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.userLabels"></a>

```python
user_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `canonical_service_input`<sup>Optional</sup> <a name="canonical_service_input" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.canonicalServiceInput"></a>

```python
canonical_service_input: str
```

- *Type:* str

---

##### `canonical_service_namespace_input`<sup>Optional</sup> <a name="canonical_service_namespace_input" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.canonicalServiceNamespaceInput"></a>

```python
canonical_service_namespace_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mesh_uid_input`<sup>Optional</sup> <a name="mesh_uid_input" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.meshUidInput"></a>

```python
mesh_uid_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `canonical_service`<sup>Required</sup> <a name="canonical_service" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.canonicalService"></a>

```python
canonical_service: str
```

- *Type:* str

---

##### `canonical_service_namespace`<sup>Required</sup> <a name="canonical_service_namespace" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.canonicalServiceNamespace"></a>

```python
canonical_service_namespace: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mesh_uid`<sup>Required</sup> <a name="mesh_uid" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.meshUid"></a>

```python
mesh_uid: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleMonitoringIstioCanonicalServiceConfig <a name="DataGoogleMonitoringIstioCanonicalServiceConfig" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_istio_canonical_service

dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  canonical_service: str,
  canonical_service_namespace: str,
  mesh_uid: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.canonicalService">canonical_service</a></code> | <code>str</code> | The name of the canonical service underlying this service..                          Corresponds to the destination_service_name metric label in Istio metrics. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.canonicalServiceNamespace">canonical_service_namespace</a></code> | <code>str</code> | The namespace of the canonical service underlying this service. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.meshUid">mesh_uid</a></code> | <code>str</code> | Identifier for the Istio mesh in which this canonical service is defined. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_istio_canonical_service#id DataGoogleMonitoringIstioCanonicalService#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_istio_canonical_service#project DataGoogleMonitoringIstioCanonicalService#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `canonical_service`<sup>Required</sup> <a name="canonical_service" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.canonicalService"></a>

```python
canonical_service: str
```

- *Type:* str

The name of the canonical service underlying this service..                          Corresponds to the destination_service_name metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_istio_canonical_service#canonical_service DataGoogleMonitoringIstioCanonicalService#canonical_service}

---

##### `canonical_service_namespace`<sup>Required</sup> <a name="canonical_service_namespace" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.canonicalServiceNamespace"></a>

```python
canonical_service_namespace: str
```

- *Type:* str

The namespace of the canonical service underlying this service.

Corresponds to the destination_service_namespace metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_istio_canonical_service#canonical_service_namespace DataGoogleMonitoringIstioCanonicalService#canonical_service_namespace}

---

##### `mesh_uid`<sup>Required</sup> <a name="mesh_uid" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.meshUid"></a>

```python
mesh_uid: str
```

- *Type:* str

Identifier for the Istio mesh in which this canonical service is defined.

Corresponds to the meshUid metric label in Istio metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_istio_canonical_service#mesh_uid DataGoogleMonitoringIstioCanonicalService#mesh_uid}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_istio_canonical_service#id DataGoogleMonitoringIstioCanonicalService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/data-sources/monitoring_istio_canonical_service#project DataGoogleMonitoringIstioCanonicalService#project}.

---

### DataGoogleMonitoringIstioCanonicalServiceTelemetry <a name="DataGoogleMonitoringIstioCanonicalServiceTelemetry" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetry.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_istio_canonical_service

dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetry()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleMonitoringIstioCanonicalServiceTelemetryList <a name="DataGoogleMonitoringIstioCanonicalServiceTelemetryList" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_istio_canonical_service

dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference <a name="DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_google_monitoring_istio_canonical_service

dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetry">DataGoogleMonitoringIstioCanonicalServiceTelemetry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetryOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleMonitoringIstioCanonicalServiceTelemetry
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringIstioCanonicalService.DataGoogleMonitoringIstioCanonicalServiceTelemetry">DataGoogleMonitoringIstioCanonicalServiceTelemetry</a>

---



