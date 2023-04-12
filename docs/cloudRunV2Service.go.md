# `cloudRunV2Service` Submodule <a name="`cloudRunV2Service` Submodule" id="@cdktf/provider-google.cloudRunV2Service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudRunV2Service <a name="CloudRunV2Service" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service google_cloud_run_v2_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2Service(scope Construct, id *string, config CloudRunV2ServiceConfig) CloudRunV2Service
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig">CloudRunV2ServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig">CloudRunV2ServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putBinaryAuthorization">PutBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTemplate">PutTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTraffic">PutTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetBinaryAuthorization">ResetBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetClient">ResetClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetClientVersion">ResetClientVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetIngress">ResetIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetLaunchStage">ResetLaunchStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetTraffic">ResetTraffic</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutBinaryAuthorization` <a name="PutBinaryAuthorization" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putBinaryAuthorization"></a>

```go
func PutBinaryAuthorization(value CloudRunV2ServiceBinaryAuthorization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putBinaryAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization">CloudRunV2ServiceBinaryAuthorization</a>

---

##### `PutTemplate` <a name="PutTemplate" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTemplate"></a>

```go
func PutTemplate(value CloudRunV2ServiceTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate">CloudRunV2ServiceTemplate</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTimeouts"></a>

```go
func PutTimeouts(value CloudRunV2ServiceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts">CloudRunV2ServiceTimeouts</a>

---

##### `PutTraffic` <a name="PutTraffic" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTraffic"></a>

```go
func PutTraffic(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.putTraffic.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetBinaryAuthorization` <a name="ResetBinaryAuthorization" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetBinaryAuthorization"></a>

```go
func ResetBinaryAuthorization()
```

##### `ResetClient` <a name="ResetClient" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetClient"></a>

```go
func ResetClient()
```

##### `ResetClientVersion` <a name="ResetClientVersion" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetClientVersion"></a>

```go
func ResetClientVersion()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetId"></a>

```go
func ResetId()
```

##### `ResetIngress` <a name="ResetIngress" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetIngress"></a>

```go
func ResetIngress()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLaunchStage` <a name="ResetLaunchStage" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetLaunchStage"></a>

```go
func ResetLaunchStage()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTraffic` <a name="ResetTraffic" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.resetTraffic"></a>

```go
func ResetTraffic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.CloudRunV2Service_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.CloudRunV2Service_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.CloudRunV2Service_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.binaryAuthorization">BinaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference">CloudRunV2ServiceBinaryAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList">CloudRunV2ServiceConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.generation">Generation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.latestCreatedRevision">LatestCreatedRevision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.latestReadyRevision">LatestReadyRevision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.observedGeneration">ObservedGeneration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.template">Template</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference">CloudRunV2ServiceTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terminalCondition">TerminalCondition</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList">CloudRunV2ServiceTerminalConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference">CloudRunV2ServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.traffic">Traffic</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList">CloudRunV2ServiceTrafficList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.trafficStatuses">TrafficStatuses</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList">CloudRunV2ServiceTrafficStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.binaryAuthorizationInput">BinaryAuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization">CloudRunV2ServiceBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.clientInput">ClientInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.clientVersionInput">ClientVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.ingressInput">IngressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.launchStageInput">LaunchStageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.templateInput">TemplateInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate">CloudRunV2ServiceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.trafficInput">TrafficInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.client">Client</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.clientVersion">ClientVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.ingress">Ingress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.launchStage">LaunchStage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BinaryAuthorization`<sup>Required</sup> <a name="BinaryAuthorization" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.binaryAuthorization"></a>

```go
func BinaryAuthorization() CloudRunV2ServiceBinaryAuthorizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference">CloudRunV2ServiceBinaryAuthorizationOutputReference</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.conditions"></a>

```go
func Conditions() CloudRunV2ServiceConditionsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList">CloudRunV2ServiceConditionsList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.generation"></a>

```go
func Generation() *string
```

- *Type:* *string

---

##### `LatestCreatedRevision`<sup>Required</sup> <a name="LatestCreatedRevision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.latestCreatedRevision"></a>

```go
func LatestCreatedRevision() *string
```

- *Type:* *string

---

##### `LatestReadyRevision`<sup>Required</sup> <a name="LatestReadyRevision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.latestReadyRevision"></a>

```go
func LatestReadyRevision() *string
```

- *Type:* *string

---

##### `ObservedGeneration`<sup>Required</sup> <a name="ObservedGeneration" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.observedGeneration"></a>

```go
func ObservedGeneration() *string
```

- *Type:* *string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.template"></a>

```go
func Template() CloudRunV2ServiceTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference">CloudRunV2ServiceTemplateOutputReference</a>

---

##### `TerminalCondition`<sup>Required</sup> <a name="TerminalCondition" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.terminalCondition"></a>

```go
func TerminalCondition() CloudRunV2ServiceTerminalConditionList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList">CloudRunV2ServiceTerminalConditionList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.timeouts"></a>

```go
func Timeouts() CloudRunV2ServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference">CloudRunV2ServiceTimeoutsOutputReference</a>

---

##### `Traffic`<sup>Required</sup> <a name="Traffic" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.traffic"></a>

```go
func Traffic() CloudRunV2ServiceTrafficList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList">CloudRunV2ServiceTrafficList</a>

---

##### `TrafficStatuses`<sup>Required</sup> <a name="TrafficStatuses" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.trafficStatuses"></a>

```go
func TrafficStatuses() CloudRunV2ServiceTrafficStatusesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList">CloudRunV2ServiceTrafficStatusesList</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BinaryAuthorizationInput`<sup>Optional</sup> <a name="BinaryAuthorizationInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.binaryAuthorizationInput"></a>

```go
func BinaryAuthorizationInput() CloudRunV2ServiceBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization">CloudRunV2ServiceBinaryAuthorization</a>

---

##### `ClientInput`<sup>Optional</sup> <a name="ClientInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.clientInput"></a>

```go
func ClientInput() *string
```

- *Type:* *string

---

##### `ClientVersionInput`<sup>Optional</sup> <a name="ClientVersionInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.clientVersionInput"></a>

```go
func ClientVersionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IngressInput`<sup>Optional</sup> <a name="IngressInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.ingressInput"></a>

```go
func IngressInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LaunchStageInput`<sup>Optional</sup> <a name="LaunchStageInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.launchStageInput"></a>

```go
func LaunchStageInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.templateInput"></a>

```go
func TemplateInput() CloudRunV2ServiceTemplate
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate">CloudRunV2ServiceTemplate</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TrafficInput`<sup>Optional</sup> <a name="TrafficInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.trafficInput"></a>

```go
func TrafficInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Client`<sup>Required</sup> <a name="Client" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.client"></a>

```go
func Client() *string
```

- *Type:* *string

---

##### `ClientVersion`<sup>Required</sup> <a name="ClientVersion" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.clientVersion"></a>

```go
func ClientVersion() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ingress`<sup>Required</sup> <a name="Ingress" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.ingress"></a>

```go
func Ingress() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LaunchStage`<sup>Required</sup> <a name="LaunchStage" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.launchStage"></a>

```go
func LaunchStage() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2Service.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudRunV2ServiceBinaryAuthorization <a name="CloudRunV2ServiceBinaryAuthorization" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceBinaryAuthorization {
	BreakglassJustification: *string,
	UseDefault: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization.property.breakglassJustification">BreakglassJustification</a></code> | <code>*string</code> | If present, indicates to use Breakglass using this justification. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization.property.useDefault">UseDefault</a></code> | <code>interface{}</code> | If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled. |

---

##### `BreakglassJustification`<sup>Optional</sup> <a name="BreakglassJustification" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization.property.breakglassJustification"></a>

```go
BreakglassJustification *string
```

- *Type:* *string

If present, indicates to use Breakglass using this justification.

If useDefault is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#breakglass_justification CloudRunV2Service#breakglass_justification}

---

##### `UseDefault`<sup>Optional</sup> <a name="UseDefault" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization.property.useDefault"></a>

```go
UseDefault interface{}
```

- *Type:* interface{}

If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#use_default CloudRunV2Service#use_default}

---

### CloudRunV2ServiceConditions <a name="CloudRunV2ServiceConditions" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceConditions {

}
```


### CloudRunV2ServiceConfig <a name="CloudRunV2ServiceConfig" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Template: github.com/cdktf/cdktf-provider-google-go/google.cloudRunV2Service.CloudRunV2ServiceTemplate,
	Annotations: *map[string]*string,
	BinaryAuthorization: github.com/cdktf/cdktf-provider-google-go/google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization,
	Client: *string,
	ClientVersion: *string,
	Description: *string,
	Id: *string,
	Ingress: *string,
	Labels: *map[string]*string,
	LaunchStage: *string,
	Location: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.cloudRunV2Service.CloudRunV2ServiceTimeouts,
	Traffic: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.name">Name</a></code> | <code>*string</code> | Name of the Service. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.template">Template</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate">CloudRunV2ServiceTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.binaryAuthorization">BinaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization">CloudRunV2ServiceBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.client">Client</a></code> | <code>*string</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.clientVersion">ClientVersion</a></code> | <code>*string</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.description">Description</a></code> | <code>*string</code> | User-provided description of the Service. This field currently has a 512-character limit. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#id CloudRunV2Service#id}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.ingress">Ingress</a></code> | <code>*string</code> | Provides the ingress settings for this Service. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Map of string keys and values that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.launchStage">LaunchStage</a></code> | <code>*string</code> | The launch stage as defined by Google Cloud Platform Launch Stages. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.location">Location</a></code> | <code>*string</code> | The location of the cloud run service. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#project CloudRunV2Service#project}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts">CloudRunV2ServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.traffic">Traffic</a></code> | <code>interface{}</code> | traffic block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the Service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#name CloudRunV2Service#name}

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.template"></a>

```go
Template CloudRunV2ServiceTemplate
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate">CloudRunV2ServiceTemplate</a>

template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#template CloudRunV2Service#template}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects. Cloud Run will populate some annotations using 'run.googleapis.com' or 'serving.knative.dev' namespaces. This field follows Kubernetes annotations' namespacing, limits, and rules. More info: https://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#annotations CloudRunV2Service#annotations}

---

##### `BinaryAuthorization`<sup>Optional</sup> <a name="BinaryAuthorization" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.binaryAuthorization"></a>

```go
BinaryAuthorization CloudRunV2ServiceBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization">CloudRunV2ServiceBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#binary_authorization CloudRunV2Service#binary_authorization}

---

##### `Client`<sup>Optional</sup> <a name="Client" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.client"></a>

```go
Client *string
```

- *Type:* *string

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#client CloudRunV2Service#client}

---

##### `ClientVersion`<sup>Optional</sup> <a name="ClientVersion" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.clientVersion"></a>

```go
ClientVersion *string
```

- *Type:* *string

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#client_version CloudRunV2Service#client_version}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User-provided description of the Service. This field currently has a 512-character limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#description CloudRunV2Service#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#id CloudRunV2Service#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ingress`<sup>Optional</sup> <a name="Ingress" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.ingress"></a>

```go
Ingress *string
```

- *Type:* *string

Provides the ingress settings for this Service.

On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active. Possible values: ["INGRESS_TRAFFIC_ALL", "INGRESS_TRAFFIC_INTERNAL_ONLY", "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#ingress CloudRunV2Service#ingress}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Map of string keys and values that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels Cloud Run will populate some labels with 'run.googleapis.com' or 'serving.knative.dev' namespaces. Those labels are read-only, and user changes will not be preserved.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#labels CloudRunV2Service#labels}

---

##### `LaunchStage`<sup>Optional</sup> <a name="LaunchStage" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.launchStage"></a>

```go
LaunchStage *string
```

- *Type:* *string

The launch stage as defined by Google Cloud Platform Launch Stages.

Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#launch_stage CloudRunV2Service#launch_stage}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the cloud run service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#location CloudRunV2Service#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#project CloudRunV2Service#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.timeouts"></a>

```go
Timeouts CloudRunV2ServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts">CloudRunV2ServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#timeouts CloudRunV2Service#timeouts}

---

##### `Traffic`<sup>Optional</sup> <a name="Traffic" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConfig.property.traffic"></a>

```go
Traffic interface{}
```

- *Type:* interface{}

traffic block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#traffic CloudRunV2Service#traffic}

---

### CloudRunV2ServiceTemplate <a name="CloudRunV2ServiceTemplate" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTemplate {
	Annotations: *map[string]*string,
	Containers: interface{},
	EncryptionKey: *string,
	ExecutionEnvironment: *string,
	Labels: *map[string]*string,
	MaxInstanceRequestConcurrency: *f64,
	Revision: *string,
	Scaling: github.com/cdktf/cdktf-provider-google-go/google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling,
	ServiceAccount: *string,
	Timeout: *string,
	Volumes: interface{},
	VpcAccess: github.com/cdktf/cdktf-provider-google-go/google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | KRM-style annotations for the resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.containers">Containers</a></code> | <code>interface{}</code> | containers block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.encryptionKey">EncryptionKey</a></code> | <code>*string</code> | A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.executionEnvironment">ExecutionEnvironment</a></code> | <code>*string</code> | The sandbox environment to host this Revision. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"]. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.labels">Labels</a></code> | <code>*map[string]*string</code> | KRM-style labels for the resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.maxInstanceRequestConcurrency">MaxInstanceRequestConcurrency</a></code> | <code>*f64</code> | Sets the maximum number of requests that each serving instance can receive. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.revision">Revision</a></code> | <code>*string</code> | The unique name for the revision. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.scaling">Scaling</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling">CloudRunV2ServiceTemplateScaling</a></code> | scaling block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Email address of the IAM service account associated with the revision of the service. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.timeout">Timeout</a></code> | <code>*string</code> | Max allowed time for an instance to respond to a request. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.volumes">Volumes</a></code> | <code>interface{}</code> | volumes block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.vpcAccess">VpcAccess</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess">CloudRunV2ServiceTemplateVpcAccess</a></code> | vpc_access block. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

KRM-style annotations for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#annotations CloudRunV2Service#annotations}

---

##### `Containers`<sup>Optional</sup> <a name="Containers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.containers"></a>

```go
Containers interface{}
```

- *Type:* interface{}

containers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#containers CloudRunV2Service#containers}

---

##### `EncryptionKey`<sup>Optional</sup> <a name="EncryptionKey" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.encryptionKey"></a>

```go
EncryptionKey *string
```

- *Type:* *string

A reference to a customer managed encryption key (CMEK) to use to encrypt this container image.

For more information, go to https://cloud.google.com/run/docs/securing/using-cmek

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#encryption_key CloudRunV2Service#encryption_key}

---

##### `ExecutionEnvironment`<sup>Optional</sup> <a name="ExecutionEnvironment" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.executionEnvironment"></a>

```go
ExecutionEnvironment *string
```

- *Type:* *string

The sandbox environment to host this Revision. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#execution_environment CloudRunV2Service#execution_environment}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

KRM-style labels for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#labels CloudRunV2Service#labels}

---

##### `MaxInstanceRequestConcurrency`<sup>Optional</sup> <a name="MaxInstanceRequestConcurrency" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.maxInstanceRequestConcurrency"></a>

```go
MaxInstanceRequestConcurrency *f64
```

- *Type:* *f64

Sets the maximum number of requests that each serving instance can receive.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#max_instance_request_concurrency CloudRunV2Service#max_instance_request_concurrency}

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.revision"></a>

```go
Revision *string
```

- *Type:* *string

The unique name for the revision.

If this field is omitted, it will be automatically generated based on the Service name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#revision CloudRunV2Service#revision}

---

##### `Scaling`<sup>Optional</sup> <a name="Scaling" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.scaling"></a>

```go
Scaling CloudRunV2ServiceTemplateScaling
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling">CloudRunV2ServiceTemplateScaling</a>

scaling block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#scaling CloudRunV2Service#scaling}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Email address of the IAM service account associated with the revision of the service.

The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#service_account CloudRunV2Service#service_account}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Max allowed time for an instance to respond to a request.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#timeout CloudRunV2Service#timeout}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.volumes"></a>

```go
Volumes interface{}
```

- *Type:* interface{}

volumes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#volumes CloudRunV2Service#volumes}

---

##### `VpcAccess`<sup>Optional</sup> <a name="VpcAccess" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate.property.vpcAccess"></a>

```go
VpcAccess CloudRunV2ServiceTemplateVpcAccess
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess">CloudRunV2ServiceTemplateVpcAccess</a>

vpc_access block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#vpc_access CloudRunV2Service#vpc_access}

---

### CloudRunV2ServiceTemplateContainers <a name="CloudRunV2ServiceTemplateContainers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTemplateContainers {
	Image: *string,
	Args: *[]*string,
	Command: *[]*string,
	Env: interface{},
	LivenessProbe: github.com/cdktf/cdktf-provider-google-go/google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe,
	Name: *string,
	Ports: interface{},
	Resources: github.com/cdktf/cdktf-provider-google-go/google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources,
	StartupProbe: github.com/cdktf/cdktf-provider-google-go/google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe,
	VolumeMounts: interface{},
	WorkingDir: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.image">Image</a></code> | <code>*string</code> | URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.args">Args</a></code> | <code>*[]*string</code> | Arguments to the entrypoint. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.command">Command</a></code> | <code>*[]*string</code> | Entrypoint array. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.env">Env</a></code> | <code>interface{}</code> | env block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.livenessProbe">LivenessProbe</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe">CloudRunV2ServiceTemplateContainersLivenessProbe</a></code> | liveness_probe block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.name">Name</a></code> | <code>*string</code> | Name of the container specified as a DNS_LABEL. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.ports">Ports</a></code> | <code>interface{}</code> | ports block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources">CloudRunV2ServiceTemplateContainersResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.startupProbe">StartupProbe</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe">CloudRunV2ServiceTemplateContainersStartupProbe</a></code> | startup_probe block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.volumeMounts">VolumeMounts</a></code> | <code>interface{}</code> | volume_mounts block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.workingDir">WorkingDir</a></code> | <code>*string</code> | Container's working directory. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.image"></a>

```go
Image *string
```

- *Type:* *string

URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#image CloudRunV2Service#image}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

Arguments to the entrypoint.

The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#args CloudRunV2Service#args}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.command"></a>

```go
Command *[]*string
```

- *Type:* *[]*string

Entrypoint array.

Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#command CloudRunV2Service#command}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.env"></a>

```go
Env interface{}
```

- *Type:* interface{}

env block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#env CloudRunV2Service#env}

---

##### `LivenessProbe`<sup>Optional</sup> <a name="LivenessProbe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.livenessProbe"></a>

```go
LivenessProbe CloudRunV2ServiceTemplateContainersLivenessProbe
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe">CloudRunV2ServiceTemplateContainersLivenessProbe</a>

liveness_probe block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#liveness_probe CloudRunV2Service#liveness_probe}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the container specified as a DNS_LABEL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#name CloudRunV2Service#name}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.ports"></a>

```go
Ports interface{}
```

- *Type:* interface{}

ports block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#ports CloudRunV2Service#ports}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.resources"></a>

```go
Resources CloudRunV2ServiceTemplateContainersResources
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources">CloudRunV2ServiceTemplateContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#resources CloudRunV2Service#resources}

---

##### `StartupProbe`<sup>Optional</sup> <a name="StartupProbe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.startupProbe"></a>

```go
StartupProbe CloudRunV2ServiceTemplateContainersStartupProbe
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe">CloudRunV2ServiceTemplateContainersStartupProbe</a>

startup_probe block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#startup_probe CloudRunV2Service#startup_probe}

---

##### `VolumeMounts`<sup>Optional</sup> <a name="VolumeMounts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.volumeMounts"></a>

```go
VolumeMounts interface{}
```

- *Type:* interface{}

volume_mounts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#volume_mounts CloudRunV2Service#volume_mounts}

---

##### `WorkingDir`<sup>Optional</sup> <a name="WorkingDir" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainers.property.workingDir"></a>

```go
WorkingDir *string
```

- *Type:* *string

Container's working directory.

If not specified, the container runtime's default will be used, which might be configured in the container image.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#working_dir CloudRunV2Service#working_dir}

---

### CloudRunV2ServiceTemplateContainersEnv <a name="CloudRunV2ServiceTemplateContainersEnv" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTemplateContainersEnv {
	Name: *string,
	Value: *string,
	ValueSource: github.com/cdktf/cdktf-provider-google-go/google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv.property.name">Name</a></code> | <code>*string</code> | Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv.property.value">Value</a></code> | <code>*string</code> | Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv.property.valueSource">ValueSource</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource">CloudRunV2ServiceTemplateContainersEnvValueSource</a></code> | value_source block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#name CloudRunV2Service#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv.property.value"></a>

```go
Value *string
```

- *Type:* *string

Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables.

If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "", and the maximum length is 32768 bytes

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#value CloudRunV2Service#value}

---

##### `ValueSource`<sup>Optional</sup> <a name="ValueSource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnv.property.valueSource"></a>

```go
ValueSource CloudRunV2ServiceTemplateContainersEnvValueSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource">CloudRunV2ServiceTemplateContainersEnvValueSource</a>

value_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#value_source CloudRunV2Service#value_source}

---

### CloudRunV2ServiceTemplateContainersEnvValueSource <a name="CloudRunV2ServiceTemplateContainersEnvValueSource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTemplateContainersEnvValueSource {
	SecretKeyRef: github.com/cdktf/cdktf-provider-google-go/google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource.property.secretKeyRef">SecretKeyRef</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `SecretKeyRef`<sup>Optional</sup> <a name="SecretKeyRef" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource.property.secretKeyRef"></a>

```go
SecretKeyRef CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#secret_key_ref CloudRunV2Service#secret_key_ref}

---

### CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef <a name="CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef {
	Secret: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.property.secret">Secret</a></code> | <code>*string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.property.version">Version</a></code> | <code>*string</code> | The Cloud Secret Manager secret version. |

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

The name of the secret in Cloud Secret Manager.

Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#secret CloudRunV2Service#secret}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef.property.version"></a>

```go
Version *string
```

- *Type:* *string

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#version CloudRunV2Service#version}

---

### CloudRunV2ServiceTemplateContainersLivenessProbe <a name="CloudRunV2ServiceTemplateContainersLivenessProbe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTemplateContainersLivenessProbe {
	FailureThreshold: *f64,
	Grpc: github.com/cdktf/cdktf-provider-google-go/google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc,
	HttpGet: github.com/cdktf/cdktf-provider-google-go/google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet,
	InitialDelaySeconds: *f64,
	PeriodSeconds: *f64,
	TcpSocket: github.com/cdktf/cdktf-provider-google-go/google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket,
	TimeoutSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | Minimum consecutive failures for the probe to be considered failed after having succeeded. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.grpc">Grpc</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc">CloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>*f64</code> | Number of seconds after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.tcpSocket">TcpSocket</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a></code> | tcp_socket block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | Number of seconds after which the probe times out. |

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.failureThreshold"></a>

```go
FailureThreshold *f64
```

- *Type:* *f64

Minimum consecutive failures for the probe to be considered failed after having succeeded.

Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#failure_threshold CloudRunV2Service#failure_threshold}

---

##### `Grpc`<sup>Optional</sup> <a name="Grpc" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.grpc"></a>

```go
Grpc CloudRunV2ServiceTemplateContainersLivenessProbeGrpc
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc">CloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#grpc CloudRunV2Service#grpc}

---

##### `HttpGet`<sup>Optional</sup> <a name="HttpGet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.httpGet"></a>

```go
HttpGet CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#http_get CloudRunV2Service#http_get}

---

##### `InitialDelaySeconds`<sup>Optional</sup> <a name="InitialDelaySeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.initialDelaySeconds"></a>

```go
InitialDelaySeconds *f64
```

- *Type:* *f64

Number of seconds after the container has started before the probe is initiated.

Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#initial_delay_seconds CloudRunV2Service#initial_delay_seconds}

---

##### `PeriodSeconds`<sup>Optional</sup> <a name="PeriodSeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.periodSeconds"></a>

```go
PeriodSeconds *f64
```

- *Type:* *f64

How often (in seconds) to perform the probe.

Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#period_seconds CloudRunV2Service#period_seconds}

---

##### `TcpSocket`<sup>Optional</sup> <a name="TcpSocket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.tcpSocket"></a>

```go
TcpSocket CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a>

tcp_socket block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#tcp_socket CloudRunV2Service#tcp_socket}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe.property.timeoutSeconds"></a>

```go
TimeoutSeconds *f64
```

- *Type:* *f64

Number of seconds after which the probe times out.

Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#timeout_seconds CloudRunV2Service#timeout_seconds}

---

### CloudRunV2ServiceTemplateContainersLivenessProbeGrpc <a name="CloudRunV2ServiceTemplateContainersLivenessProbeGrpc" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc {
	Port: *f64,
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc.property.port">Port</a></code> | <code>*f64</code> | Port number to access on the container. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc.property.service">Service</a></code> | <code>*string</code> | The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port number to access on the container.

Number must be in the range 1 to 65535. If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#port CloudRunV2Service#port}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc.property.service"></a>

```go
Service *string
```

- *Type:* *string

The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#service CloudRunV2Service#service}

---

### CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet <a name="CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet {
	HttpHeaders: interface{},
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.httpHeaders">HttpHeaders</a></code> | <code>interface{}</code> | http_headers block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.path">Path</a></code> | <code>*string</code> | Path to access on the HTTP server. Defaults to '/'. |

---

##### `HttpHeaders`<sup>Optional</sup> <a name="HttpHeaders" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.httpHeaders"></a>

```go
HttpHeaders interface{}
```

- *Type:* interface{}

http_headers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#http_headers CloudRunV2Service#http_headers}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#path CloudRunV2Service#path}

---

### CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders <a name="CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.property.name">Name</a></code> | <code>*string</code> | The header field name. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.property.value">Value</a></code> | <code>*string</code> | The header field value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.property.name"></a>

```go
Name *string
```

- *Type:* *string

The header field name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#name CloudRunV2Service#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders.property.value"></a>

```go
Value *string
```

- *Type:* *string

The header field value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#value CloudRunV2Service#value}

---

### CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket <a name="CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket {
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket.property.port">Port</a></code> | <code>*f64</code> | Port number to access on the container. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port number to access on the container.

Must be in the range 1 to 65535. If not specified, defaults to 8080.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#port CloudRunV2Service#port}

---

### CloudRunV2ServiceTemplateContainersPorts <a name="CloudRunV2ServiceTemplateContainersPorts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTemplateContainersPorts {
	ContainerPort: *f64,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts.property.name">Name</a></code> | <code>*string</code> | If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c". |

---

##### `ContainerPort`<sup>Optional</sup> <a name="ContainerPort" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts.property.containerPort"></a>

```go
ContainerPort *f64
```

- *Type:* *f64

Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#container_port CloudRunV2Service#container_port}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPorts.property.name"></a>

```go
Name *string
```

- *Type:* *string

If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#name CloudRunV2Service#name}

---

### CloudRunV2ServiceTemplateContainersResources <a name="CloudRunV2ServiceTemplateContainersResources" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTemplateContainersResources {
	CpuIdle: interface{},
	Limits: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources.property.cpuIdle">CpuIdle</a></code> | <code>interface{}</code> | Determines whether CPU should be throttled or not outside of requests. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources.property.limits">Limits</a></code> | <code>*map[string]*string</code> | Only memory and CPU are supported. |

---

##### `CpuIdle`<sup>Optional</sup> <a name="CpuIdle" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources.property.cpuIdle"></a>

```go
CpuIdle interface{}
```

- *Type:* interface{}

Determines whether CPU should be throttled or not outside of requests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#cpu_idle CloudRunV2Service#cpu_idle}

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources.property.limits"></a>

```go
Limits *map[string]*string
```

- *Type:* *map[string]*string

Only memory and CPU are supported.

Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#limits CloudRunV2Service#limits}

---

### CloudRunV2ServiceTemplateContainersStartupProbe <a name="CloudRunV2ServiceTemplateContainersStartupProbe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTemplateContainersStartupProbe {
	FailureThreshold: *f64,
	Grpc: github.com/cdktf/cdktf-provider-google-go/google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc,
	HttpGet: github.com/cdktf/cdktf-provider-google-go/google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet,
	InitialDelaySeconds: *f64,
	PeriodSeconds: *f64,
	TcpSocket: github.com/cdktf/cdktf-provider-google-go/google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket,
	TimeoutSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | Minimum consecutive failures for the probe to be considered failed after having succeeded. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.grpc">Grpc</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc">CloudRunV2ServiceTemplateContainersStartupProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet">CloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>*f64</code> | Number of seconds after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.tcpSocket">TcpSocket</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a></code> | tcp_socket block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | Number of seconds after which the probe times out. |

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.failureThreshold"></a>

```go
FailureThreshold *f64
```

- *Type:* *f64

Minimum consecutive failures for the probe to be considered failed after having succeeded.

Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#failure_threshold CloudRunV2Service#failure_threshold}

---

##### `Grpc`<sup>Optional</sup> <a name="Grpc" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.grpc"></a>

```go
Grpc CloudRunV2ServiceTemplateContainersStartupProbeGrpc
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc">CloudRunV2ServiceTemplateContainersStartupProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#grpc CloudRunV2Service#grpc}

---

##### `HttpGet`<sup>Optional</sup> <a name="HttpGet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.httpGet"></a>

```go
HttpGet CloudRunV2ServiceTemplateContainersStartupProbeHttpGet
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet">CloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#http_get CloudRunV2Service#http_get}

---

##### `InitialDelaySeconds`<sup>Optional</sup> <a name="InitialDelaySeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.initialDelaySeconds"></a>

```go
InitialDelaySeconds *f64
```

- *Type:* *f64

Number of seconds after the container has started before the probe is initiated.

Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#initial_delay_seconds CloudRunV2Service#initial_delay_seconds}

---

##### `PeriodSeconds`<sup>Optional</sup> <a name="PeriodSeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.periodSeconds"></a>

```go
PeriodSeconds *f64
```

- *Type:* *f64

How often (in seconds) to perform the probe.

Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#period_seconds CloudRunV2Service#period_seconds}

---

##### `TcpSocket`<sup>Optional</sup> <a name="TcpSocket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.tcpSocket"></a>

```go
TcpSocket CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a>

tcp_socket block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#tcp_socket CloudRunV2Service#tcp_socket}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe.property.timeoutSeconds"></a>

```go
TimeoutSeconds *f64
```

- *Type:* *f64

Number of seconds after which the probe times out.

Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#timeout_seconds CloudRunV2Service#timeout_seconds}

---

### CloudRunV2ServiceTemplateContainersStartupProbeGrpc <a name="CloudRunV2ServiceTemplateContainersStartupProbeGrpc" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc {
	Port: *f64,
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc.property.port">Port</a></code> | <code>*f64</code> | Port number to access on the container. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc.property.service">Service</a></code> | <code>*string</code> | The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port number to access on the container.

Number must be in the range 1 to 65535. If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#port CloudRunV2Service#port}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc.property.service"></a>

```go
Service *string
```

- *Type:* *string

The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#service CloudRunV2Service#service}

---

### CloudRunV2ServiceTemplateContainersStartupProbeHttpGet <a name="CloudRunV2ServiceTemplateContainersStartupProbeHttpGet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet {
	HttpHeaders: interface{},
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.httpHeaders">HttpHeaders</a></code> | <code>interface{}</code> | http_headers block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.path">Path</a></code> | <code>*string</code> | Path to access on the HTTP server. Defaults to '/'. |

---

##### `HttpHeaders`<sup>Optional</sup> <a name="HttpHeaders" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.httpHeaders"></a>

```go
HttpHeaders interface{}
```

- *Type:* interface{}

http_headers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#http_headers CloudRunV2Service#http_headers}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#path CloudRunV2Service#path}

---

### CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders <a name="CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.property.name">Name</a></code> | <code>*string</code> | The header field name. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.property.value">Value</a></code> | <code>*string</code> | The header field value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.property.name"></a>

```go
Name *string
```

- *Type:* *string

The header field name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#name CloudRunV2Service#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders.property.value"></a>

```go
Value *string
```

- *Type:* *string

The header field value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#value CloudRunV2Service#value}

---

### CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket <a name="CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket {
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket.property.port">Port</a></code> | <code>*f64</code> | Port number to access on the container. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port number to access on the container.

Must be in the range 1 to 65535. If not specified, defaults to 8080.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#port CloudRunV2Service#port}

---

### CloudRunV2ServiceTemplateContainersVolumeMounts <a name="CloudRunV2ServiceTemplateContainersVolumeMounts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTemplateContainersVolumeMounts {
	MountPath: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts.property.mountPath">MountPath</a></code> | <code>*string</code> | Path within the container at which the volume should be mounted. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts.property.name">Name</a></code> | <code>*string</code> | This must match the Name of a Volume. |

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts.property.mountPath"></a>

```go
MountPath *string
```

- *Type:* *string

Path within the container at which the volume should be mounted.

Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#mount_path CloudRunV2Service#mount_path}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMounts.property.name"></a>

```go
Name *string
```

- *Type:* *string

This must match the Name of a Volume.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#name CloudRunV2Service#name}

---

### CloudRunV2ServiceTemplateScaling <a name="CloudRunV2ServiceTemplateScaling" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTemplateScaling {
	MaxInstanceCount: *f64,
	MinInstanceCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>*f64</code> | Maximum number of serving instances that this resource should have. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling.property.minInstanceCount">MinInstanceCount</a></code> | <code>*f64</code> | Minimum number of serving instances that this resource should have. |

---

##### `MaxInstanceCount`<sup>Optional</sup> <a name="MaxInstanceCount" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling.property.maxInstanceCount"></a>

```go
MaxInstanceCount *f64
```

- *Type:* *f64

Maximum number of serving instances that this resource should have.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#max_instance_count CloudRunV2Service#max_instance_count}

---

##### `MinInstanceCount`<sup>Optional</sup> <a name="MinInstanceCount" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling.property.minInstanceCount"></a>

```go
MinInstanceCount *f64
```

- *Type:* *f64

Minimum number of serving instances that this resource should have.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#min_instance_count CloudRunV2Service#min_instance_count}

---

### CloudRunV2ServiceTemplateVolumes <a name="CloudRunV2ServiceTemplateVolumes" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTemplateVolumes {
	Name: *string,
	CloudSqlInstance: github.com/cdktf/cdktf-provider-google-go/google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance,
	Secret: github.com/cdktf/cdktf-provider-google-go/google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.property.name">Name</a></code> | <code>*string</code> | Volume's name. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.property.cloudSqlInstance">CloudSqlInstance</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance">CloudRunV2ServiceTemplateVolumesCloudSqlInstance</a></code> | cloud_sql_instance block. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret">CloudRunV2ServiceTemplateVolumesSecret</a></code> | secret block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Volume's name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#name CloudRunV2Service#name}

---

##### `CloudSqlInstance`<sup>Optional</sup> <a name="CloudSqlInstance" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.property.cloudSqlInstance"></a>

```go
CloudSqlInstance CloudRunV2ServiceTemplateVolumesCloudSqlInstance
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance">CloudRunV2ServiceTemplateVolumesCloudSqlInstance</a>

cloud_sql_instance block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#cloud_sql_instance CloudRunV2Service#cloud_sql_instance}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumes.property.secret"></a>

```go
Secret CloudRunV2ServiceTemplateVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret">CloudRunV2ServiceTemplateVolumesSecret</a>

secret block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#secret CloudRunV2Service#secret}

---

### CloudRunV2ServiceTemplateVolumesCloudSqlInstance <a name="CloudRunV2ServiceTemplateVolumesCloudSqlInstance" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance {
	Instances: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance.property.instances">Instances</a></code> | <code>*[]*string</code> | The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}. |

---

##### `Instances`<sup>Optional</sup> <a name="Instances" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance.property.instances"></a>

```go
Instances *[]*string
```

- *Type:* *[]*string

The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#instances CloudRunV2Service#instances}

---

### CloudRunV2ServiceTemplateVolumesSecret <a name="CloudRunV2ServiceTemplateVolumesSecret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTemplateVolumesSecret {
	Secret: *string,
	DefaultMode: *f64,
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret.property.secret">Secret</a></code> | <code>*string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret.property.defaultMode">DefaultMode</a></code> | <code>*f64</code> | Integer representation of mode bits to use on created files by default. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret.property.items">Items</a></code> | <code>interface{}</code> | items block. |

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

The name of the secret in Cloud Secret Manager.

Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#secret CloudRunV2Service#secret}

---

##### `DefaultMode`<sup>Optional</sup> <a name="DefaultMode" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret.property.defaultMode"></a>

```go
DefaultMode *f64
```

- *Type:* *f64

Integer representation of mode bits to use on created files by default.

Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#default_mode CloudRunV2Service#default_mode}

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

items block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#items CloudRunV2Service#items}

---

### CloudRunV2ServiceTemplateVolumesSecretItems <a name="CloudRunV2ServiceTemplateVolumesSecretItems" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTemplateVolumesSecretItems {
	Mode: *f64,
	Path: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems.property.mode">Mode</a></code> | <code>*f64</code> | Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems.property.path">Path</a></code> | <code>*string</code> | The relative path of the secret in the container. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems.property.version">Version</a></code> | <code>*string</code> | The Cloud Secret Manager secret version. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems.property.mode"></a>

```go
Mode *f64
```

- *Type:* *f64

Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal).

If 0 or not set, the Volume's default mode will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#mode CloudRunV2Service#mode}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems.property.path"></a>

```go
Path *string
```

- *Type:* *string

The relative path of the secret in the container.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#path CloudRunV2Service#path}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItems.property.version"></a>

```go
Version *string
```

- *Type:* *string

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#version CloudRunV2Service#version}

---

### CloudRunV2ServiceTemplateVpcAccess <a name="CloudRunV2ServiceTemplateVpcAccess" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTemplateVpcAccess {
	Connector: *string,
	Egress: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess.property.connector">Connector</a></code> | <code>*string</code> | VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess.property.egress">Egress</a></code> | <code>*string</code> | Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]. |

---

##### `Connector`<sup>Optional</sup> <a name="Connector" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess.property.connector"></a>

```go
Connector *string
```

- *Type:* *string

VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#connector CloudRunV2Service#connector}

---

##### `Egress`<sup>Optional</sup> <a name="Egress" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess.property.egress"></a>

```go
Egress *string
```

- *Type:* *string

Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#egress CloudRunV2Service#egress}

---

### CloudRunV2ServiceTerminalCondition <a name="CloudRunV2ServiceTerminalCondition" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTerminalCondition {

}
```


### CloudRunV2ServiceTimeouts <a name="CloudRunV2ServiceTimeouts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#create CloudRunV2Service#create}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#delete CloudRunV2Service#delete}. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#update CloudRunV2Service#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#create CloudRunV2Service#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#delete CloudRunV2Service#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#update CloudRunV2Service#update}.

---

### CloudRunV2ServiceTraffic <a name="CloudRunV2ServiceTraffic" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTraffic {
	Percent: *f64,
	Revision: *string,
	Tag: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.property.percent">Percent</a></code> | <code>*f64</code> | Specifies percent of the traffic to this Revision. This defaults to zero if unspecified. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.property.revision">Revision</a></code> | <code>*string</code> | Revision to which to send this portion of traffic, if traffic allocation is by revision. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.property.tag">Tag</a></code> | <code>*string</code> | Indicates a string to be part of the URI to exclusively reference this target. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.property.type">Type</a></code> | <code>*string</code> | The allocation type for this traffic target. Possible values: ["TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST", "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"]. |

---

##### `Percent`<sup>Optional</sup> <a name="Percent" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.property.percent"></a>

```go
Percent *f64
```

- *Type:* *f64

Specifies percent of the traffic to this Revision. This defaults to zero if unspecified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#percent CloudRunV2Service#percent}

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.property.revision"></a>

```go
Revision *string
```

- *Type:* *string

Revision to which to send this portion of traffic, if traffic allocation is by revision.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#revision CloudRunV2Service#revision}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

Indicates a string to be part of the URI to exclusively reference this target.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#tag CloudRunV2Service#tag}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTraffic.property.type"></a>

```go
Type *string
```

- *Type:* *string

The allocation type for this traffic target. Possible values: ["TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST", "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_service#type CloudRunV2Service#type}

---

### CloudRunV2ServiceTrafficStatuses <a name="CloudRunV2ServiceTrafficStatuses" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatuses.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

&cloudrunv2service.CloudRunV2ServiceTrafficStatuses {

}
```


## Classes <a name="Classes" id="Classes"></a>

### CloudRunV2ServiceBinaryAuthorizationOutputReference <a name="CloudRunV2ServiceBinaryAuthorizationOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceBinaryAuthorizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunV2ServiceBinaryAuthorizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.resetBreakglassJustification">ResetBreakglassJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.resetUseDefault">ResetUseDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBreakglassJustification` <a name="ResetBreakglassJustification" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.resetBreakglassJustification"></a>

```go
func ResetBreakglassJustification()
```

##### `ResetUseDefault` <a name="ResetUseDefault" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.resetUseDefault"></a>

```go
func ResetUseDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.breakglassJustificationInput">BreakglassJustificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.useDefaultInput">UseDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.breakglassJustification">BreakglassJustification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.useDefault">UseDefault</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization">CloudRunV2ServiceBinaryAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BreakglassJustificationInput`<sup>Optional</sup> <a name="BreakglassJustificationInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.breakglassJustificationInput"></a>

```go
func BreakglassJustificationInput() *string
```

- *Type:* *string

---

##### `UseDefaultInput`<sup>Optional</sup> <a name="UseDefaultInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.useDefaultInput"></a>

```go
func UseDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `BreakglassJustification`<sup>Required</sup> <a name="BreakglassJustification" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.breakglassJustification"></a>

```go
func BreakglassJustification() *string
```

- *Type:* *string

---

##### `UseDefault`<sup>Required</sup> <a name="UseDefault" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.useDefault"></a>

```go
func UseDefault() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorizationOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunV2ServiceBinaryAuthorization
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceBinaryAuthorization">CloudRunV2ServiceBinaryAuthorization</a>

---


### CloudRunV2ServiceConditionsList <a name="CloudRunV2ServiceConditionsList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunV2ServiceConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.get"></a>

```go
func Get(index *f64) CloudRunV2ServiceConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudRunV2ServiceConditionsOutputReference <a name="CloudRunV2ServiceConditionsOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunV2ServiceConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.executionReason">ExecutionReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.revisionReason">RevisionReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditions">CloudRunV2ServiceConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExecutionReason`<sup>Required</sup> <a name="ExecutionReason" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.executionReason"></a>

```go
func ExecutionReason() *string
```

- *Type:* *string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.lastTransitionTime"></a>

```go
func LastTransitionTime() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `RevisionReason`<sup>Required</sup> <a name="RevisionReason" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.revisionReason"></a>

```go
func RevisionReason() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunV2ServiceConditions
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceConditions">CloudRunV2ServiceConditions</a>

---


### CloudRunV2ServiceTemplateContainersEnvList <a name="CloudRunV2ServiceTemplateContainersEnvList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateContainersEnvList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunV2ServiceTemplateContainersEnvList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.get"></a>

```go
func Get(index *f64) CloudRunV2ServiceTemplateContainersEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunV2ServiceTemplateContainersEnvOutputReference <a name="CloudRunV2ServiceTemplateContainersEnvOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateContainersEnvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunV2ServiceTemplateContainersEnvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.putValueSource">PutValueSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.resetValueSource">ResetValueSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueSource` <a name="PutValueSource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.putValueSource"></a>

```go
func PutValueSource(value CloudRunV2ServiceTemplateContainersEnvValueSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.putValueSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource">CloudRunV2ServiceTemplateContainersEnvValueSource</a>

---

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetValueSource` <a name="ResetValueSource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.resetValueSource"></a>

```go
func ResetValueSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueSource">ValueSource</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference">CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueSourceInput">ValueSourceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource">CloudRunV2ServiceTemplateContainersEnvValueSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueSource`<sup>Required</sup> <a name="ValueSource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueSource"></a>

```go
func ValueSource() CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference">CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ValueSourceInput`<sup>Optional</sup> <a name="ValueSourceInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.valueSourceInput"></a>

```go
func ValueSourceInput() CloudRunV2ServiceTemplateContainersEnvValueSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource">CloudRunV2ServiceTemplateContainersEnvValueSource</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference <a name="CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef">PutSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef">ResetSecretKeyRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretKeyRef` <a name="PutSecretKeyRef" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef"></a>

```go
func PutSecretKeyRef(value CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.putSecretKeyRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a>

---

##### `ResetSecretKeyRef` <a name="ResetSecretKeyRef" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.resetSecretKeyRef"></a>

```go
func ResetSecretKeyRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef">SecretKeyRef</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput">SecretKeyRefInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource">CloudRunV2ServiceTemplateContainersEnvValueSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretKeyRef`<sup>Required</sup> <a name="SecretKeyRef" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.secretKeyRef"></a>

```go
func SecretKeyRef() CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference</a>

---

##### `SecretKeyRefInput`<sup>Optional</sup> <a name="SecretKeyRefInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.secretKeyRefInput"></a>

```go
func SecretKeyRefInput() CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunV2ServiceTemplateContainersEnvValueSource
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSource">CloudRunV2ServiceTemplateContainersEnvValueSource</a>

---


### CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference <a name="CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef">CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef</a>

---


### CloudRunV2ServiceTemplateContainersList <a name="CloudRunV2ServiceTemplateContainersList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateContainersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunV2ServiceTemplateContainersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.get"></a>

```go
func Get(index *f64) CloudRunV2ServiceTemplateContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference <a name="CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.resetService"></a>

```go
func ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc">CloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunV2ServiceTemplateContainersLivenessProbeGrpc
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc">CloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a>

---


### CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList <a name="CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.get"></a>

```go
func Get(index *f64) CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference <a name="CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference <a name="CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.putHttpHeaders">PutHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders">ResetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpHeaders` <a name="PutHttpHeaders" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.putHttpHeaders"></a>

```go
func PutHttpHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHttpHeaders` <a name="ResetHttpHeaders" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders"></a>

```go
func ResetHttpHeaders()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeaders">HttpHeaders</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput">HttpHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpHeaders`<sup>Required</sup> <a name="HttpHeaders" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeaders"></a>

```go
func HttpHeaders() CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList</a>

---

##### `HttpHeadersInput`<sup>Optional</sup> <a name="HttpHeadersInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```go
func HttpHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a>

---


### CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference <a name="CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateContainersLivenessProbeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putGrpc">PutGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putHttpGet">PutHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putTcpSocket">PutTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetGrpc">ResetGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetHttpGet">ResetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetInitialDelaySeconds">ResetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetPeriodSeconds">ResetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetTcpSocket">ResetTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGrpc` <a name="PutGrpc" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putGrpc"></a>

```go
func PutGrpc(value CloudRunV2ServiceTemplateContainersLivenessProbeGrpc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putGrpc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc">CloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a>

---

##### `PutHttpGet` <a name="PutHttpGet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putHttpGet"></a>

```go
func PutHttpGet(value CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a>

---

##### `PutTcpSocket` <a name="PutTcpSocket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putTcpSocket"></a>

```go
func PutTcpSocket(value CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.putTcpSocket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a>

---

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetFailureThreshold"></a>

```go
func ResetFailureThreshold()
```

##### `ResetGrpc` <a name="ResetGrpc" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetGrpc"></a>

```go
func ResetGrpc()
```

##### `ResetHttpGet` <a name="ResetHttpGet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetHttpGet"></a>

```go
func ResetHttpGet()
```

##### `ResetInitialDelaySeconds` <a name="ResetInitialDelaySeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetInitialDelaySeconds"></a>

```go
func ResetInitialDelaySeconds()
```

##### `ResetPeriodSeconds` <a name="ResetPeriodSeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetPeriodSeconds"></a>

```go
func ResetPeriodSeconds()
```

##### `ResetTcpSocket` <a name="ResetTcpSocket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetTcpSocket"></a>

```go
func ResetTcpSocket()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.resetTimeoutSeconds"></a>

```go
func ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.grpc">Grpc</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference">CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.tcpSocket">TcpSocket</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.grpcInput">GrpcInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc">CloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.httpGetInput">HttpGetInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.initialDelaySecondsInput">InitialDelaySecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.tcpSocketInput">TcpSocketInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe">CloudRunV2ServiceTemplateContainersLivenessProbe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Grpc`<sup>Required</sup> <a name="Grpc" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.grpc"></a>

```go
func Grpc() CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference">CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference</a>

---

##### `HttpGet`<sup>Required</sup> <a name="HttpGet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.httpGet"></a>

```go
func HttpGet() CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference</a>

---

##### `TcpSocket`<sup>Required</sup> <a name="TcpSocket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.tcpSocket"></a>

```go
func TcpSocket() CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference</a>

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.failureThresholdInput"></a>

```go
func FailureThresholdInput() *f64
```

- *Type:* *f64

---

##### `GrpcInput`<sup>Optional</sup> <a name="GrpcInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.grpcInput"></a>

```go
func GrpcInput() CloudRunV2ServiceTemplateContainersLivenessProbeGrpc
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeGrpc">CloudRunV2ServiceTemplateContainersLivenessProbeGrpc</a>

---

##### `HttpGetInput`<sup>Optional</sup> <a name="HttpGetInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.httpGetInput"></a>

```go
func HttpGetInput() CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet">CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet</a>

---

##### `InitialDelaySecondsInput`<sup>Optional</sup> <a name="InitialDelaySecondsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.initialDelaySecondsInput"></a>

```go
func InitialDelaySecondsInput() *f64
```

- *Type:* *f64

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.periodSecondsInput"></a>

```go
func PeriodSecondsInput() *f64
```

- *Type:* *f64

---

##### `TcpSocketInput`<sup>Optional</sup> <a name="TcpSocketInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.tcpSocketInput"></a>

```go
func TcpSocketInput() CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a>

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.timeoutSecondsInput"></a>

```go
func TimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `InitialDelaySeconds`<sup>Required</sup> <a name="InitialDelaySeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.initialDelaySeconds"></a>

```go
func InitialDelaySeconds() *f64
```

- *Type:* *f64

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.periodSeconds"></a>

```go
func PeriodSeconds() *f64
```

- *Type:* *f64

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunV2ServiceTemplateContainersLivenessProbe
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe">CloudRunV2ServiceTemplateContainersLivenessProbe</a>

---


### CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference <a name="CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket">CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket</a>

---


### CloudRunV2ServiceTemplateContainersOutputReference <a name="CloudRunV2ServiceTemplateContainersOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateContainersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunV2ServiceTemplateContainersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putEnv">PutEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putLivenessProbe">PutLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putPorts">PutPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putStartupProbe">PutStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putVolumeMounts">PutVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetLivenessProbe">ResetLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetStartupProbe">ResetStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetVolumeMounts">ResetVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetWorkingDir">ResetWorkingDir</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnv` <a name="PutEnv" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putEnv"></a>

```go
func PutEnv(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putEnv.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLivenessProbe` <a name="PutLivenessProbe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putLivenessProbe"></a>

```go
func PutLivenessProbe(value CloudRunV2ServiceTemplateContainersLivenessProbe)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putLivenessProbe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe">CloudRunV2ServiceTemplateContainersLivenessProbe</a>

---

##### `PutPorts` <a name="PutPorts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putPorts"></a>

```go
func PutPorts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putPorts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResources` <a name="PutResources" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putResources"></a>

```go
func PutResources(value CloudRunV2ServiceTemplateContainersResources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources">CloudRunV2ServiceTemplateContainersResources</a>

---

##### `PutStartupProbe` <a name="PutStartupProbe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putStartupProbe"></a>

```go
func PutStartupProbe(value CloudRunV2ServiceTemplateContainersStartupProbe)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe">CloudRunV2ServiceTemplateContainersStartupProbe</a>

---

##### `PutVolumeMounts` <a name="PutVolumeMounts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putVolumeMounts"></a>

```go
func PutVolumeMounts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetCommand"></a>

```go
func ResetCommand()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetEnv"></a>

```go
func ResetEnv()
```

##### `ResetLivenessProbe` <a name="ResetLivenessProbe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetLivenessProbe"></a>

```go
func ResetLivenessProbe()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetPorts"></a>

```go
func ResetPorts()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetResources"></a>

```go
func ResetResources()
```

##### `ResetStartupProbe` <a name="ResetStartupProbe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetStartupProbe"></a>

```go
func ResetStartupProbe()
```

##### `ResetVolumeMounts` <a name="ResetVolumeMounts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetVolumeMounts"></a>

```go
func ResetVolumeMounts()
```

##### `ResetWorkingDir` <a name="ResetWorkingDir" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.resetWorkingDir"></a>

```go
func ResetWorkingDir()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.env">Env</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList">CloudRunV2ServiceTemplateContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.livenessProbe">LivenessProbe</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference">CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.ports">Ports</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList">CloudRunV2ServiceTemplateContainersPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference">CloudRunV2ServiceTemplateContainersResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.startupProbe">StartupProbe</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference">CloudRunV2ServiceTemplateContainersStartupProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.volumeMounts">VolumeMounts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList">CloudRunV2ServiceTemplateContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.commandInput">CommandInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.envInput">EnvInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.livenessProbeInput">LivenessProbeInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe">CloudRunV2ServiceTemplateContainersLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.portsInput">PortsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources">CloudRunV2ServiceTemplateContainersResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.startupProbeInput">StartupProbeInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe">CloudRunV2ServiceTemplateContainersStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.volumeMountsInput">VolumeMountsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.workingDirInput">WorkingDirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.workingDir">WorkingDir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.env"></a>

```go
func Env() CloudRunV2ServiceTemplateContainersEnvList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersEnvList">CloudRunV2ServiceTemplateContainersEnvList</a>

---

##### `LivenessProbe`<sup>Required</sup> <a name="LivenessProbe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.livenessProbe"></a>

```go
func LivenessProbe() CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference">CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference</a>

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.ports"></a>

```go
func Ports() CloudRunV2ServiceTemplateContainersPortsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList">CloudRunV2ServiceTemplateContainersPortsList</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.resources"></a>

```go
func Resources() CloudRunV2ServiceTemplateContainersResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference">CloudRunV2ServiceTemplateContainersResourcesOutputReference</a>

---

##### `StartupProbe`<sup>Required</sup> <a name="StartupProbe" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.startupProbe"></a>

```go
func StartupProbe() CloudRunV2ServiceTemplateContainersStartupProbeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference">CloudRunV2ServiceTemplateContainersStartupProbeOutputReference</a>

---

##### `VolumeMounts`<sup>Required</sup> <a name="VolumeMounts" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.volumeMounts"></a>

```go
func VolumeMounts() CloudRunV2ServiceTemplateContainersVolumeMountsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList">CloudRunV2ServiceTemplateContainersVolumeMountsList</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.commandInput"></a>

```go
func CommandInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.envInput"></a>

```go
func EnvInput() interface{}
```

- *Type:* interface{}

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `LivenessProbeInput`<sup>Optional</sup> <a name="LivenessProbeInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.livenessProbeInput"></a>

```go
func LivenessProbeInput() CloudRunV2ServiceTemplateContainersLivenessProbe
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersLivenessProbe">CloudRunV2ServiceTemplateContainersLivenessProbe</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.portsInput"></a>

```go
func PortsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() CloudRunV2ServiceTemplateContainersResources
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources">CloudRunV2ServiceTemplateContainersResources</a>

---

##### `StartupProbeInput`<sup>Optional</sup> <a name="StartupProbeInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.startupProbeInput"></a>

```go
func StartupProbeInput() CloudRunV2ServiceTemplateContainersStartupProbe
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe">CloudRunV2ServiceTemplateContainersStartupProbe</a>

---

##### `VolumeMountsInput`<sup>Optional</sup> <a name="VolumeMountsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.volumeMountsInput"></a>

```go
func VolumeMountsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkingDirInput`<sup>Optional</sup> <a name="WorkingDirInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.workingDirInput"></a>

```go
func WorkingDirInput() *string
```

- *Type:* *string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `WorkingDir`<sup>Required</sup> <a name="WorkingDir" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.workingDir"></a>

```go
func WorkingDir() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunV2ServiceTemplateContainersPortsList <a name="CloudRunV2ServiceTemplateContainersPortsList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateContainersPortsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunV2ServiceTemplateContainersPortsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.get"></a>

```go
func Get(index *f64) CloudRunV2ServiceTemplateContainersPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunV2ServiceTemplateContainersPortsOutputReference <a name="CloudRunV2ServiceTemplateContainersPortsOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateContainersPortsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunV2ServiceTemplateContainersPortsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.resetContainerPort">ResetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerPort` <a name="ResetContainerPort" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.resetContainerPort"></a>

```go
func ResetContainerPort()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.containerPortInput">ContainerPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerPortInput`<sup>Optional</sup> <a name="ContainerPortInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.containerPortInput"></a>

```go
func ContainerPortInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.containerPort"></a>

```go
func ContainerPort() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersPortsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunV2ServiceTemplateContainersResourcesOutputReference <a name="CloudRunV2ServiceTemplateContainersResourcesOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateContainersResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunV2ServiceTemplateContainersResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.resetCpuIdle">ResetCpuIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.resetLimits">ResetLimits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuIdle` <a name="ResetCpuIdle" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.resetCpuIdle"></a>

```go
func ResetCpuIdle()
```

##### `ResetLimits` <a name="ResetLimits" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.resetLimits"></a>

```go
func ResetLimits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.cpuIdleInput">CpuIdleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.limitsInput">LimitsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.cpuIdle">CpuIdle</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.limits">Limits</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources">CloudRunV2ServiceTemplateContainersResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuIdleInput`<sup>Optional</sup> <a name="CpuIdleInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.cpuIdleInput"></a>

```go
func CpuIdleInput() interface{}
```

- *Type:* interface{}

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.limitsInput"></a>

```go
func LimitsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CpuIdle`<sup>Required</sup> <a name="CpuIdle" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.cpuIdle"></a>

```go
func CpuIdle() interface{}
```

- *Type:* interface{}

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.limits"></a>

```go
func Limits() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunV2ServiceTemplateContainersResources
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersResources">CloudRunV2ServiceTemplateContainersResources</a>

---


### CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference <a name="CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.resetService"></a>

```go
func ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc">CloudRunV2ServiceTemplateContainersStartupProbeGrpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunV2ServiceTemplateContainersStartupProbeGrpc
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc">CloudRunV2ServiceTemplateContainersStartupProbeGrpc</a>

---


### CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList <a name="CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.get"></a>

```go
func Get(index *f64) CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference <a name="CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference <a name="CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.putHttpHeaders">PutHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetHttpHeaders">ResetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpHeaders` <a name="PutHttpHeaders" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.putHttpHeaders"></a>

```go
func PutHttpHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHttpHeaders` <a name="ResetHttpHeaders" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetHttpHeaders"></a>

```go
func ResetHttpHeaders()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeaders">HttpHeaders</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput">HttpHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet">CloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpHeaders`<sup>Required</sup> <a name="HttpHeaders" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeaders"></a>

```go
func HttpHeaders() CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList</a>

---

##### `HttpHeadersInput`<sup>Optional</sup> <a name="HttpHeadersInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```go
func HttpHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunV2ServiceTemplateContainersStartupProbeHttpGet
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet">CloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a>

---


### CloudRunV2ServiceTemplateContainersStartupProbeOutputReference <a name="CloudRunV2ServiceTemplateContainersStartupProbeOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateContainersStartupProbeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunV2ServiceTemplateContainersStartupProbeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putGrpc">PutGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putHttpGet">PutHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putTcpSocket">PutTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetGrpc">ResetGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetHttpGet">ResetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetInitialDelaySeconds">ResetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetPeriodSeconds">ResetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetTcpSocket">ResetTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGrpc` <a name="PutGrpc" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putGrpc"></a>

```go
func PutGrpc(value CloudRunV2ServiceTemplateContainersStartupProbeGrpc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putGrpc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc">CloudRunV2ServiceTemplateContainersStartupProbeGrpc</a>

---

##### `PutHttpGet` <a name="PutHttpGet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putHttpGet"></a>

```go
func PutHttpGet(value CloudRunV2ServiceTemplateContainersStartupProbeHttpGet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet">CloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a>

---

##### `PutTcpSocket` <a name="PutTcpSocket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putTcpSocket"></a>

```go
func PutTcpSocket(value CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.putTcpSocket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a>

---

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetFailureThreshold"></a>

```go
func ResetFailureThreshold()
```

##### `ResetGrpc` <a name="ResetGrpc" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetGrpc"></a>

```go
func ResetGrpc()
```

##### `ResetHttpGet` <a name="ResetHttpGet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetHttpGet"></a>

```go
func ResetHttpGet()
```

##### `ResetInitialDelaySeconds` <a name="ResetInitialDelaySeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetInitialDelaySeconds"></a>

```go
func ResetInitialDelaySeconds()
```

##### `ResetPeriodSeconds` <a name="ResetPeriodSeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetPeriodSeconds"></a>

```go
func ResetPeriodSeconds()
```

##### `ResetTcpSocket` <a name="ResetTcpSocket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetTcpSocket"></a>

```go
func ResetTcpSocket()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.resetTimeoutSeconds"></a>

```go
func ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.grpc">Grpc</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference">CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.tcpSocket">TcpSocket</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.grpcInput">GrpcInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc">CloudRunV2ServiceTemplateContainersStartupProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.httpGetInput">HttpGetInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet">CloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.initialDelaySecondsInput">InitialDelaySecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.tcpSocketInput">TcpSocketInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe">CloudRunV2ServiceTemplateContainersStartupProbe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Grpc`<sup>Required</sup> <a name="Grpc" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.grpc"></a>

```go
func Grpc() CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference">CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference</a>

---

##### `HttpGet`<sup>Required</sup> <a name="HttpGet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.httpGet"></a>

```go
func HttpGet() CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference">CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference</a>

---

##### `TcpSocket`<sup>Required</sup> <a name="TcpSocket" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.tcpSocket"></a>

```go
func TcpSocket() CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference</a>

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.failureThresholdInput"></a>

```go
func FailureThresholdInput() *f64
```

- *Type:* *f64

---

##### `GrpcInput`<sup>Optional</sup> <a name="GrpcInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.grpcInput"></a>

```go
func GrpcInput() CloudRunV2ServiceTemplateContainersStartupProbeGrpc
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeGrpc">CloudRunV2ServiceTemplateContainersStartupProbeGrpc</a>

---

##### `HttpGetInput`<sup>Optional</sup> <a name="HttpGetInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.httpGetInput"></a>

```go
func HttpGetInput() CloudRunV2ServiceTemplateContainersStartupProbeHttpGet
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeHttpGet">CloudRunV2ServiceTemplateContainersStartupProbeHttpGet</a>

---

##### `InitialDelaySecondsInput`<sup>Optional</sup> <a name="InitialDelaySecondsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.initialDelaySecondsInput"></a>

```go
func InitialDelaySecondsInput() *f64
```

- *Type:* *f64

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.periodSecondsInput"></a>

```go
func PeriodSecondsInput() *f64
```

- *Type:* *f64

---

##### `TcpSocketInput`<sup>Optional</sup> <a name="TcpSocketInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.tcpSocketInput"></a>

```go
func TcpSocketInput() CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a>

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.timeoutSecondsInput"></a>

```go
func TimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `InitialDelaySeconds`<sup>Required</sup> <a name="InitialDelaySeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.initialDelaySeconds"></a>

```go
func InitialDelaySeconds() *f64
```

- *Type:* *f64

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.periodSeconds"></a>

```go
func PeriodSeconds() *f64
```

- *Type:* *f64

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunV2ServiceTemplateContainersStartupProbe
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbe">CloudRunV2ServiceTemplateContainersStartupProbe</a>

---


### CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference <a name="CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket">CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket</a>

---


### CloudRunV2ServiceTemplateContainersVolumeMountsList <a name="CloudRunV2ServiceTemplateContainersVolumeMountsList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateContainersVolumeMountsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunV2ServiceTemplateContainersVolumeMountsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.get"></a>

```go
func Get(index *f64) CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference <a name="CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateContainersVolumeMountsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.mountPath">MountPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```go
func MountPathInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.mountPath"></a>

```go
func MountPath() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunV2ServiceTemplateOutputReference <a name="CloudRunV2ServiceTemplateOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunV2ServiceTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putContainers">PutContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putScaling">PutScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putVpcAccess">PutVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetContainers">ResetContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetEncryptionKey">ResetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetExecutionEnvironment">ResetExecutionEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetMaxInstanceRequestConcurrency">ResetMaxInstanceRequestConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetScaling">ResetScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetVpcAccess">ResetVpcAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainers` <a name="PutContainers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putContainers"></a>

```go
func PutContainers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putContainers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScaling` <a name="PutScaling" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putScaling"></a>

```go
func PutScaling(value CloudRunV2ServiceTemplateScaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling">CloudRunV2ServiceTemplateScaling</a>

---

##### `PutVolumes` <a name="PutVolumes" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putVolumes"></a>

```go
func PutVolumes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putVolumes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVpcAccess` <a name="PutVpcAccess" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putVpcAccess"></a>

```go
func PutVpcAccess(value CloudRunV2ServiceTemplateVpcAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.putVpcAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess">CloudRunV2ServiceTemplateVpcAccess</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetContainers` <a name="ResetContainers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetContainers"></a>

```go
func ResetContainers()
```

##### `ResetEncryptionKey` <a name="ResetEncryptionKey" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetEncryptionKey"></a>

```go
func ResetEncryptionKey()
```

##### `ResetExecutionEnvironment` <a name="ResetExecutionEnvironment" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetExecutionEnvironment"></a>

```go
func ResetExecutionEnvironment()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMaxInstanceRequestConcurrency` <a name="ResetMaxInstanceRequestConcurrency" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetMaxInstanceRequestConcurrency"></a>

```go
func ResetMaxInstanceRequestConcurrency()
```

##### `ResetRevision` <a name="ResetRevision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetRevision"></a>

```go
func ResetRevision()
```

##### `ResetScaling` <a name="ResetScaling" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetScaling"></a>

```go
func ResetScaling()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetVolumes"></a>

```go
func ResetVolumes()
```

##### `ResetVpcAccess` <a name="ResetVpcAccess" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.resetVpcAccess"></a>

```go
func ResetVpcAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.containers">Containers</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList">CloudRunV2ServiceTemplateContainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.scaling">Scaling</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference">CloudRunV2ServiceTemplateScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList">CloudRunV2ServiceTemplateVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.vpcAccess">VpcAccess</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference">CloudRunV2ServiceTemplateVpcAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.containersInput">ContainersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.executionEnvironmentInput">ExecutionEnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.maxInstanceRequestConcurrencyInput">MaxInstanceRequestConcurrencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.revisionInput">RevisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.scalingInput">ScalingInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling">CloudRunV2ServiceTemplateScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.volumesInput">VolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.vpcAccessInput">VpcAccessInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess">CloudRunV2ServiceTemplateVpcAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.executionEnvironment">ExecutionEnvironment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.maxInstanceRequestConcurrency">MaxInstanceRequestConcurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.revision">Revision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate">CloudRunV2ServiceTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.containers"></a>

```go
func Containers() CloudRunV2ServiceTemplateContainersList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateContainersList">CloudRunV2ServiceTemplateContainersList</a>

---

##### `Scaling`<sup>Required</sup> <a name="Scaling" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.scaling"></a>

```go
func Scaling() CloudRunV2ServiceTemplateScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference">CloudRunV2ServiceTemplateScalingOutputReference</a>

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.volumes"></a>

```go
func Volumes() CloudRunV2ServiceTemplateVolumesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList">CloudRunV2ServiceTemplateVolumesList</a>

---

##### `VpcAccess`<sup>Required</sup> <a name="VpcAccess" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.vpcAccess"></a>

```go
func VpcAccess() CloudRunV2ServiceTemplateVpcAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference">CloudRunV2ServiceTemplateVpcAccessOutputReference</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ContainersInput`<sup>Optional</sup> <a name="ContainersInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.containersInput"></a>

```go
func ContainersInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.encryptionKeyInput"></a>

```go
func EncryptionKeyInput() *string
```

- *Type:* *string

---

##### `ExecutionEnvironmentInput`<sup>Optional</sup> <a name="ExecutionEnvironmentInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.executionEnvironmentInput"></a>

```go
func ExecutionEnvironmentInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxInstanceRequestConcurrencyInput`<sup>Optional</sup> <a name="MaxInstanceRequestConcurrencyInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.maxInstanceRequestConcurrencyInput"></a>

```go
func MaxInstanceRequestConcurrencyInput() *f64
```

- *Type:* *f64

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.revisionInput"></a>

```go
func RevisionInput() *string
```

- *Type:* *string

---

##### `ScalingInput`<sup>Optional</sup> <a name="ScalingInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.scalingInput"></a>

```go
func ScalingInput() CloudRunV2ServiceTemplateScaling
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling">CloudRunV2ServiceTemplateScaling</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.volumesInput"></a>

```go
func VolumesInput() interface{}
```

- *Type:* interface{}

---

##### `VpcAccessInput`<sup>Optional</sup> <a name="VpcAccessInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.vpcAccessInput"></a>

```go
func VpcAccessInput() CloudRunV2ServiceTemplateVpcAccess
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess">CloudRunV2ServiceTemplateVpcAccess</a>

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.encryptionKey"></a>

```go
func EncryptionKey() *string
```

- *Type:* *string

---

##### `ExecutionEnvironment`<sup>Required</sup> <a name="ExecutionEnvironment" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.executionEnvironment"></a>

```go
func ExecutionEnvironment() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MaxInstanceRequestConcurrency`<sup>Required</sup> <a name="MaxInstanceRequestConcurrency" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.maxInstanceRequestConcurrency"></a>

```go
func MaxInstanceRequestConcurrency() *f64
```

- *Type:* *f64

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.revision"></a>

```go
func Revision() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunV2ServiceTemplate
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplate">CloudRunV2ServiceTemplate</a>

---


### CloudRunV2ServiceTemplateScalingOutputReference <a name="CloudRunV2ServiceTemplateScalingOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateScalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunV2ServiceTemplateScalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.resetMaxInstanceCount">ResetMaxInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.resetMinInstanceCount">ResetMinInstanceCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxInstanceCount` <a name="ResetMaxInstanceCount" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.resetMaxInstanceCount"></a>

```go
func ResetMaxInstanceCount()
```

##### `ResetMinInstanceCount` <a name="ResetMinInstanceCount" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.resetMinInstanceCount"></a>

```go
func ResetMinInstanceCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.maxInstanceCountInput">MaxInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.minInstanceCountInput">MinInstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.minInstanceCount">MinInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling">CloudRunV2ServiceTemplateScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInstanceCountInput`<sup>Optional</sup> <a name="MaxInstanceCountInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.maxInstanceCountInput"></a>

```go
func MaxInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `MinInstanceCountInput`<sup>Optional</sup> <a name="MinInstanceCountInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.minInstanceCountInput"></a>

```go
func MinInstanceCountInput() *f64
```

- *Type:* *f64

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.maxInstanceCount"></a>

```go
func MaxInstanceCount() *f64
```

- *Type:* *f64

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.minInstanceCount"></a>

```go
func MinInstanceCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScalingOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunV2ServiceTemplateScaling
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateScaling">CloudRunV2ServiceTemplateScaling</a>

---


### CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference <a name="CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resetInstances">ResetInstances</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstances` <a name="ResetInstances" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.resetInstances"></a>

```go
func ResetInstances()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput">InstancesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.instances">Instances</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance">CloudRunV2ServiceTemplateVolumesCloudSqlInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.instancesInput"></a>

```go
func InstancesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.instances"></a>

```go
func Instances() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunV2ServiceTemplateVolumesCloudSqlInstance
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance">CloudRunV2ServiceTemplateVolumesCloudSqlInstance</a>

---


### CloudRunV2ServiceTemplateVolumesList <a name="CloudRunV2ServiceTemplateVolumesList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunV2ServiceTemplateVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.get"></a>

```go
func Get(index *f64) CloudRunV2ServiceTemplateVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunV2ServiceTemplateVolumesOutputReference <a name="CloudRunV2ServiceTemplateVolumesOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunV2ServiceTemplateVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putCloudSqlInstance">PutCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resetCloudSqlInstance">ResetCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudSqlInstance` <a name="PutCloudSqlInstance" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putCloudSqlInstance"></a>

```go
func PutCloudSqlInstance(value CloudRunV2ServiceTemplateVolumesCloudSqlInstance)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putCloudSqlInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance">CloudRunV2ServiceTemplateVolumesCloudSqlInstance</a>

---

##### `PutSecret` <a name="PutSecret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putSecret"></a>

```go
func PutSecret(value CloudRunV2ServiceTemplateVolumesSecret)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret">CloudRunV2ServiceTemplateVolumesSecret</a>

---

##### `ResetCloudSqlInstance` <a name="ResetCloudSqlInstance" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resetCloudSqlInstance"></a>

```go
func ResetCloudSqlInstance()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.resetSecret"></a>

```go
func ResetSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.cloudSqlInstance">CloudSqlInstance</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference">CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference">CloudRunV2ServiceTemplateVolumesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.cloudSqlInstanceInput">CloudSqlInstanceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance">CloudRunV2ServiceTemplateVolumesCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.secretInput">SecretInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret">CloudRunV2ServiceTemplateVolumesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudSqlInstance`<sup>Required</sup> <a name="CloudSqlInstance" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.cloudSqlInstance"></a>

```go
func CloudSqlInstance() CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference">CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.secret"></a>

```go
func Secret() CloudRunV2ServiceTemplateVolumesSecretOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference">CloudRunV2ServiceTemplateVolumesSecretOutputReference</a>

---

##### `CloudSqlInstanceInput`<sup>Optional</sup> <a name="CloudSqlInstanceInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.cloudSqlInstanceInput"></a>

```go
func CloudSqlInstanceInput() CloudRunV2ServiceTemplateVolumesCloudSqlInstance
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesCloudSqlInstance">CloudRunV2ServiceTemplateVolumesCloudSqlInstance</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.secretInput"></a>

```go
func SecretInput() CloudRunV2ServiceTemplateVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret">CloudRunV2ServiceTemplateVolumesSecret</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunV2ServiceTemplateVolumesSecretItemsList <a name="CloudRunV2ServiceTemplateVolumesSecretItemsList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateVolumesSecretItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunV2ServiceTemplateVolumesSecretItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.get"></a>

```go
func Get(index *f64) CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference <a name="CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateVolumesSecretItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.modeInput">ModeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.mode">Mode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.modeInput"></a>

```go
func ModeInput() *f64
```

- *Type:* *f64

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.mode"></a>

```go
func Mode() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunV2ServiceTemplateVolumesSecretOutputReference <a name="CloudRunV2ServiceTemplateVolumesSecretOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateVolumesSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunV2ServiceTemplateVolumesSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.resetDefaultMode">ResetDefaultMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.putItems.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultMode` <a name="ResetDefaultMode" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.resetDefaultMode"></a>

```go
func ResetDefaultMode()
```

##### `ResetItems` <a name="ResetItems" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.items">Items</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList">CloudRunV2ServiceTemplateVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.defaultModeInput">DefaultModeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.defaultMode">DefaultMode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret">CloudRunV2ServiceTemplateVolumesSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.items"></a>

```go
func Items() CloudRunV2ServiceTemplateVolumesSecretItemsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretItemsList">CloudRunV2ServiceTemplateVolumesSecretItemsList</a>

---

##### `DefaultModeInput`<sup>Optional</sup> <a name="DefaultModeInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.defaultModeInput"></a>

```go
func DefaultModeInput() *f64
```

- *Type:* *f64

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `DefaultMode`<sup>Required</sup> <a name="DefaultMode" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.defaultMode"></a>

```go
func DefaultMode() *f64
```

- *Type:* *f64

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunV2ServiceTemplateVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVolumesSecret">CloudRunV2ServiceTemplateVolumesSecret</a>

---


### CloudRunV2ServiceTemplateVpcAccessOutputReference <a name="CloudRunV2ServiceTemplateVpcAccessOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTemplateVpcAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunV2ServiceTemplateVpcAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.resetConnector">ResetConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.resetEgress">ResetEgress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnector` <a name="ResetConnector" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.resetConnector"></a>

```go
func ResetConnector()
```

##### `ResetEgress` <a name="ResetEgress" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.resetEgress"></a>

```go
func ResetEgress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.connectorInput">ConnectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.egressInput">EgressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.connector">Connector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.egress">Egress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess">CloudRunV2ServiceTemplateVpcAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectorInput`<sup>Optional</sup> <a name="ConnectorInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.connectorInput"></a>

```go
func ConnectorInput() *string
```

- *Type:* *string

---

##### `EgressInput`<sup>Optional</sup> <a name="EgressInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.egressInput"></a>

```go
func EgressInput() *string
```

- *Type:* *string

---

##### `Connector`<sup>Required</sup> <a name="Connector" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.connector"></a>

```go
func Connector() *string
```

- *Type:* *string

---

##### `Egress`<sup>Required</sup> <a name="Egress" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.egress"></a>

```go
func Egress() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunV2ServiceTemplateVpcAccess
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTemplateVpcAccess">CloudRunV2ServiceTemplateVpcAccess</a>

---


### CloudRunV2ServiceTerminalConditionList <a name="CloudRunV2ServiceTerminalConditionList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTerminalConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunV2ServiceTerminalConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.get"></a>

```go
func Get(index *f64) CloudRunV2ServiceTerminalConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudRunV2ServiceTerminalConditionOutputReference <a name="CloudRunV2ServiceTerminalConditionOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTerminalConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunV2ServiceTerminalConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.executionReason">ExecutionReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.revisionReason">RevisionReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalCondition">CloudRunV2ServiceTerminalCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExecutionReason`<sup>Required</sup> <a name="ExecutionReason" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.executionReason"></a>

```go
func ExecutionReason() *string
```

- *Type:* *string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.lastTransitionTime"></a>

```go
func LastTransitionTime() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `RevisionReason`<sup>Required</sup> <a name="RevisionReason" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.revisionReason"></a>

```go
func RevisionReason() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunV2ServiceTerminalCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTerminalCondition">CloudRunV2ServiceTerminalCondition</a>

---


### CloudRunV2ServiceTimeoutsOutputReference <a name="CloudRunV2ServiceTimeoutsOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunV2ServiceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunV2ServiceTrafficList <a name="CloudRunV2ServiceTrafficList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTrafficList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunV2ServiceTrafficList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.get"></a>

```go
func Get(index *f64) CloudRunV2ServiceTrafficOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunV2ServiceTrafficOutputReference <a name="CloudRunV2ServiceTrafficOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTrafficOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunV2ServiceTrafficOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resetPercent">ResetPercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPercent` <a name="ResetPercent" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resetPercent"></a>

```go
func ResetPercent()
```

##### `ResetRevision` <a name="ResetRevision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resetRevision"></a>

```go
func ResetRevision()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resetTag"></a>

```go
func ResetTag()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.percentInput">PercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.revisionInput">RevisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.percent">Percent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.revision">Revision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PercentInput`<sup>Optional</sup> <a name="PercentInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.percentInput"></a>

```go
func PercentInput() *f64
```

- *Type:* *f64

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.revisionInput"></a>

```go
func RevisionInput() *string
```

- *Type:* *string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.percent"></a>

```go
func Percent() *f64
```

- *Type:* *f64

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.revision"></a>

```go
func Revision() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunV2ServiceTrafficStatusesList <a name="CloudRunV2ServiceTrafficStatusesList" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTrafficStatusesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunV2ServiceTrafficStatusesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.get"></a>

```go
func Get(index *f64) CloudRunV2ServiceTrafficStatusesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudRunV2ServiceTrafficStatusesOutputReference <a name="CloudRunV2ServiceTrafficStatusesOutputReference" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunv2service"

cloudrunv2service.NewCloudRunV2ServiceTrafficStatusesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunV2ServiceTrafficStatusesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.percent">Percent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.revision">Revision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatuses">CloudRunV2ServiceTrafficStatuses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.percent"></a>

```go
func Percent() *f64
```

- *Type:* *f64

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.revision"></a>

```go
func Revision() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatusesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunV2ServiceTrafficStatuses
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunV2Service.CloudRunV2ServiceTrafficStatuses">CloudRunV2ServiceTrafficStatuses</a>

---



