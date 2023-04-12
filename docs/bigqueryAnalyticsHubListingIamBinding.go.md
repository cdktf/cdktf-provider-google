# `bigqueryAnalyticsHubListingIamBinding` Submodule <a name="`bigqueryAnalyticsHubListingIamBinding` Submodule" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryAnalyticsHubListingIamBinding <a name="BigqueryAnalyticsHubListingIamBinding" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_listing_iam_binding google_bigquery_analytics_hub_listing_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublistingiambinding"

bigqueryanalyticshublistingiambinding.NewBigqueryAnalyticsHubListingIamBinding(scope Construct, id *string, config BigqueryAnalyticsHubListingIamBindingConfig) BigqueryAnalyticsHubListingIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig">BigqueryAnalyticsHubListingIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig">BigqueryAnalyticsHubListingIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.putCondition"></a>

```go
func PutCondition(value BigqueryAnalyticsHubListingIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition">BigqueryAnalyticsHubListingIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublistingiambinding"

bigqueryanalyticshublistingiambinding.BigqueryAnalyticsHubListingIamBinding_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublistingiambinding"

bigqueryanalyticshublistingiambinding.BigqueryAnalyticsHubListingIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublistingiambinding"

bigqueryanalyticshublistingiambinding.BigqueryAnalyticsHubListingIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference">BigqueryAnalyticsHubListingIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition">BigqueryAnalyticsHubListingIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.dataExchangeIdInput">DataExchangeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.listingIdInput">ListingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.dataExchangeId">DataExchangeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.listingId">ListingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.condition"></a>

```go
func Condition() BigqueryAnalyticsHubListingIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference">BigqueryAnalyticsHubListingIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.conditionInput"></a>

```go
func ConditionInput() BigqueryAnalyticsHubListingIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition">BigqueryAnalyticsHubListingIamBindingCondition</a>

---

##### `DataExchangeIdInput`<sup>Optional</sup> <a name="DataExchangeIdInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.dataExchangeIdInput"></a>

```go
func DataExchangeIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListingIdInput`<sup>Optional</sup> <a name="ListingIdInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.listingIdInput"></a>

```go
func ListingIdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.dataExchangeId"></a>

```go
func DataExchangeId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.listingId"></a>

```go
func ListingId() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryAnalyticsHubListingIamBindingCondition <a name="BigqueryAnalyticsHubListingIamBindingCondition" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublistingiambinding"

&bigqueryanalyticshublistingiambinding.BigqueryAnalyticsHubListingIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_listing_iam_binding#expression BigqueryAnalyticsHubListingIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_listing_iam_binding#title BigqueryAnalyticsHubListingIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_listing_iam_binding#description BigqueryAnalyticsHubListingIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_listing_iam_binding#expression BigqueryAnalyticsHubListingIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_listing_iam_binding#title BigqueryAnalyticsHubListingIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_listing_iam_binding#description BigqueryAnalyticsHubListingIamBinding#description}.

---

### BigqueryAnalyticsHubListingIamBindingConfig <a name="BigqueryAnalyticsHubListingIamBindingConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublistingiambinding"

&bigqueryanalyticshublistingiambinding.BigqueryAnalyticsHubListingIamBindingConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataExchangeId: *string,
	ListingId: *string,
	Members: *[]*string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.dataExchangeId">DataExchangeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_listing_iam_binding#data_exchange_id BigqueryAnalyticsHubListingIamBinding#data_exchange_id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.listingId">ListingId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_listing_iam_binding#listing_id BigqueryAnalyticsHubListingIamBinding#listing_id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_listing_iam_binding#members BigqueryAnalyticsHubListingIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_listing_iam_binding#role BigqueryAnalyticsHubListingIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition">BigqueryAnalyticsHubListingIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_listing_iam_binding#id BigqueryAnalyticsHubListingIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_listing_iam_binding#location BigqueryAnalyticsHubListingIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_listing_iam_binding#project BigqueryAnalyticsHubListingIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.dataExchangeId"></a>

```go
DataExchangeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_listing_iam_binding#data_exchange_id BigqueryAnalyticsHubListingIamBinding#data_exchange_id}.

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.listingId"></a>

```go
ListingId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_listing_iam_binding#listing_id BigqueryAnalyticsHubListingIamBinding#listing_id}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_listing_iam_binding#members BigqueryAnalyticsHubListingIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_listing_iam_binding#role BigqueryAnalyticsHubListingIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.condition"></a>

```go
Condition BigqueryAnalyticsHubListingIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition">BigqueryAnalyticsHubListingIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_listing_iam_binding#condition BigqueryAnalyticsHubListingIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_listing_iam_binding#id BigqueryAnalyticsHubListingIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_listing_iam_binding#location BigqueryAnalyticsHubListingIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_analytics_hub_listing_iam_binding#project BigqueryAnalyticsHubListingIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryAnalyticsHubListingIamBindingConditionOutputReference <a name="BigqueryAnalyticsHubListingIamBindingConditionOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/bigqueryanalyticshublistingiambinding"

bigqueryanalyticshublistingiambinding.NewBigqueryAnalyticsHubListingIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryAnalyticsHubListingIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition">BigqueryAnalyticsHubListingIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryAnalyticsHubListingIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubListingIamBinding.BigqueryAnalyticsHubListingIamBindingCondition">BigqueryAnalyticsHubListingIamBindingCondition</a>

---



