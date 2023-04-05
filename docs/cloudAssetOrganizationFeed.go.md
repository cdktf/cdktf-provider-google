# `cloudAssetOrganizationFeed` Submodule <a name="`cloudAssetOrganizationFeed` Submodule" id="@cdktf/provider-google.cloudAssetOrganizationFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAssetOrganizationFeed <a name="CloudAssetOrganizationFeed" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_organization_feed google_cloud_asset_organization_feed}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetorganizationfeed"

cloudassetorganizationfeed.NewCloudAssetOrganizationFeed(scope Construct, id *string, config CloudAssetOrganizationFeedConfig) CloudAssetOrganizationFeed
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig">CloudAssetOrganizationFeedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig">CloudAssetOrganizationFeedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putFeedOutputConfig">PutFeedOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetAssetNames">ResetAssetNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetAssetTypes">ResetAssetTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putCondition"></a>

```go
func PutCondition(value CloudAssetOrganizationFeedCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition">CloudAssetOrganizationFeedCondition</a>

---

##### `PutFeedOutputConfig` <a name="PutFeedOutputConfig" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putFeedOutputConfig"></a>

```go
func PutFeedOutputConfig(value CloudAssetOrganizationFeedFeedOutputConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putFeedOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig">CloudAssetOrganizationFeedFeedOutputConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putTimeouts"></a>

```go
func PutTimeouts(value CloudAssetOrganizationFeedTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts">CloudAssetOrganizationFeedTimeouts</a>

---

##### `ResetAssetNames` <a name="ResetAssetNames" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetAssetNames"></a>

```go
func ResetAssetNames()
```

##### `ResetAssetTypes` <a name="ResetAssetTypes" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetAssetTypes"></a>

```go
func ResetAssetTypes()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetContentType"></a>

```go
func ResetContentType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetorganizationfeed"

cloudassetorganizationfeed.CloudAssetOrganizationFeed_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetorganizationfeed"

cloudassetorganizationfeed.CloudAssetOrganizationFeed_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetorganizationfeed"

cloudassetorganizationfeed.CloudAssetOrganizationFeed_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference">CloudAssetOrganizationFeedConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.feedOutputConfig">FeedOutputConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference">CloudAssetOrganizationFeedFeedOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference">CloudAssetOrganizationFeedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.assetNamesInput">AssetNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.assetTypesInput">AssetTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.billingProjectInput">BillingProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition">CloudAssetOrganizationFeedCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.feedIdInput">FeedIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.feedOutputConfigInput">FeedOutputConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig">CloudAssetOrganizationFeedFeedOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.assetNames">AssetNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.assetTypes">AssetTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.billingProject">BillingProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.feedId">FeedId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.condition"></a>

```go
func Condition() CloudAssetOrganizationFeedConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference">CloudAssetOrganizationFeedConditionOutputReference</a>

---

##### `FeedOutputConfig`<sup>Required</sup> <a name="FeedOutputConfig" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.feedOutputConfig"></a>

```go
func FeedOutputConfig() CloudAssetOrganizationFeedFeedOutputConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference">CloudAssetOrganizationFeedFeedOutputConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.timeouts"></a>

```go
func Timeouts() CloudAssetOrganizationFeedTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference">CloudAssetOrganizationFeedTimeoutsOutputReference</a>

---

##### `AssetNamesInput`<sup>Optional</sup> <a name="AssetNamesInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.assetNamesInput"></a>

```go
func AssetNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AssetTypesInput`<sup>Optional</sup> <a name="AssetTypesInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.assetTypesInput"></a>

```go
func AssetTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BillingProjectInput`<sup>Optional</sup> <a name="BillingProjectInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.billingProjectInput"></a>

```go
func BillingProjectInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.conditionInput"></a>

```go
func ConditionInput() CloudAssetOrganizationFeedCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition">CloudAssetOrganizationFeedCondition</a>

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `FeedIdInput`<sup>Optional</sup> <a name="FeedIdInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.feedIdInput"></a>

```go
func FeedIdInput() *string
```

- *Type:* *string

---

##### `FeedOutputConfigInput`<sup>Optional</sup> <a name="FeedOutputConfigInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.feedOutputConfigInput"></a>

```go
func FeedOutputConfigInput() CloudAssetOrganizationFeedFeedOutputConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig">CloudAssetOrganizationFeedFeedOutputConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AssetNames`<sup>Required</sup> <a name="AssetNames" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.assetNames"></a>

```go
func AssetNames() *[]*string
```

- *Type:* *[]*string

---

##### `AssetTypes`<sup>Required</sup> <a name="AssetTypes" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.assetTypes"></a>

```go
func AssetTypes() *[]*string
```

- *Type:* *[]*string

---

##### `BillingProject`<sup>Required</sup> <a name="BillingProject" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.billingProject"></a>

```go
func BillingProject() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `FeedId`<sup>Required</sup> <a name="FeedId" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.feedId"></a>

```go
func FeedId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeed.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAssetOrganizationFeedCondition <a name="CloudAssetOrganizationFeedCondition" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetorganizationfeed"

&cloudassetorganizationfeed.CloudAssetOrganizationFeedCondition {
	Expression: *string,
	Description: *string,
	Location: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.property.description">Description</a></code> | <code>*string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.property.location">Location</a></code> | <code>*string</code> | String indicating the location of the expression for error reporting, e.g. a file  name and a position in the file. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.property.title">Title</a></code> | <code>*string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_organization_feed#expression CloudAssetOrganizationFeed#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_organization_feed#description CloudAssetOrganizationFeed#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.property.location"></a>

```go
Location *string
```

- *Type:* *string

String indicating the location of the expression for error reporting, e.g. a file  name and a position in the file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_organization_feed#location CloudAssetOrganizationFeed#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_organization_feed#title CloudAssetOrganizationFeed#title}

---

### CloudAssetOrganizationFeedConfig <a name="CloudAssetOrganizationFeedConfig" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetorganizationfeed"

&cloudassetorganizationfeed.CloudAssetOrganizationFeedConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BillingProject: *string,
	FeedId: *string,
	FeedOutputConfig: github.com/cdktf/cdktf-provider-google-go/google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig,
	OrgId: *string,
	AssetNames: *[]*string,
	AssetTypes: *[]*string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition,
	ContentType: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.billingProject">BillingProject</a></code> | <code>*string</code> | The project whose identity will be used when sending messages to the destination pubsub topic. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.feedId">FeedId</a></code> | <code>*string</code> | This is the client-assigned asset feed identifier and it needs to be unique under a specific parent. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.feedOutputConfig">FeedOutputConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig">CloudAssetOrganizationFeedFeedOutputConfig</a></code> | feed_output_config block. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.orgId">OrgId</a></code> | <code>*string</code> | The organization this feed should be created in. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.assetNames">AssetNames</a></code> | <code>*[]*string</code> | A list of the full names of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.assetTypes">AssetTypes</a></code> | <code>*[]*string</code> | A list of types of the assets to receive updates. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition">CloudAssetOrganizationFeedCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.contentType">ContentType</a></code> | <code>*string</code> | Asset content type. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_organization_feed#id CloudAssetOrganizationFeed#id}. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts">CloudAssetOrganizationFeedTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BillingProject`<sup>Required</sup> <a name="BillingProject" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.billingProject"></a>

```go
BillingProject *string
```

- *Type:* *string

The project whose identity will be used when sending messages to the destination pubsub topic.

It also specifies the project for API
enablement check, quota, and billing.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_organization_feed#billing_project CloudAssetOrganizationFeed#billing_project}

---

##### `FeedId`<sup>Required</sup> <a name="FeedId" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.feedId"></a>

```go
FeedId *string
```

- *Type:* *string

This is the client-assigned asset feed identifier and it needs to be unique under a specific parent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_organization_feed#feed_id CloudAssetOrganizationFeed#feed_id}

---

##### `FeedOutputConfig`<sup>Required</sup> <a name="FeedOutputConfig" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.feedOutputConfig"></a>

```go
FeedOutputConfig CloudAssetOrganizationFeedFeedOutputConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig">CloudAssetOrganizationFeedFeedOutputConfig</a>

feed_output_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_organization_feed#feed_output_config CloudAssetOrganizationFeed#feed_output_config}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

The organization this feed should be created in.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_organization_feed#org_id CloudAssetOrganizationFeed#org_id}

---

##### `AssetNames`<sup>Optional</sup> <a name="AssetNames" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.assetNames"></a>

```go
AssetNames *[]*string
```

- *Type:* *[]*string

A list of the full names of the assets to receive updates.

You must specify either or both of
assetNames and assetTypes. Only asset updates matching specified assetNames and assetTypes are
exported to the feed. For example: //compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1.
See https://cloud.google.com/apis/design/resourceNames#fullResourceName for more info.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_organization_feed#asset_names CloudAssetOrganizationFeed#asset_names}

---

##### `AssetTypes`<sup>Optional</sup> <a name="AssetTypes" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.assetTypes"></a>

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

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_organization_feed#asset_types CloudAssetOrganizationFeed#asset_types}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.condition"></a>

```go
Condition CloudAssetOrganizationFeedCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition">CloudAssetOrganizationFeedCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_organization_feed#condition CloudAssetOrganizationFeed#condition}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Asset content type.

If not specified, no content but the asset name and type will be returned. Possible values: ["CONTENT_TYPE_UNSPECIFIED", "RESOURCE", "IAM_POLICY", "ORG_POLICY", "ACCESS_POLICY"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_organization_feed#content_type CloudAssetOrganizationFeed#content_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_organization_feed#id CloudAssetOrganizationFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConfig.property.timeouts"></a>

```go
Timeouts CloudAssetOrganizationFeedTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts">CloudAssetOrganizationFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_organization_feed#timeouts CloudAssetOrganizationFeed#timeouts}

---

### CloudAssetOrganizationFeedFeedOutputConfig <a name="CloudAssetOrganizationFeedFeedOutputConfig" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetorganizationfeed"

&cloudassetorganizationfeed.CloudAssetOrganizationFeedFeedOutputConfig {
	PubsubDestination: github.com/cdktf/cdktf-provider-google-go/google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig.property.pubsubDestination">PubsubDestination</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `PubsubDestination`<sup>Required</sup> <a name="PubsubDestination" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig.property.pubsubDestination"></a>

```go
PubsubDestination CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_organization_feed#pubsub_destination CloudAssetOrganizationFeed#pubsub_destination}

---

### CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination <a name="CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetorganizationfeed"

&cloudassetorganizationfeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination {
	Topic: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination.property.topic">Topic</a></code> | <code>*string</code> | Destination on Cloud Pubsub topic. |

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination.property.topic"></a>

```go
Topic *string
```

- *Type:* *string

Destination on Cloud Pubsub topic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_organization_feed#topic CloudAssetOrganizationFeed#topic}

---

### CloudAssetOrganizationFeedTimeouts <a name="CloudAssetOrganizationFeedTimeouts" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetorganizationfeed"

&cloudassetorganizationfeed.CloudAssetOrganizationFeedTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_organization_feed#create CloudAssetOrganizationFeed#create}. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_organization_feed#delete CloudAssetOrganizationFeed#delete}. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_organization_feed#update CloudAssetOrganizationFeed#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_organization_feed#create CloudAssetOrganizationFeed#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_organization_feed#delete CloudAssetOrganizationFeed#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_asset_organization_feed#update CloudAssetOrganizationFeed#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudAssetOrganizationFeedConditionOutputReference <a name="CloudAssetOrganizationFeedConditionOutputReference" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetorganizationfeed"

cloudassetorganizationfeed.NewCloudAssetOrganizationFeedConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudAssetOrganizationFeedConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition">CloudAssetOrganizationFeedCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudAssetOrganizationFeedCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedCondition">CloudAssetOrganizationFeedCondition</a>

---


### CloudAssetOrganizationFeedFeedOutputConfigOutputReference <a name="CloudAssetOrganizationFeedFeedOutputConfigOutputReference" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetorganizationfeed"

cloudassetorganizationfeed.NewCloudAssetOrganizationFeedFeedOutputConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudAssetOrganizationFeedFeedOutputConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.putPubsubDestination">PutPubsubDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPubsubDestination` <a name="PutPubsubDestination" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.putPubsubDestination"></a>

```go
func PutPubsubDestination(value CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.putPubsubDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.pubsubDestination">PubsubDestination</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput">PubsubDestinationInput</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig">CloudAssetOrganizationFeedFeedOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PubsubDestination`<sup>Required</sup> <a name="PubsubDestination" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.pubsubDestination"></a>

```go
func PubsubDestination() CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference</a>

---

##### `PubsubDestinationInput`<sup>Optional</sup> <a name="PubsubDestinationInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.pubsubDestinationInput"></a>

```go
func PubsubDestinationInput() CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudAssetOrganizationFeedFeedOutputConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfig">CloudAssetOrganizationFeedFeedOutputConfig</a>

---


### CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference <a name="CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetorganizationfeed"

cloudassetorganizationfeed.NewCloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput">TopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic">Topic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.topicInput"></a>

```go
func TopicInput() *string
```

- *Type:* *string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.topic"></a>

```go
func Topic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination
```

- *Type:* <a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination">CloudAssetOrganizationFeedFeedOutputConfigPubsubDestination</a>

---


### CloudAssetOrganizationFeedTimeoutsOutputReference <a name="CloudAssetOrganizationFeedTimeoutsOutputReference" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudassetorganizationfeed"

cloudassetorganizationfeed.NewCloudAssetOrganizationFeedTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudAssetOrganizationFeedTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudAssetOrganizationFeed.CloudAssetOrganizationFeedTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



