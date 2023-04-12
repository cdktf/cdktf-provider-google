# `clouddeployDeliveryPipeline` Submodule <a name="`clouddeployDeliveryPipeline` Submodule" id="@cdktf/provider-google.clouddeployDeliveryPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClouddeployDeliveryPipeline <a name="ClouddeployDeliveryPipeline" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_delivery_pipeline google_clouddeploy_delivery_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipeline(scope Construct, id *string, config ClouddeployDeliveryPipelineConfig) ClouddeployDeliveryPipeline
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig">ClouddeployDeliveryPipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig">ClouddeployDeliveryPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.putSerialPipeline">PutSerialPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetSerialPipeline">ResetSerialPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetSuspended">ResetSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSerialPipeline` <a name="PutSerialPipeline" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.putSerialPipeline"></a>

```go
func PutSerialPipeline(value ClouddeployDeliveryPipelineSerialPipeline)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.putSerialPipeline.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline">ClouddeployDeliveryPipelineSerialPipeline</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.putTimeouts"></a>

```go
func PutTimeouts(value ClouddeployDeliveryPipelineTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts">ClouddeployDeliveryPipelineTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSerialPipeline` <a name="ResetSerialPipeline" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetSerialPipeline"></a>

```go
func ResetSerialPipeline()
```

##### `ResetSuspended` <a name="ResetSuspended" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetSuspended"></a>

```go
func ResetSuspended()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.ClouddeployDeliveryPipeline_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.ClouddeployDeliveryPipeline_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.ClouddeployDeliveryPipeline_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList">ClouddeployDeliveryPipelineConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.serialPipeline">SerialPipeline</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference">ClouddeployDeliveryPipelineSerialPipelineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference">ClouddeployDeliveryPipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.serialPipelineInput">SerialPipelineInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline">ClouddeployDeliveryPipelineSerialPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.suspendedInput">SuspendedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.suspended">Suspended</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.condition"></a>

```go
func Condition() ClouddeployDeliveryPipelineConditionList
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList">ClouddeployDeliveryPipelineConditionList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `SerialPipeline`<sup>Required</sup> <a name="SerialPipeline" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.serialPipeline"></a>

```go
func SerialPipeline() ClouddeployDeliveryPipelineSerialPipelineOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference">ClouddeployDeliveryPipelineSerialPipelineOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.timeouts"></a>

```go
func Timeouts() ClouddeployDeliveryPipelineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference">ClouddeployDeliveryPipelineTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SerialPipelineInput`<sup>Optional</sup> <a name="SerialPipelineInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.serialPipelineInput"></a>

```go
func SerialPipelineInput() ClouddeployDeliveryPipelineSerialPipeline
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline">ClouddeployDeliveryPipelineSerialPipeline</a>

---

##### `SuspendedInput`<sup>Optional</sup> <a name="SuspendedInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.suspendedInput"></a>

```go
func SuspendedInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Suspended`<sup>Required</sup> <a name="Suspended" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.suspended"></a>

```go
func Suspended() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipeline.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ClouddeployDeliveryPipelineCondition <a name="ClouddeployDeliveryPipelineCondition" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineCondition {

}
```


### ClouddeployDeliveryPipelineConditionPipelineReadyCondition <a name="ClouddeployDeliveryPipelineConditionPipelineReadyCondition" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineConditionPipelineReadyCondition {

}
```


### ClouddeployDeliveryPipelineConditionTargetsPresentCondition <a name="ClouddeployDeliveryPipelineConditionTargetsPresentCondition" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineConditionTargetsPresentCondition {

}
```


### ClouddeployDeliveryPipelineConfig <a name="ClouddeployDeliveryPipelineConfig" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	Annotations: *map[string]*string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	SerialPipeline: github.com/cdktf/cdktf-provider-google-go/google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline,
	Suspended: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.name">Name</a></code> | <code>*string</code> | Name of the `DeliveryPipeline`. Format is [a-z][a-z0-9\-]{0,62}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | User annotations. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.description">Description</a></code> | <code>*string</code> | Description of the `DeliveryPipeline`. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_delivery_pipeline#id ClouddeployDeliveryPipeline#id}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.project">Project</a></code> | <code>*string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.serialPipeline">SerialPipeline</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline">ClouddeployDeliveryPipelineSerialPipeline</a></code> | serial_pipeline block. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.suspended">Suspended</a></code> | <code>interface{}</code> | When suspended, no new releases or rollouts can be created, but in-progress ones will complete. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts">ClouddeployDeliveryPipelineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_delivery_pipeline#location ClouddeployDeliveryPipeline#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the `DeliveryPipeline`. Format is [a-z][a-z0-9\-]{0,62}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_delivery_pipeline#name ClouddeployDeliveryPipeline#name}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

User annotations.

These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_delivery_pipeline#annotations ClouddeployDeliveryPipeline#annotations}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the `DeliveryPipeline`. Max length is 255 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_delivery_pipeline#description ClouddeployDeliveryPipeline#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_delivery_pipeline#id ClouddeployDeliveryPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels are attributes that can be set and used by both the user and by Google Cloud Deploy.

Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_delivery_pipeline#labels ClouddeployDeliveryPipeline#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_delivery_pipeline#project ClouddeployDeliveryPipeline#project}

---

##### `SerialPipeline`<sup>Optional</sup> <a name="SerialPipeline" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.serialPipeline"></a>

```go
SerialPipeline ClouddeployDeliveryPipelineSerialPipeline
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline">ClouddeployDeliveryPipelineSerialPipeline</a>

serial_pipeline block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_delivery_pipeline#serial_pipeline ClouddeployDeliveryPipeline#serial_pipeline}

---

##### `Suspended`<sup>Optional</sup> <a name="Suspended" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.suspended"></a>

```go
Suspended interface{}
```

- *Type:* interface{}

When suspended, no new releases or rollouts can be created, but in-progress ones will complete.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_delivery_pipeline#suspended ClouddeployDeliveryPipeline#suspended}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConfig.property.timeouts"></a>

```go
Timeouts ClouddeployDeliveryPipelineTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts">ClouddeployDeliveryPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_delivery_pipeline#timeouts ClouddeployDeliveryPipeline#timeouts}

---

### ClouddeployDeliveryPipelineSerialPipeline <a name="ClouddeployDeliveryPipelineSerialPipeline" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineSerialPipeline {
	Stages: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline.property.stages">Stages</a></code> | <code>interface{}</code> | stages block. |

---

##### `Stages`<sup>Optional</sup> <a name="Stages" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline.property.stages"></a>

```go
Stages interface{}
```

- *Type:* interface{}

stages block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_delivery_pipeline#stages ClouddeployDeliveryPipeline#stages}

---

### ClouddeployDeliveryPipelineSerialPipelineStages <a name="ClouddeployDeliveryPipelineSerialPipelineStages" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineSerialPipelineStages {
	Profiles: *[]*string,
	TargetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages.property.profiles">Profiles</a></code> | <code>*[]*string</code> | Skaffold profiles to use when rendering the manifest for this stage's `Target`. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages.property.targetId">TargetId</a></code> | <code>*string</code> | The target_id to which this stage points. |

---

##### `Profiles`<sup>Optional</sup> <a name="Profiles" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages.property.profiles"></a>

```go
Profiles *[]*string
```

- *Type:* *[]*string

Skaffold profiles to use when rendering the manifest for this stage's `Target`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_delivery_pipeline#profiles ClouddeployDeliveryPipeline#profiles}

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStages.property.targetId"></a>

```go
TargetId *string
```

- *Type:* *string

The target_id to which this stage points.

This field refers exclusively to the last segment of a target name. For example, this field would just be `my-target` (rather than `projects/project/locations/location/targets/my-target`). The location of the `Target` is inferred to be the same as the location of the `DeliveryPipeline` that contains this `Stage`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_delivery_pipeline#target_id ClouddeployDeliveryPipeline#target_id}

---

### ClouddeployDeliveryPipelineTimeouts <a name="ClouddeployDeliveryPipelineTimeouts" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

&clouddeploydeliverypipeline.ClouddeployDeliveryPipelineTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_delivery_pipeline#create ClouddeployDeliveryPipeline#create}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_delivery_pipeline#delete ClouddeployDeliveryPipeline#delete}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_delivery_pipeline#update ClouddeployDeliveryPipeline#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_delivery_pipeline#create ClouddeployDeliveryPipeline#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_delivery_pipeline#delete ClouddeployDeliveryPipeline#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/clouddeploy_delivery_pipeline#update ClouddeployDeliveryPipeline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClouddeployDeliveryPipelineConditionList <a name="ClouddeployDeliveryPipelineConditionList" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClouddeployDeliveryPipelineConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.get"></a>

```go
func Get(index *f64) ClouddeployDeliveryPipelineConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ClouddeployDeliveryPipelineConditionOutputReference <a name="ClouddeployDeliveryPipelineConditionOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClouddeployDeliveryPipelineConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.pipelineReadyCondition">PipelineReadyCondition</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList">ClouddeployDeliveryPipelineConditionPipelineReadyConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.targetsPresentCondition">TargetsPresentCondition</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList">ClouddeployDeliveryPipelineConditionTargetsPresentConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineCondition">ClouddeployDeliveryPipelineCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PipelineReadyCondition`<sup>Required</sup> <a name="PipelineReadyCondition" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.pipelineReadyCondition"></a>

```go
func PipelineReadyCondition() ClouddeployDeliveryPipelineConditionPipelineReadyConditionList
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList">ClouddeployDeliveryPipelineConditionPipelineReadyConditionList</a>

---

##### `TargetsPresentCondition`<sup>Required</sup> <a name="TargetsPresentCondition" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.targetsPresentCondition"></a>

```go
func TargetsPresentCondition() ClouddeployDeliveryPipelineConditionTargetsPresentConditionList
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList">ClouddeployDeliveryPipelineConditionTargetsPresentConditionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineCondition
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineCondition">ClouddeployDeliveryPipelineCondition</a>

---


### ClouddeployDeliveryPipelineConditionPipelineReadyConditionList <a name="ClouddeployDeliveryPipelineConditionPipelineReadyConditionList" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineConditionPipelineReadyConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClouddeployDeliveryPipelineConditionPipelineReadyConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.get"></a>

```go
func Get(index *f64) ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference <a name="ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.status">Status</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyCondition">ClouddeployDeliveryPipelineConditionPipelineReadyCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.status"></a>

```go
func Status() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineConditionPipelineReadyCondition
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionPipelineReadyCondition">ClouddeployDeliveryPipelineConditionPipelineReadyCondition</a>

---


### ClouddeployDeliveryPipelineConditionTargetsPresentConditionList <a name="ClouddeployDeliveryPipelineConditionTargetsPresentConditionList" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineConditionTargetsPresentConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClouddeployDeliveryPipelineConditionTargetsPresentConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.get"></a>

```go
func Get(index *f64) ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference <a name="ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.missingTargets">MissingTargets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.status">Status</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentCondition">ClouddeployDeliveryPipelineConditionTargetsPresentCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MissingTargets`<sup>Required</sup> <a name="MissingTargets" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.missingTargets"></a>

```go
func MissingTargets() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.status"></a>

```go
func Status() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineConditionTargetsPresentCondition
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineConditionTargetsPresentCondition">ClouddeployDeliveryPipelineConditionTargetsPresentCondition</a>

---


### ClouddeployDeliveryPipelineSerialPipelineOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployDeliveryPipelineSerialPipelineOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.putStages">PutStages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.resetStages">ResetStages</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStages` <a name="PutStages" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.putStages"></a>

```go
func PutStages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.putStages.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetStages` <a name="ResetStages" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.resetStages"></a>

```go
func ResetStages()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.stages">Stages</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList">ClouddeployDeliveryPipelineSerialPipelineStagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.stagesInput">StagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline">ClouddeployDeliveryPipelineSerialPipeline</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.stages"></a>

```go
func Stages() ClouddeployDeliveryPipelineSerialPipelineStagesList
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList">ClouddeployDeliveryPipelineSerialPipelineStagesList</a>

---

##### `StagesInput`<sup>Optional</sup> <a name="StagesInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.stagesInput"></a>

```go
func StagesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployDeliveryPipelineSerialPipeline
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipeline">ClouddeployDeliveryPipelineSerialPipeline</a>

---


### ClouddeployDeliveryPipelineSerialPipelineStagesList <a name="ClouddeployDeliveryPipelineSerialPipelineStagesList" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClouddeployDeliveryPipelineSerialPipelineStagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.get"></a>

```go
func Get(index *f64) ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference <a name="ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineSerialPipelineStagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetProfiles">ResetProfiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetTargetId">ResetTargetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProfiles` <a name="ResetProfiles" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetProfiles"></a>

```go
func ResetProfiles()
```

##### `ResetTargetId` <a name="ResetTargetId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.resetTargetId"></a>

```go
func ResetTargetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.profilesInput">ProfilesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.targetIdInput">TargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.profiles">Profiles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProfilesInput`<sup>Optional</sup> <a name="ProfilesInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.profilesInput"></a>

```go
func ProfilesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.targetIdInput"></a>

```go
func TargetIdInput() *string
```

- *Type:* *string

---

##### `Profiles`<sup>Required</sup> <a name="Profiles" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.profiles"></a>

```go
func Profiles() *[]*string
```

- *Type:* *[]*string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClouddeployDeliveryPipelineTimeoutsOutputReference <a name="ClouddeployDeliveryPipelineTimeoutsOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/clouddeploydeliverypipeline"

clouddeploydeliverypipeline.NewClouddeployDeliveryPipelineTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployDeliveryPipelineTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployDeliveryPipeline.ClouddeployDeliveryPipelineTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



