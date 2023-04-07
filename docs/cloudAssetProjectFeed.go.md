# `cloudAssetProjectFeed` Submodule <a name="`cloudAssetProjectFeed` Submodule" id="@cdktf/provider-google.cloudAssetProjectFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAssetProjectFeed <a name="CloudAssetProjectFeed" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed google_cloud_asset_project_feed}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetprojectfeed"

cloudassetprojectfeed.NewCloudAssetProjectFeed(scope Construct, id *string, config CloudAssetProjectFeedConfig) CloudAssetProjectFeed
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig">CloudAssetProjectFeedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig">CloudAssetProjectFeedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putFeedOutputConfig">PutFeedOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetAssetNames">ResetAssetNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetAssetTypes">ResetAssetTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetBillingProject">ResetBillingProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putCondition"></a>

```go
func PutCondition(value CloudAssetProjectFeedCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition">CloudAssetProjectFeedCondition</a>

---

##### `PutFeedOutputConfig` <a name="PutFeedOutputConfig" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putFeedOutputConfig"></a>

```go
func PutFeedOutputConfig(value CloudAssetProjectFeedFeedOutputConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putFeedOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig">CloudAssetProjectFeedFeedOutputConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putTimeouts"></a>

```go
func PutTimeouts(value CloudAssetProjectFeedTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts">CloudAssetProjectFeedTimeouts</a>

---

##### `ResetAssetNames` <a name="ResetAssetNames" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetAssetNames"></a>

```go
func ResetAssetNames()
```

##### `ResetAssetTypes` <a name="ResetAssetTypes" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetAssetTypes"></a>

```go
func ResetAssetTypes()
```

##### `ResetBillingProject` <a name="ResetBillingProject" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetBillingProject"></a>

```go
func ResetBillingProject()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetContentType"></a>

```go
func ResetContentType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetprojectfeed"

cloudassetprojectfeed.CloudAssetProjectFeed_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetprojectfeed"

cloudassetprojectfeed.CloudAssetProjectFeed_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetprojectfeed"

cloudassetprojectfeed.CloudAssetProjectFeed_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference">CloudAssetProjectFeedConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.feedOutputConfig">FeedOutputConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference">CloudAssetProjectFeedFeedOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference">CloudAssetProjectFeedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.assetNamesInput">AssetNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.assetTypesInput">AssetTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.billingProjectInput">BillingProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition">CloudAssetProjectFeedCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.feedIdInput">FeedIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.feedOutputConfigInput">FeedOutputConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig">CloudAssetProjectFeedFeedOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.assetNames">AssetNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.assetTypes">AssetTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.billingProject">BillingProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.feedId">FeedId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.condition"></a>

```go
func Condition() CloudAssetProjectFeedConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference">CloudAssetProjectFeedConditionOutputReference</a>

---

##### `FeedOutputConfig`<sup>Required</sup> <a name="FeedOutputConfig" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.feedOutputConfig"></a>

```go
func FeedOutputConfig() CloudAssetProjectFeedFeedOutputConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference">CloudAssetProjectFeedFeedOutputConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.timeouts"></a>

```go
func Timeouts() CloudAssetProjectFeedTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference">CloudAssetProjectFeedTimeoutsOutputReference</a>

---

##### `AssetNamesInput`<sup>Optional</sup> <a name="AssetNamesInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.assetNamesInput"></a>

```go
func AssetNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AssetTypesInput`<sup>Optional</sup> <a name="AssetTypesInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.assetTypesInput"></a>

```go
func AssetTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BillingProjectInput`<sup>Optional</sup> <a name="BillingProjectInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.billingProjectInput"></a>

```go
func BillingProjectInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.conditionInput"></a>

```go
func ConditionInput() CloudAssetProjectFeedCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition">CloudAssetProjectFeedCondition</a>

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `FeedIdInput`<sup>Optional</sup> <a name="FeedIdInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.feedIdInput"></a>

```go
func FeedIdInput() *string
```

- *Type:* *string

---

##### `FeedOutputConfigInput`<sup>Optional</sup> <a name="FeedOutputConfigInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.feedOutputConfigInput"></a>

```go
func FeedOutputConfigInput() CloudAssetProjectFeedFeedOutputConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig">CloudAssetProjectFeedFeedOutputConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AssetNames`<sup>Required</sup> <a name="AssetNames" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.assetNames"></a>

```go
func AssetNames() *[]*string
```

- *Type:* *[]*string

---

##### `AssetTypes`<sup>Required</sup> <a name="AssetTypes" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.assetTypes"></a>

```go
func AssetTypes() *[]*string
```

- *Type:* *[]*string

---

##### `BillingProject`<sup>Required</sup> <a name="BillingProject" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.billingProject"></a>

```go
func BillingProject() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `FeedId`<sup>Required</sup> <a name="FeedId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.feedId"></a>

```go
func FeedId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeed.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAssetProjectFeedCondition <a name="CloudAssetProjectFeedCondition" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetprojectfeed"

&cloudassetprojectfeed.CloudAssetProjectFeedCondition {
	Expression: *string,
	Description: *string,
	Location: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.property.description">Description</a></code> | <code>*string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.property.location">Location</a></code> | <code>*string</code> | String indicating the location of the expression for error reporting, e.g. a file  name and a position in the file. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.property.title">Title</a></code> | <code>*string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#expression CloudAssetProjectFeed#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#description CloudAssetProjectFeed#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.property.location"></a>

```go
Location *string
```

- *Type:* *string

String indicating the location of the expression for error reporting, e.g. a file  name and a position in the file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#location CloudAssetProjectFeed#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#title CloudAssetProjectFeed#title}

---

### CloudAssetProjectFeedConfig <a name="CloudAssetProjectFeedConfig" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetprojectfeed"

&cloudassetprojectfeed.CloudAssetProjectFeedConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FeedId: *string,
	FeedOutputConfig: github.com/cdktf/cdktf-provider-google-go/google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig,
	AssetNames: *[]*string,
	AssetTypes: *[]*string,
	BillingProject: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition,
	ContentType: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.feedId">FeedId</a></code> | <code>*string</code> | This is the client-assigned asset feed identifier and it needs to be unique under a specific parent. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.feedOutputConfig">FeedOutputConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig">CloudAssetProjectFeedFeedOutputConfig</a></code> | feed_output_config block. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.assetNames">AssetNames</a></code> | <code>*[]*string</code> | A list of the full names of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.assetTypes">AssetTypes</a></code> | <code>*[]*string</code> | A list of types of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.billingProject">BillingProject</a></code> | <code>*string</code> | The project whose identity will be used when sending messages to the destination pubsub topic. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition">CloudAssetProjectFeedCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.contentType">ContentType</a></code> | <code>*string</code> | Asset content type. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#id CloudAssetProjectFeed#id}. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#project CloudAssetProjectFeed#project}. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts">CloudAssetProjectFeedTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FeedId`<sup>Required</sup> <a name="FeedId" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.feedId"></a>

```go
FeedId *string
```

- *Type:* *string

This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#feed_id CloudAssetProjectFeed#feed_id}

---

##### `FeedOutputConfig`<sup>Required</sup> <a name="FeedOutputConfig" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.feedOutputConfig"></a>

```go
FeedOutputConfig CloudAssetProjectFeedFeedOutputConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig">CloudAssetProjectFeedFeedOutputConfig</a>

feed_output_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#feed_output_config CloudAssetProjectFeed#feed_output_config}

---

##### `AssetNames`<sup>Optional</sup> <a name="AssetNames" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.assetNames"></a>

```go
AssetNames *[]*string
```

- *Type:* *[]*string

A list of the full names of the assets to receive updates.

You must specify either or both of
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#asset_names CloudAssetProjectFeed#asset_names}

---

##### `AssetTypes`<sup>Optional</sup> <a name="AssetTypes" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.assetTypes"></a>

```go
AssetTypes *[]*string
```

- *Type:* *[]*string

A list of types of the assets to receive updates.

You must specify either or both of assetNames
and assetTypes. Only asset updates matching specified assetNames and assetTypes are exported to
the feed. For example: "compute.googleapis.com/Disk"
See https://cloud.google.com/asset-inventory/docs/supported-asset-types for a list of all
supported asset types.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#asset_types CloudAssetProjectFeed#asset_types}

---

##### `BillingProject`<sup>Optional</sup> <a name="BillingProject" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.billingProject"></a>

```go
BillingProject *string
```

- *Type:* *string

The project whose identity will be used when sending messages to the destination pubsub topic.

It also specifies the project for API
enablement check, quota, and billing. If not specified, the resource's
project will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#billing_project CloudAssetProjectFeed#billing_project}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.condition"></a>

```go
Condition CloudAssetProjectFeedCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition">CloudAssetProjectFeedCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#condition CloudAssetProjectFeed#condition}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Asset content type.

If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "ACCESS_POLICY"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#content_type CloudAssetProjectFeed#content_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#id CloudAssetProjectFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#project CloudAssetProjectFeed#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConfig.property.timeouts"></a>

```go
Timeouts CloudAssetProjectFeedTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts">CloudAssetProjectFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#timeouts CloudAssetProjectFeed#timeouts}

---

### CloudAssetProjectFeedFeedOutputConfig <a name="CloudAssetProjectFeedFeedOutputConfig" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetprojectfeed"

&cloudassetprojectfeed.CloudAssetProjectFeedFeedOutputConfig {
	PubsubDestination: github.com/cdktf/cdktf-provider-google-go/google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig.property.pubsubDestination">PubsubDestination</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination">CloudAssetProjectFeedFeedOutputConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `PubsubDestination`<sup>Required</sup> <a name="PubsubDestination" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig.property.pubsubDestination"></a>

```go
PubsubDestination CloudAssetProjectFeedFeedOutputConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination">CloudAssetProjectFeedFeedOutputConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#pubsub_destination CloudAssetProjectFeed#pubsub_destination}

---

### CloudAssetProjectFeedFeedOutputConfigPubsubDestination <a name="CloudAssetProjectFeedFeedOutputConfigPubsubDestination" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetprojectfeed"

&cloudassetprojectfeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination {
	Topic: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination.property.topic">Topic</a></code> | <code>*string</code> | Destination on Cloud Pubsub topic. |

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination.property.topic"></a>

```go
Topic *string
```

- *Type:* *string

Destination on Cloud Pubsub topic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#topic CloudAssetProjectFeed#topic}

---

### CloudAssetProjectFeedTimeouts <a name="CloudAssetProjectFeedTimeouts" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetprojectfeed"

&cloudassetprojectfeed.CloudAssetProjectFeedTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#create CloudAssetProjectFeed#create}. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#delete CloudAssetProjectFeed#delete}. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#update CloudAssetProjectFeed#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#create CloudAssetProjectFeed#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#delete CloudAssetProjectFeed#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_project_feed#update CloudAssetProjectFeed#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudAssetProjectFeedConditionOutputReference <a name="CloudAssetProjectFeedConditionOutputReference" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetprojectfeed"

cloudassetprojectfeed.NewCloudAssetProjectFeedConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudAssetProjectFeedConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition">CloudAssetProjectFeedCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudAssetProjectFeedCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedCondition">CloudAssetProjectFeedCondition</a>

---


### CloudAssetProjectFeedFeedOutputConfigOutputReference <a name="CloudAssetProjectFeedFeedOutputConfigOutputReference" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetprojectfeed"

cloudassetprojectfeed.NewCloudAssetProjectFeedFeedOutputConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudAssetProjectFeedFeedOutputConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.putPubsubDestination">PutPubsubDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPubsubDestination` <a name="PutPubsubDestination" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.putPubsubDestination"></a>

```go
func PutPubsubDestination(value CloudAssetProjectFeedFeedOutputConfigPubsubDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.putPubsubDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination">CloudAssetProjectFeedFeedOutputConfigPubsubDestination</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.pubsubDestination">PubsubDestination</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference">CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput">PubsubDestinationInput</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination">CloudAssetProjectFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig">CloudAssetProjectFeedFeedOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PubsubDestination`<sup>Required</sup> <a name="PubsubDestination" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.pubsubDestination"></a>

```go
func PubsubDestination() CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference">CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference</a>

---

##### `PubsubDestinationInput`<sup>Optional</sup> <a name="PubsubDestinationInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput"></a>

```go
func PubsubDestinationInput() CloudAssetProjectFeedFeedOutputConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination">CloudAssetProjectFeedFeedOutputConfigPubsubDestination</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudAssetProjectFeedFeedOutputConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfig">CloudAssetProjectFeedFeedOutputConfig</a>

---


### CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference <a name="CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetprojectfeed"

cloudassetprojectfeed.NewCloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput">TopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination">CloudAssetProjectFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput"></a>

```go
func TopicInput() *string
```

- *Type:* *string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudAssetProjectFeedFeedOutputConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedFeedOutputConfigPubsubDestination">CloudAssetProjectFeedFeedOutputConfigPubsubDestination</a>

---


### CloudAssetProjectFeedTimeoutsOutputReference <a name="CloudAssetProjectFeedTimeoutsOutputReference" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetprojectfeed"

cloudassetprojectfeed.NewCloudAssetProjectFeedTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudAssetProjectFeedTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudAssetProjectFeed.CloudAssetProjectFeedTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



