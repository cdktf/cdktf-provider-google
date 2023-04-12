# `bigqueryAnalyticsHubDataExchangeIamBinding` Submodule <a name="`bigqueryAnalyticsHubDataExchangeIamBinding` Submodule" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryAnalyticsHubDataExchangeIamBinding <a name="BigqueryAnalyticsHubDataExchangeIamBinding" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_data_exchange_iam_binding google_bigquery_analytics_hub_data_exchange_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshubdataexchangeiambinding"

bigqueryanalyticshubdataexchangeiambinding.NewBigqueryAnalyticsHubDataExchangeIamBinding(scope Construct, id *string, config BigqueryAnalyticsHubDataExchangeIamBindingConfig) BigqueryAnalyticsHubDataExchangeIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig">BigqueryAnalyticsHubDataExchangeIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig">BigqueryAnalyticsHubDataExchangeIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.putCondition"></a>

```go
func PutCondition(value BigqueryAnalyticsHubDataExchangeIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition">BigqueryAnalyticsHubDataExchangeIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshubdataexchangeiambinding"

bigqueryanalyticshubdataexchangeiambinding.BigqueryAnalyticsHubDataExchangeIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshubdataexchangeiambinding"

bigqueryanalyticshubdataexchangeiambinding.BigqueryAnalyticsHubDataExchangeIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshubdataexchangeiambinding"

bigqueryanalyticshubdataexchangeiambinding.BigqueryAnalyticsHubDataExchangeIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference">BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition">BigqueryAnalyticsHubDataExchangeIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.dataExchangeIdInput">DataExchangeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.dataExchangeId">DataExchangeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.condition"></a>

```go
func Condition() BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference">BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.conditionInput"></a>

```go
func ConditionInput() BigqueryAnalyticsHubDataExchangeIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition">BigqueryAnalyticsHubDataExchangeIamBindingCondition</a>

---

##### `DataExchangeIdInput`<sup>Optional</sup> <a name="DataExchangeIdInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.dataExchangeIdInput"></a>

```go
func DataExchangeIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.dataExchangeId"></a>

```go
func DataExchangeId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryAnalyticsHubDataExchangeIamBindingCondition <a name="BigqueryAnalyticsHubDataExchangeIamBindingCondition" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshubdataexchangeiambinding"

&bigqueryanalyticshubdataexchangeiambinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_data_exchange_iam_binding#expression BigqueryAnalyticsHubDataExchangeIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_data_exchange_iam_binding#title BigqueryAnalyticsHubDataExchangeIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_data_exchange_iam_binding#description BigqueryAnalyticsHubDataExchangeIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_data_exchange_iam_binding#expression BigqueryAnalyticsHubDataExchangeIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_data_exchange_iam_binding#title BigqueryAnalyticsHubDataExchangeIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_data_exchange_iam_binding#description BigqueryAnalyticsHubDataExchangeIamBinding#description}.

---

### BigqueryAnalyticsHubDataExchangeIamBindingConfig <a name="BigqueryAnalyticsHubDataExchangeIamBindingConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshubdataexchangeiambinding"

&bigqueryanalyticshubdataexchangeiambinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataExchangeId: *string,
	Members: *[]*string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.dataExchangeId">DataExchangeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_data_exchange_iam_binding#data_exchange_id BigqueryAnalyticsHubDataExchangeIamBinding#data_exchange_id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_data_exchange_iam_binding#members BigqueryAnalyticsHubDataExchangeIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_data_exchange_iam_binding#role BigqueryAnalyticsHubDataExchangeIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition">BigqueryAnalyticsHubDataExchangeIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_data_exchange_iam_binding#id BigqueryAnalyticsHubDataExchangeIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_data_exchange_iam_binding#location BigqueryAnalyticsHubDataExchangeIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_data_exchange_iam_binding#project BigqueryAnalyticsHubDataExchangeIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.dataExchangeId"></a>

```go
DataExchangeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_data_exchange_iam_binding#data_exchange_id BigqueryAnalyticsHubDataExchangeIamBinding#data_exchange_id}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_data_exchange_iam_binding#members BigqueryAnalyticsHubDataExchangeIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_data_exchange_iam_binding#role BigqueryAnalyticsHubDataExchangeIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.condition"></a>

```go
Condition BigqueryAnalyticsHubDataExchangeIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition">BigqueryAnalyticsHubDataExchangeIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_data_exchange_iam_binding#condition BigqueryAnalyticsHubDataExchangeIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_data_exchange_iam_binding#id BigqueryAnalyticsHubDataExchangeIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_data_exchange_iam_binding#location BigqueryAnalyticsHubDataExchangeIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_data_exchange_iam_binding#project BigqueryAnalyticsHubDataExchangeIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference <a name="BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshubdataexchangeiambinding"

bigqueryanalyticshubdataexchangeiambinding.NewBigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition">BigqueryAnalyticsHubDataExchangeIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryAnalyticsHubDataExchangeIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchangeIamBinding.BigqueryAnalyticsHubDataExchangeIamBindingCondition">BigqueryAnalyticsHubDataExchangeIamBindingCondition</a>

---



