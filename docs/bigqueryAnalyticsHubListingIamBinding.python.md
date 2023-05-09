# `google_bigquery_analytics_hub_listing_iam_binding`

Refer to the Terraform Registory for docs: [`google_bigquery_analytics_hub_listing_iam_binding`](https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding).

# `bigqueryAnalyticsHubListingIamBinding` Submodule <a name="`bigqueryAnalyticsHubListingIamBinding` Submodule" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryAnalyticsHubListingIamBinding <a name="BigqueryAnalyticsHubListingIamBinding" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding google_bigquery_analytics_hub_listing_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_listing_iam_binding

bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_exchange_id: str,
  listing_id: str,
  members: typing.List[str],
  role: str,
  condition: BigqueryAnalyticsHubListingIamBindingCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#data_exchange_id BigqueryAnalyticsHubListingIamBinding#data_exchange_id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.listingId">listing_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#listing_id BigqueryAnalyticsHubListingIamBinding#listing_id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#members BigqueryAnalyticsHubListingIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#role BigqueryAnalyticsHubListingIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition">BigqueryAnalyticsHubListingIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#id BigqueryAnalyticsHubListingIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#location BigqueryAnalyticsHubListingIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#project BigqueryAnalyticsHubListingIamBinding#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.dataExchangeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#data_exchange_id BigqueryAnalyticsHubListingIamBinding#data_exchange_id}.

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.listingId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#listing_id BigqueryAnalyticsHubListingIamBinding#listing_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.members"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#members BigqueryAnalyticsHubListingIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#role BigqueryAnalyticsHubListingIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition">BigqueryAnalyticsHubListingIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#condition BigqueryAnalyticsHubListingIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#id BigqueryAnalyticsHubListingIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#location BigqueryAnalyticsHubListingIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#project BigqueryAnalyticsHubListingIamBinding#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#expression BigqueryAnalyticsHubListingIamBinding#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#title BigqueryAnalyticsHubListingIamBinding#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#description BigqueryAnalyticsHubListingIamBinding#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_listing_iam_binding

bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_listing_iam_binding

bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_listing_iam_binding

bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference">BigqueryAnalyticsHubListingIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition">BigqueryAnalyticsHubListingIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.dataExchangeIdInput">data_exchange_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.listingIdInput">listing_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.listingId">listing_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.condition"></a>

```python
condition: BigqueryAnalyticsHubListingIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference">BigqueryAnalyticsHubListingIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.conditionInput"></a>

```python
condition_input: BigqueryAnalyticsHubListingIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition">BigqueryAnalyticsHubListingIamBindingCondition</a>

---

##### `data_exchange_id_input`<sup>Optional</sup> <a name="data_exchange_id_input" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.dataExchangeIdInput"></a>

```python
data_exchange_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listing_id_input`<sup>Optional</sup> <a name="listing_id_input" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.listingIdInput"></a>

```python
listing_id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.dataExchangeId"></a>

```python
data_exchange_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.listingId"></a>

```python
listing_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryAnalyticsHubListingIamBindingCondition <a name="BigqueryAnalyticsHubListingIamBindingCondition" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_listing_iam_binding

bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#expression BigqueryAnalyticsHubListingIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#title BigqueryAnalyticsHubListingIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#description BigqueryAnalyticsHubListingIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#expression BigqueryAnalyticsHubListingIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#title BigqueryAnalyticsHubListingIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#description BigqueryAnalyticsHubListingIamBinding#description}.

---

### BigqueryAnalyticsHubListingIamBindingConfig <a name="BigqueryAnalyticsHubListingIamBindingConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_listing_iam_binding

bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_exchange_id: str,
  listing_id: str,
  members: typing.List[str],
  role: str,
  condition: BigqueryAnalyticsHubListingIamBindingCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#data_exchange_id BigqueryAnalyticsHubListingIamBinding#data_exchange_id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.listingId">listing_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#listing_id BigqueryAnalyticsHubListingIamBinding#listing_id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#members BigqueryAnalyticsHubListingIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#role BigqueryAnalyticsHubListingIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition">BigqueryAnalyticsHubListingIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#id BigqueryAnalyticsHubListingIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#location BigqueryAnalyticsHubListingIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#project BigqueryAnalyticsHubListingIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.dataExchangeId"></a>

```python
data_exchange_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#data_exchange_id BigqueryAnalyticsHubListingIamBinding#data_exchange_id}.

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.listingId"></a>

```python
listing_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#listing_id BigqueryAnalyticsHubListingIamBinding#listing_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#members BigqueryAnalyticsHubListingIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#role BigqueryAnalyticsHubListingIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.condition"></a>

```python
condition: BigqueryAnalyticsHubListingIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition">BigqueryAnalyticsHubListingIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#condition BigqueryAnalyticsHubListingIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#id BigqueryAnalyticsHubListingIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#location BigqueryAnalyticsHubListingIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.64.0/docs/resources/bigquery_analytics_hub_listing_iam_binding#project BigqueryAnalyticsHubListingIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryAnalyticsHubListingIamBindingConditionOutputReference <a name="BigqueryAnalyticsHubListingIamBindingConditionOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigquery_analytics_hub_listing_iam_binding

bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition">BigqueryAnalyticsHubListingIamBindingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryAnalyticsHubListingIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition">BigqueryAnalyticsHubListingIamBindingCondition</a>

---



