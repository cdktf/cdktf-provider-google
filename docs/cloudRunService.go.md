# `cloudRunService` Submodule <a name="`cloudRunService` Submodule" id="@cdktf/provider-google.cloudRunService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudRunService <a name="CloudRunService" id="@cdktf/provider-google.cloudRunService.CloudRunService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service google_cloud_run_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunService(scope Construct, id *string, config CloudRunServiceConfig) CloudRunService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceConfig">CloudRunServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudRunService.CloudRunService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunService.CloudRunService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudRunService.CloudRunService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceConfig">CloudRunServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.putTemplate">PutTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.putTraffic">PutTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.resetAutogenerateRevisionName">ResetAutogenerateRevisionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.resetTemplate">ResetTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.resetTraffic">ResetTraffic</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudRunService.CloudRunService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudRunService.CloudRunService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudRunService.CloudRunService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudRunService.CloudRunService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudRunService.CloudRunService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.cloudRunService.CloudRunService.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudRunService.CloudRunService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudRunService.CloudRunService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.cloudRunService.CloudRunService.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudRunService.CloudRunService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.cloudRunService.CloudRunService.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.cloudRunService.CloudRunService.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunService.CloudRunService.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunService.CloudRunService.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.cloudRunService.CloudRunService.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunService.CloudRunService.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.cloudRunService.CloudRunService.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudRunService.CloudRunService.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudRunService.CloudRunService.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.cloudRunService.CloudRunService.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudRunService.CloudRunService.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-google.cloudRunService.CloudRunService.putMetadata"></a>

```go
func PutMetadata(value CloudRunServiceMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunService.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadata">CloudRunServiceMetadata</a>

---

##### `PutTemplate` <a name="PutTemplate" id="@cdktf/provider-google.cloudRunService.CloudRunService.putTemplate"></a>

```go
func PutTemplate(value CloudRunServiceTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunService.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplate">CloudRunServiceTemplate</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.cloudRunService.CloudRunService.putTimeouts"></a>

```go
func PutTimeouts(value CloudRunServiceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeouts">CloudRunServiceTimeouts</a>

---

##### `PutTraffic` <a name="PutTraffic" id="@cdktf/provider-google.cloudRunService.CloudRunService.putTraffic"></a>

```go
func PutTraffic(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunService.putTraffic.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutogenerateRevisionName` <a name="ResetAutogenerateRevisionName" id="@cdktf/provider-google.cloudRunService.CloudRunService.resetAutogenerateRevisionName"></a>

```go
func ResetAutogenerateRevisionName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudRunService.CloudRunService.resetId"></a>

```go
func ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google.cloudRunService.CloudRunService.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.cloudRunService.CloudRunService.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTemplate` <a name="ResetTemplate" id="@cdktf/provider-google.cloudRunService.CloudRunService.resetTemplate"></a>

```go
func ResetTemplate()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.cloudRunService.CloudRunService.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTraffic` <a name="ResetTraffic" id="@cdktf/provider-google.cloudRunService.CloudRunService.resetTraffic"></a>

```go
func ResetTraffic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudRunService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudRunService.CloudRunService.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.CloudRunService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunService.CloudRunService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudRunService.CloudRunService.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.CloudRunService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunService.CloudRunService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunService.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.CloudRunService_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudRunService.CloudRunService.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.cloudRunService.CloudRunService.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.CloudRunService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CloudRunService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudRunService.CloudRunService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.cloudRunService.CloudRunService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudRunService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.cloudRunService.CloudRunService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudRunService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudRunService.CloudRunService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CloudRunService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference">CloudRunServiceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList">CloudRunServiceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.template">Template</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference">CloudRunServiceTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference">CloudRunServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.traffic">Traffic</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList">CloudRunServiceTrafficList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.autogenerateRevisionNameInput">AutogenerateRevisionNameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadata">CloudRunServiceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.templateInput">TemplateInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplate">CloudRunServiceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.trafficInput">TrafficInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.autogenerateRevisionName">AutogenerateRevisionName</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.metadata"></a>

```go
func Metadata() CloudRunServiceMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference">CloudRunServiceMetadataOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.status"></a>

```go
func Status() CloudRunServiceStatusList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList">CloudRunServiceStatusList</a>

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.template"></a>

```go
func Template() CloudRunServiceTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference">CloudRunServiceTemplateOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.timeouts"></a>

```go
func Timeouts() CloudRunServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference">CloudRunServiceTimeoutsOutputReference</a>

---

##### `Traffic`<sup>Required</sup> <a name="Traffic" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.traffic"></a>

```go
func Traffic() CloudRunServiceTrafficList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList">CloudRunServiceTrafficList</a>

---

##### `AutogenerateRevisionNameInput`<sup>Optional</sup> <a name="AutogenerateRevisionNameInput" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.autogenerateRevisionNameInput"></a>

```go
func AutogenerateRevisionNameInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.metadataInput"></a>

```go
func MetadataInput() CloudRunServiceMetadata
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadata">CloudRunServiceMetadata</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.templateInput"></a>

```go
func TemplateInput() CloudRunServiceTemplate
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplate">CloudRunServiceTemplate</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TrafficInput`<sup>Optional</sup> <a name="TrafficInput" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.trafficInput"></a>

```go
func TrafficInput() interface{}
```

- *Type:* interface{}

---

##### `AutogenerateRevisionName`<sup>Required</sup> <a name="AutogenerateRevisionName" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.autogenerateRevisionName"></a>

```go
func AutogenerateRevisionName() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudRunService.CloudRunService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudRunServiceConfig <a name="CloudRunServiceConfig" id="@cdktf/provider-google.cloudRunService.CloudRunServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	AutogenerateRevisionName: interface{},
	Id: *string,
	Metadata: github.com/cdktf/cdktf-provider-google-go/google.cloudRunService.CloudRunServiceMetadata,
	Project: *string,
	Template: github.com/cdktf/cdktf-provider-google-go/google.cloudRunService.CloudRunServiceTemplate,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.cloudRunService.CloudRunServiceTimeouts,
	Traffic: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.location">Location</a></code> | <code>*string</code> | The location of the cloud run instance. eg us-central1. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.name">Name</a></code> | <code>*string</code> | Name must be unique within a Google Cloud project and region. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.autogenerateRevisionName">AutogenerateRevisionName</a></code> | <code>interface{}</code> | If set to 'true', the revision name (template.metadata.name) will be omitted and autogenerated by Cloud Run. This cannot be set to 'true' while 'template.metadata.name' is also set. (For legacy support, if 'template.metadata.name' is unset in state while this field is set to false, the revision name will still autogenerate.). |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#id CloudRunService#id}. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadata">CloudRunServiceMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#project CloudRunService#project}. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.template">Template</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplate">CloudRunServiceTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeouts">CloudRunServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.traffic">Traffic</a></code> | <code>interface{}</code> | traffic block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the cloud run instance. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#location CloudRunService#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name must be unique within a Google Cloud project and region.

Is required when creating resources. Name is primarily intended
for creation idempotence and configuration definition. Cannot be updated.
More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#name CloudRunService#name}

---

##### `AutogenerateRevisionName`<sup>Optional</sup> <a name="AutogenerateRevisionName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.autogenerateRevisionName"></a>

```go
AutogenerateRevisionName interface{}
```

- *Type:* interface{}

If set to 'true', the revision name (template.metadata.name) will be omitted and autogenerated by Cloud Run. This cannot be set to 'true' while 'template.metadata.name' is also set. (For legacy support, if 'template.metadata.name' is unset in state while this field is set to false, the revision name will still autogenerate.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#autogenerate_revision_name CloudRunService#autogenerate_revision_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#id CloudRunService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.metadata"></a>

```go
Metadata CloudRunServiceMetadata
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadata">CloudRunServiceMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#metadata CloudRunService#metadata}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#project CloudRunService#project}.

---

##### `Template`<sup>Optional</sup> <a name="Template" id="@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.template"></a>

```go
Template CloudRunServiceTemplate
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplate">CloudRunServiceTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#template CloudRunService#template}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.timeouts"></a>

```go
Timeouts CloudRunServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeouts">CloudRunServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#timeouts CloudRunService#timeouts}

---

##### `Traffic`<sup>Optional</sup> <a name="Traffic" id="@cdktf/provider-google.cloudRunService.CloudRunServiceConfig.property.traffic"></a>

```go
Traffic interface{}
```

- *Type:* interface{}

traffic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#traffic CloudRunService#traffic}

---

### CloudRunServiceMetadata <a name="CloudRunServiceMetadata" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceMetadata {
	Annotations: *map[string]*string,
	Labels: *map[string]*string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadata.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Annotations is a key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadata.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Map of string keys and values that can be used to organize and categorize (scope and select) objects. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadata.property.namespace">Namespace</a></code> | <code>*string</code> | In Cloud Run the namespace must be equal to either the project ID or project number. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadata.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Annotations is a key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations

**Note**: The Cloud Run API may add additional annotations that were not provided in your config.
If terraform plan shows a diff where a server-side annotation is added, you can add it to your config
or apply the lifecycle.ignore_changes rule to the metadata.0.annotations field.

Annotations with 'run.googleapis.com/' and 'autoscaling.knative.dev' are restricted. Use the following annotation
keys to configure features on a Service:

* 'run.googleapis.com/binary-authorization-breakglass' sets the [Binary Authorization breakglass](https://cloud.google.com/sdk/gcloud/reference/run/deploy#--breakglass).
* 'run.googleapis.com/binary-authorization' sets the [Binary Authorization](https://cloud.google.com/sdk/gcloud/reference/run/deploy#--binary-authorization).
* 'run.googleapis.com/client-name' sets the client name calling the Cloud Run API.
* 'run.googleapis.com/custom-audiences' sets the [custom audiences](https://cloud.google.com/sdk/gcloud/reference/alpha/run/deploy#--add-custom-audiences)
  that can be used in the audience field of ID token for authenticated requests.
* 'run.googleapis.com/description' sets a user defined description for the Service.
* 'run.googleapis.com/ingress' sets the [ingress settings](https://cloud.google.com/sdk/gcloud/reference/run/deploy#--ingress)
  for the Service. For example, '"run.googleapis.com/ingress" = "all"'.
* 'run.googleapis.com/launch-stage' sets the [launch stage](https://cloud.google.com/run/docs/troubleshooting#launch-stage-validation)
  when a preview feature is used. For example, '"run.googleapis.com/launch-stage": "BETA"'

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#annotations CloudRunService#annotations}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadata.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Map of string keys and values that can be used to organize and categorize (scope and select) objects.

May match selectors of replication controllers
and routes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#labels CloudRunService#labels}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadata.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

In Cloud Run the namespace must be equal to either the project ID or project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#namespace CloudRunService#namespace}

---

### CloudRunServiceStatus <a name="CloudRunServiceStatus" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceStatus {

}
```


### CloudRunServiceStatusConditions <a name="CloudRunServiceStatusConditions" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceStatusConditions {

}
```


### CloudRunServiceStatusTraffic <a name="CloudRunServiceStatusTraffic" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTraffic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTraffic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceStatusTraffic {

}
```


### CloudRunServiceTemplate <a name="CloudRunServiceTemplate" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplate {
	Metadata: github.com/cdktf/cdktf-provider-google-go/google.cloudRunService.CloudRunServiceTemplateMetadata,
	Spec: github.com/cdktf/cdktf-provider-google-go/google.cloudRunService.CloudRunServiceTemplateSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplate.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadata">CloudRunServiceTemplateMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplate.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpec">CloudRunServiceTemplateSpec</a></code> | spec block. |

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplate.property.metadata"></a>

```go
Metadata CloudRunServiceTemplateMetadata
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadata">CloudRunServiceTemplateMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#metadata CloudRunService#metadata}

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplate.property.spec"></a>

```go
Spec CloudRunServiceTemplateSpec
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpec">CloudRunServiceTemplateSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#spec CloudRunService#spec}

---

### CloudRunServiceTemplateMetadata <a name="CloudRunServiceTemplateMetadata" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateMetadata {
	Annotations: *map[string]*string,
	Labels: *map[string]*string,
	Name: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadata.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Annotations is a key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadata.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Map of string keys and values that can be used to organize and categorize (scope and select) objects. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadata.property.name">Name</a></code> | <code>*string</code> | Name must be unique within a Google Cloud project and region. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadata.property.namespace">Namespace</a></code> | <code>*string</code> | In Cloud Run the namespace must be equal to either the project ID or project number. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadata.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Annotations is a key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations

**Note**: The Cloud Run API may add additional annotations that were not provided in your config.
If terraform plan shows a diff where a server-side annotation is added, you can add it to your config
or apply the lifecycle.ignore_changes rule to the metadata.0.annotations field.

Annotations with 'run.googleapis.com/' and 'autoscaling.knative.dev' are restricted. Use the following annotation
keys to configure features on a Revision template:

* 'autoscaling.knative.dev/maxScale' sets the [maximum number of container
  instances](https://cloud.google.com/sdk/gcloud/reference/run/deploy#--max-instances) of the Revision to run.
* 'autoscaling.knative.dev/minScale' sets the [minimum number of container
  instances](https://cloud.google.com/sdk/gcloud/reference/run/deploy#--min-instances) of the Revision to run.
* 'run.googleapis.com/client-name' sets the client name calling the Cloud Run API.
* 'run.googleapis.com/cloudsql-instances' sets the [Cloud SQL
  instances](https://cloud.google.com/sdk/gcloud/reference/run/deploy#--add-cloudsql-instances) the Revision connects to.
* 'run.googleapis.com/cpu-throttling' sets whether to throttle the CPU when the container is not actively serving
  requests. See https://cloud.google.com/sdk/gcloud/reference/run/deploy#--[no-]cpu-throttling.
* 'run.googleapis.com/encryption-key-shutdown-hours' sets the number of hours to wait before an automatic shutdown
  server after CMEK key revocation is detected.
* 'run.googleapis.com/encryption-key' sets the [CMEK key](https://cloud.google.com/run/docs/securing/using-cmek)
  reference to encrypt the container with.
* 'run.googleapis.com/execution-environment' sets the [execution
  environment](https://cloud.google.com/sdk/gcloud/reference/run/deploy#--execution-environment)
  where the application will run.
* 'run.googleapis.com/post-key-revocation-action-type' sets the
  [action type](https://cloud.google.com/sdk/gcloud/reference/run/deploy#--post-key-revocation-action-type)
  after CMEK key revocation.
* 'run.googleapis.com/secrets' sets a list of key-value pairs to set as
  [secrets](https://cloud.google.com/run/docs/configuring/secrets#yaml).
* 'run.googleapis.com/sessionAffinity' sets whether to enable
  [session affinity](https://cloud.google.com/sdk/gcloud/reference/beta/run/deploy#--%5Bno-%5Dsession-affinity)
  for connections to the Revision.
* 'run.googleapis.com/startup-cpu-boost' sets whether to allocate extra CPU to containers on startup.
  See https://cloud.google.com/sdk/gcloud/reference/run/deploy#--[no-]cpu-boost.
* 'run.googleapis.com/vpc-access-connector' sets a [VPC connector](https://cloud.google.com/run/docs/configuring/connecting-vpc#terraform_1)
  for the Revision.
* 'run.googleapis.com/vpc-access-egress' sets the outbound traffic to send through the VPC connector for this resource.
  See https://cloud.google.com/sdk/gcloud/reference/run/deploy#--vpc-egress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#annotations CloudRunService#annotations}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadata.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Map of string keys and values that can be used to organize and categorize (scope and select) objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#labels CloudRunService#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadata.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name must be unique within a Google Cloud project and region.

Is required when creating resources. Name is primarily intended
for creation idempotence and configuration definition. Cannot be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#name CloudRunService#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadata.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

In Cloud Run the namespace must be equal to either the project ID or project number.

It will default to the resource's project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#namespace CloudRunService#namespace}

---

### CloudRunServiceTemplateSpec <a name="CloudRunServiceTemplateSpec" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpec {
	ContainerConcurrency: *f64,
	Containers: interface{},
	ServiceAccountName: *string,
	TimeoutSeconds: *f64,
	Volumes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpec.property.containerConcurrency">ContainerConcurrency</a></code> | <code>*f64</code> | ContainerConcurrency specifies the maximum allowed in-flight (concurrent) requests per container of the Revision. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpec.property.containers">Containers</a></code> | <code>interface{}</code> | containers block. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpec.property.serviceAccountName">ServiceAccountName</a></code> | <code>*string</code> | Email address of the IAM service account associated with the revision of the service. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpec.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | TimeoutSeconds holds the max duration the instance is allowed for responding to a request. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpec.property.volumes">Volumes</a></code> | <code>interface{}</code> | volumes block. |

---

##### `ContainerConcurrency`<sup>Optional</sup> <a name="ContainerConcurrency" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpec.property.containerConcurrency"></a>

```go
ContainerConcurrency *f64
```

- *Type:* *f64

ContainerConcurrency specifies the maximum allowed in-flight (concurrent) requests per container of the Revision.

If not specified or 0, defaults to 80 when
requested CPU >= 1 and defaults to 1 when requested CPU < 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#container_concurrency CloudRunService#container_concurrency}

---

##### `Containers`<sup>Optional</sup> <a name="Containers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpec.property.containers"></a>

```go
Containers interface{}
```

- *Type:* interface{}

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#containers CloudRunService#containers}

---

##### `ServiceAccountName`<sup>Optional</sup> <a name="ServiceAccountName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpec.property.serviceAccountName"></a>

```go
ServiceAccountName *string
```

- *Type:* *string

Email address of the IAM service account associated with the revision of the service.

The service account represents the identity of the running revision,
and determines what permissions the revision has. If not provided, the revision
will use the project's default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#service_account_name CloudRunService#service_account_name}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpec.property.timeoutSeconds"></a>

```go
TimeoutSeconds *f64
```

- *Type:* *f64

TimeoutSeconds holds the max duration the instance is allowed for responding to a request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#timeout_seconds CloudRunService#timeout_seconds}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpec.property.volumes"></a>

```go
Volumes interface{}
```

- *Type:* interface{}

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#volumes CloudRunService#volumes}

---

### CloudRunServiceTemplateSpecContainers <a name="CloudRunServiceTemplateSpecContainers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpecContainers {
	Image: *string,
	Args: *[]*string,
	Command: *[]*string,
	Env: interface{},
	EnvFrom: interface{},
	LivenessProbe: github.com/cdktf/cdktf-provider-google-go/google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbe,
	Name: *string,
	Ports: interface{},
	Resources: github.com/cdktf/cdktf-provider-google-go/google.cloudRunService.CloudRunServiceTemplateSpecContainersResources,
	StartupProbe: github.com/cdktf/cdktf-provider-google-go/google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbe,
	VolumeMounts: interface{},
	WorkingDir: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.property.image">Image</a></code> | <code>*string</code> | Docker image name. This is most often a reference to a container located in the container registry, such as gcr.io/cloudrun/hello. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.property.args">Args</a></code> | <code>*[]*string</code> | Arguments to the entrypoint. The docker image's CMD is used if this is not provided. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.property.command">Command</a></code> | <code>*[]*string</code> | Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.property.env">Env</a></code> | <code>interface{}</code> | env block. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.property.envFrom">EnvFrom</a></code> | <code>interface{}</code> | env_from block. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.property.livenessProbe">LivenessProbe</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbe">CloudRunServiceTemplateSpecContainersLivenessProbe</a></code> | liveness_probe block. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.property.name">Name</a></code> | <code>*string</code> | Name of the container. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.property.ports">Ports</a></code> | <code>interface{}</code> | ports block. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResources">CloudRunServiceTemplateSpecContainersResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.property.startupProbe">StartupProbe</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbe">CloudRunServiceTemplateSpecContainersStartupProbe</a></code> | startup_probe block. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.property.volumeMounts">VolumeMounts</a></code> | <code>interface{}</code> | volume_mounts block. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.property.workingDir">WorkingDir</a></code> | <code>*string</code> | Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.property.image"></a>

```go
Image *string
```

- *Type:* *string

Docker image name. This is most often a reference to a container located in the container registry, such as gcr.io/cloudrun/hello.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#image CloudRunService#image}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

Arguments to the entrypoint. The docker image's CMD is used if this is not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#args CloudRunService#args}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.property.command"></a>

```go
Command *[]*string
```

- *Type:* *[]*string

Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#command CloudRunService#command}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.property.env"></a>

```go
Env interface{}
```

- *Type:* interface{}

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#env CloudRunService#env}

---

##### `EnvFrom`<sup>Optional</sup> <a name="EnvFrom" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.property.envFrom"></a>

```go
EnvFrom interface{}
```

- *Type:* interface{}

env_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#env_from CloudRunService#env_from}

---

##### `LivenessProbe`<sup>Optional</sup> <a name="LivenessProbe" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.property.livenessProbe"></a>

```go
LivenessProbe CloudRunServiceTemplateSpecContainersLivenessProbe
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbe">CloudRunServiceTemplateSpecContainersLivenessProbe</a>

liveness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#liveness_probe CloudRunService#liveness_probe}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#name CloudRunService#name}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.property.ports"></a>

```go
Ports interface{}
```

- *Type:* interface{}

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#ports CloudRunService#ports}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.property.resources"></a>

```go
Resources CloudRunServiceTemplateSpecContainersResources
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResources">CloudRunServiceTemplateSpecContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#resources CloudRunService#resources}

---

##### `StartupProbe`<sup>Optional</sup> <a name="StartupProbe" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.property.startupProbe"></a>

```go
StartupProbe CloudRunServiceTemplateSpecContainersStartupProbe
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbe">CloudRunServiceTemplateSpecContainersStartupProbe</a>

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#startup_probe CloudRunService#startup_probe}

---

##### `VolumeMounts`<sup>Optional</sup> <a name="VolumeMounts" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.property.volumeMounts"></a>

```go
VolumeMounts interface{}
```

- *Type:* interface{}

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#volume_mounts CloudRunService#volume_mounts}

---

##### `WorkingDir`<sup>Optional</sup> <a name="WorkingDir" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainers.property.workingDir"></a>

```go
WorkingDir *string
```

- *Type:* *string

Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#working_dir CloudRunService#working_dir}

---

### CloudRunServiceTemplateSpecContainersEnv <a name="CloudRunServiceTemplateSpecContainersEnv" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnv.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpecContainersEnv {
	Name: *string,
	Value: *string,
	ValueFrom: github.com/cdktf/cdktf-provider-google-go/google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFrom,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnv.property.name">Name</a></code> | <code>*string</code> | Name of the environment variable. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnv.property.value">Value</a></code> | <code>*string</code> | Defaults to "". |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnv.property.valueFrom">ValueFrom</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFrom">CloudRunServiceTemplateSpecContainersEnvValueFrom</a></code> | value_from block. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnv.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#name CloudRunService#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnv.property.value"></a>

```go
Value *string
```

- *Type:* *string

Defaults to "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#value CloudRunService#value}

---

##### `ValueFrom`<sup>Optional</sup> <a name="ValueFrom" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnv.property.valueFrom"></a>

```go
ValueFrom CloudRunServiceTemplateSpecContainersEnvValueFrom
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFrom">CloudRunServiceTemplateSpecContainersEnvValueFrom</a>

value_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#value_from CloudRunService#value_from}

---

### CloudRunServiceTemplateSpecContainersEnvFrom <a name="CloudRunServiceTemplateSpecContainersEnvFrom" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFrom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpecContainersEnvFrom {
	ConfigMapRef: github.com/cdktf/cdktf-provider-google-go/google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef,
	Prefix: *string,
	SecretRef: github.com/cdktf/cdktf-provider-google-go/google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRef,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFrom.property.configMapRef">ConfigMapRef</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef">CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef</a></code> | config_map_ref block. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFrom.property.prefix">Prefix</a></code> | <code>*string</code> | An optional identifier to prepend to each key in the ConfigMap. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFrom.property.secretRef">SecretRef</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRef">CloudRunServiceTemplateSpecContainersEnvFromSecretRef</a></code> | secret_ref block. |

---

##### `ConfigMapRef`<sup>Optional</sup> <a name="ConfigMapRef" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFrom.property.configMapRef"></a>

```go
ConfigMapRef CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef">CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef</a>

config_map_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#config_map_ref CloudRunService#config_map_ref}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFrom.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

An optional identifier to prepend to each key in the ConfigMap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#prefix CloudRunService#prefix}

---

##### `SecretRef`<sup>Optional</sup> <a name="SecretRef" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFrom.property.secretRef"></a>

```go
SecretRef CloudRunServiceTemplateSpecContainersEnvFromSecretRef
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRef">CloudRunServiceTemplateSpecContainersEnvFromSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#secret_ref CloudRunService#secret_ref}

---

### CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef <a name="CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef {
	LocalObjectReference: github.com/cdktf/cdktf-provider-google-go/google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference,
	Optional: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef.property.localObjectReference">LocalObjectReference</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference">CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference</a></code> | local_object_reference block. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef.property.optional">Optional</a></code> | <code>interface{}</code> | Specify whether the ConfigMap must be defined. |

---

##### `LocalObjectReference`<sup>Optional</sup> <a name="LocalObjectReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef.property.localObjectReference"></a>

```go
LocalObjectReference CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference">CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference</a>

local_object_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#local_object_reference CloudRunService#local_object_reference}

---

##### `Optional`<sup>Optional</sup> <a name="Optional" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef.property.optional"></a>

```go
Optional interface{}
```

- *Type:* interface{}

Specify whether the ConfigMap must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#optional CloudRunService#optional}

---

### CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference <a name="CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference.property.name">Name</a></code> | <code>*string</code> | Name of the referent. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#name CloudRunService#name}

---

### CloudRunServiceTemplateSpecContainersEnvFromSecretRef <a name="CloudRunServiceTemplateSpecContainersEnvFromSecretRef" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRef.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpecContainersEnvFromSecretRef {
	LocalObjectReference: github.com/cdktf/cdktf-provider-google-go/google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference,
	Optional: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRef.property.localObjectReference">LocalObjectReference</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference">CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference</a></code> | local_object_reference block. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRef.property.optional">Optional</a></code> | <code>interface{}</code> | Specify whether the Secret must be defined. |

---

##### `LocalObjectReference`<sup>Optional</sup> <a name="LocalObjectReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRef.property.localObjectReference"></a>

```go
LocalObjectReference CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference">CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference</a>

local_object_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#local_object_reference CloudRunService#local_object_reference}

---

##### `Optional`<sup>Optional</sup> <a name="Optional" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRef.property.optional"></a>

```go
Optional interface{}
```

- *Type:* interface{}

Specify whether the Secret must be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#optional CloudRunService#optional}

---

### CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference <a name="CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference.property.name">Name</a></code> | <code>*string</code> | Name of the referent. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#name CloudRunService#name}

---

### CloudRunServiceTemplateSpecContainersEnvValueFrom <a name="CloudRunServiceTemplateSpecContainersEnvValueFrom" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFrom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpecContainersEnvValueFrom {
	SecretKeyRef: github.com/cdktf/cdktf-provider-google-go/google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFrom.property.secretKeyRef">SecretKeyRef</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef">CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `SecretKeyRef`<sup>Required</sup> <a name="SecretKeyRef" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFrom.property.secretKeyRef"></a>

```go
SecretKeyRef CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef">CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#secret_key_ref CloudRunService#secret_key_ref}

---

### CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef <a name="CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef {
	Key: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef.property.key">Key</a></code> | <code>*string</code> | A Cloud Secret Manager secret version. Must be 'latest' for the latest version or an integer for a specific version. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef.property.name">Name</a></code> | <code>*string</code> | The name of the secret in Cloud Secret Manager. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef.property.key"></a>

```go
Key *string
```

- *Type:* *string

A Cloud Secret Manager secret version. Must be 'latest' for the latest version or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#key CloudRunService#key}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the secret in Cloud Secret Manager.

By default, the secret is assumed to be in the same project.
If the secret is in another project, you must define an alias.
An alias definition has the form: :projects/{project-id|project-number}/secrets/.
If multiple alias definitions are needed, they must be separated by commas.
The alias definitions must be set on the run.googleapis.com/secrets annotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#name CloudRunService#name}

---

### CloudRunServiceTemplateSpecContainersLivenessProbe <a name="CloudRunServiceTemplateSpecContainersLivenessProbe" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbe.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpecContainersLivenessProbe {
	FailureThreshold: *f64,
	Grpc: github.com/cdktf/cdktf-provider-google-go/google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpc,
	HttpGet: github.com/cdktf/cdktf-provider-google-go/google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet,
	InitialDelaySeconds: *f64,
	PeriodSeconds: *f64,
	TimeoutSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbe.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbe.property.grpc">Grpc</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpc">CloudRunServiceTemplateSpecContainersLivenessProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbe.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet">CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbe.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>*f64</code> | Number of seconds after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbe.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value is 3600. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbe.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | Number of seconds after which the probe times out. |

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbe.property.failureThreshold"></a>

```go
FailureThreshold *f64
```

- *Type:* *f64

Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#failure_threshold CloudRunService#failure_threshold}

---

##### `Grpc`<sup>Optional</sup> <a name="Grpc" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbe.property.grpc"></a>

```go
Grpc CloudRunServiceTemplateSpecContainersLivenessProbeGrpc
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpc">CloudRunServiceTemplateSpecContainersLivenessProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#grpc CloudRunService#grpc}

---

##### `HttpGet`<sup>Optional</sup> <a name="HttpGet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbe.property.httpGet"></a>

```go
HttpGet CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet">CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#http_get CloudRunService#http_get}

---

##### `InitialDelaySeconds`<sup>Optional</sup> <a name="InitialDelaySeconds" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbe.property.initialDelaySeconds"></a>

```go
InitialDelaySeconds *f64
```

- *Type:* *f64

Number of seconds after the container has started before the probe is initiated.

Defaults to 0 seconds. Minimum value is 0. Maximum value is 3600.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#initial_delay_seconds CloudRunService#initial_delay_seconds}

---

##### `PeriodSeconds`<sup>Optional</sup> <a name="PeriodSeconds" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbe.property.periodSeconds"></a>

```go
PeriodSeconds *f64
```

- *Type:* *f64

How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value is 3600.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#period_seconds CloudRunService#period_seconds}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbe.property.timeoutSeconds"></a>

```go
TimeoutSeconds *f64
```

- *Type:* *f64

Number of seconds after which the probe times out.

Defaults to 1 second. Minimum value is 1. Maximum value is 3600.
Must be smaller than period_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#timeout_seconds CloudRunService#timeout_seconds}

---

### CloudRunServiceTemplateSpecContainersLivenessProbeGrpc <a name="CloudRunServiceTemplateSpecContainersLivenessProbeGrpc" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpecContainersLivenessProbeGrpc {
	Port: *f64,
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpc.property.port">Port</a></code> | <code>*f64</code> | Port number to access on the container. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpc.property.service">Service</a></code> | <code>*string</code> | The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpc.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#port CloudRunService#port}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpc.property.service"></a>

```go
Service *string
```

- *Type:* *string

The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#service CloudRunService#service}

---

### CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet <a name="CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet {
	HttpHeaders: interface{},
	Path: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet.property.httpHeaders">HttpHeaders</a></code> | <code>interface{}</code> | http_headers block. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet.property.path">Path</a></code> | <code>*string</code> | Path to access on the HTTP server. If set, it should not be empty string. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet.property.port">Port</a></code> | <code>*f64</code> | Port number to access on the container. |

---

##### `HttpHeaders`<sup>Optional</sup> <a name="HttpHeaders" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet.property.httpHeaders"></a>

```go
HttpHeaders interface{}
```

- *Type:* interface{}

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#http_headers CloudRunService#http_headers}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path to access on the HTTP server. If set, it should not be empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#path CloudRunService#path}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#port CloudRunService#port}

---

### CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders <a name="CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders.property.name">Name</a></code> | <code>*string</code> | The header field name. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders.property.value">Value</a></code> | <code>*string</code> | The header field value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders.property.name"></a>

```go
Name *string
```

- *Type:* *string

The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#name CloudRunService#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders.property.value"></a>

```go
Value *string
```

- *Type:* *string

The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#value CloudRunService#value}

---

### CloudRunServiceTemplateSpecContainersPorts <a name="CloudRunServiceTemplateSpecContainersPorts" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPorts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpecContainersPorts {
	ContainerPort: *f64,
	Name: *string,
	Protocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPorts.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | Port number the container listens on. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPorts.property.name">Name</a></code> | <code>*string</code> | If specified, used to specify which protocol to use. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPorts.property.protocol">Protocol</a></code> | <code>*string</code> | Protocol for port. Must be "TCP". Defaults to "TCP". |

---

##### `ContainerPort`<sup>Optional</sup> <a name="ContainerPort" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPorts.property.containerPort"></a>

```go
ContainerPort *f64
```

- *Type:* *f64

Port number the container listens on.

This must be a valid port number (between 1 and 65535). Defaults to "8080".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#container_port CloudRunService#container_port}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPorts.property.name"></a>

```go
Name *string
```

- *Type:* *string

If specified, used to specify which protocol to use.

Allowed values are "http1" (HTTP/1) and "h2c" (HTTP/2 end-to-end). Defaults to "http1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#name CloudRunService#name}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPorts.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Protocol for port. Must be "TCP". Defaults to "TCP".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#protocol CloudRunService#protocol}

---

### CloudRunServiceTemplateSpecContainersResources <a name="CloudRunServiceTemplateSpecContainersResources" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpecContainersResources {
	Limits: *map[string]*string,
	Requests: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResources.property.limits">Limits</a></code> | <code>*map[string]*string</code> | Limits describes the maximum amount of compute resources allowed. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResources.property.requests">Requests</a></code> | <code>*map[string]*string</code> | Requests describes the minimum amount of compute resources required. |

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResources.property.limits"></a>

```go
Limits *map[string]*string
```

- *Type:* *map[string]*string

Limits describes the maximum amount of compute resources allowed.

The values of the map is string form of the 'quantity' k8s type:
https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#limits CloudRunService#limits}

---

##### `Requests`<sup>Optional</sup> <a name="Requests" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResources.property.requests"></a>

```go
Requests *map[string]*string
```

- *Type:* *map[string]*string

Requests describes the minimum amount of compute resources required.

If Requests is omitted for a container, it defaults to Limits if that is
explicitly specified, otherwise to an implementation-defined value.
The values of the map is string form of the 'quantity' k8s type:
https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#requests CloudRunService#requests}

---

### CloudRunServiceTemplateSpecContainersStartupProbe <a name="CloudRunServiceTemplateSpecContainersStartupProbe" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbe.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpecContainersStartupProbe {
	FailureThreshold: *f64,
	Grpc: github.com/cdktf/cdktf-provider-google-go/google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpc,
	HttpGet: github.com/cdktf/cdktf-provider-google-go/google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGet,
	InitialDelaySeconds: *f64,
	PeriodSeconds: *f64,
	TcpSocket: github.com/cdktf/cdktf-provider-google-go/google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket,
	TimeoutSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbe.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbe.property.grpc">Grpc</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpc">CloudRunServiceTemplateSpecContainersStartupProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbe.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGet">CloudRunServiceTemplateSpecContainersStartupProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbe.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>*f64</code> | Number of seconds after the container has started before the probe is initiated. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbe.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value is 240. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbe.property.tcpSocket">TcpSocket</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket">CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket</a></code> | tcp_socket block. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbe.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | Number of seconds after which the probe times out. |

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbe.property.failureThreshold"></a>

```go
FailureThreshold *f64
```

- *Type:* *f64

Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#failure_threshold CloudRunService#failure_threshold}

---

##### `Grpc`<sup>Optional</sup> <a name="Grpc" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbe.property.grpc"></a>

```go
Grpc CloudRunServiceTemplateSpecContainersStartupProbeGrpc
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpc">CloudRunServiceTemplateSpecContainersStartupProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#grpc CloudRunService#grpc}

---

##### `HttpGet`<sup>Optional</sup> <a name="HttpGet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbe.property.httpGet"></a>

```go
HttpGet CloudRunServiceTemplateSpecContainersStartupProbeHttpGet
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGet">CloudRunServiceTemplateSpecContainersStartupProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#http_get CloudRunService#http_get}

---

##### `InitialDelaySeconds`<sup>Optional</sup> <a name="InitialDelaySeconds" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbe.property.initialDelaySeconds"></a>

```go
InitialDelaySeconds *f64
```

- *Type:* *f64

Number of seconds after the container has started before the probe is initiated.

Defaults to 0 seconds. Minimum value is 0. Maximum value is 240.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#initial_delay_seconds CloudRunService#initial_delay_seconds}

---

##### `PeriodSeconds`<sup>Optional</sup> <a name="PeriodSeconds" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbe.property.periodSeconds"></a>

```go
PeriodSeconds *f64
```

- *Type:* *f64

How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value is 240.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#period_seconds CloudRunService#period_seconds}

---

##### `TcpSocket`<sup>Optional</sup> <a name="TcpSocket" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbe.property.tcpSocket"></a>

```go
TcpSocket CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket">CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket</a>

tcp_socket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#tcp_socket CloudRunService#tcp_socket}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbe.property.timeoutSeconds"></a>

```go
TimeoutSeconds *f64
```

- *Type:* *f64

Number of seconds after which the probe times out.

Defaults to 1 second. Minimum value is 1. Maximum value is 3600.
Must be smaller than periodSeconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#timeout_seconds CloudRunService#timeout_seconds}

---

### CloudRunServiceTemplateSpecContainersStartupProbeGrpc <a name="CloudRunServiceTemplateSpecContainersStartupProbeGrpc" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpecContainersStartupProbeGrpc {
	Port: *f64,
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpc.property.port">Port</a></code> | <code>*f64</code> | Port number to access on the container. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpc.property.service">Service</a></code> | <code>*string</code> | The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpc.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#port CloudRunService#port}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpc.property.service"></a>

```go
Service *string
```

- *Type:* *string

The name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#service CloudRunService#service}

---

### CloudRunServiceTemplateSpecContainersStartupProbeHttpGet <a name="CloudRunServiceTemplateSpecContainersStartupProbeHttpGet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpecContainersStartupProbeHttpGet {
	HttpHeaders: interface{},
	Path: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGet.property.httpHeaders">HttpHeaders</a></code> | <code>interface{}</code> | http_headers block. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGet.property.path">Path</a></code> | <code>*string</code> | Path to access on the HTTP server. If set, it should not be empty string. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGet.property.port">Port</a></code> | <code>*f64</code> | Port number to access on the container. |

---

##### `HttpHeaders`<sup>Optional</sup> <a name="HttpHeaders" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGet.property.httpHeaders"></a>

```go
HttpHeaders interface{}
```

- *Type:* interface{}

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#http_headers CloudRunService#http_headers}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGet.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path to access on the HTTP server. If set, it should not be empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#path CloudRunService#path}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGet.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#port CloudRunService#port}

---

### CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders <a name="CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders.property.name">Name</a></code> | <code>*string</code> | The header field name. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders.property.value">Value</a></code> | <code>*string</code> | The header field value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders.property.name"></a>

```go
Name *string
```

- *Type:* *string

The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#name CloudRunService#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders.property.value"></a>

```go
Value *string
```

- *Type:* *string

The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#value CloudRunService#value}

---

### CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket <a name="CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket {
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket.property.port">Port</a></code> | <code>*f64</code> | Port number to access on the container. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port number to access on the container.

Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#port CloudRunService#port}

---

### CloudRunServiceTemplateSpecContainersVolumeMounts <a name="CloudRunServiceTemplateSpecContainersVolumeMounts" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMounts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpecContainersVolumeMounts {
	MountPath: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMounts.property.mountPath">MountPath</a></code> | <code>*string</code> | Path within the container at which the volume should be mounted.  Must not contain ':'. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMounts.property.name">Name</a></code> | <code>*string</code> | This must match the Name of a Volume. |

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMounts.property.mountPath"></a>

```go
MountPath *string
```

- *Type:* *string

Path within the container at which the volume should be mounted.  Must not contain ':'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#mount_path CloudRunService#mount_path}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMounts.property.name"></a>

```go
Name *string
```

- *Type:* *string

This must match the Name of a Volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#name CloudRunService#name}

---

### CloudRunServiceTemplateSpecVolumes <a name="CloudRunServiceTemplateSpecVolumes" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpecVolumes {
	Name: *string,
	Secret: github.com/cdktf/cdktf-provider-google-go/google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecret,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumes.property.name">Name</a></code> | <code>*string</code> | Volume's name. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumes.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecret">CloudRunServiceTemplateSpecVolumesSecret</a></code> | secret block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Volume's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#name CloudRunService#name}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumes.property.secret"></a>

```go
Secret CloudRunServiceTemplateSpecVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecret">CloudRunServiceTemplateSpecVolumesSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#secret CloudRunService#secret}

---

### CloudRunServiceTemplateSpecVolumesSecret <a name="CloudRunServiceTemplateSpecVolumesSecret" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpecVolumesSecret {
	SecretName: *string,
	DefaultMode: *f64,
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecret.property.secretName">SecretName</a></code> | <code>*string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecret.property.defaultMode">DefaultMode</a></code> | <code>*f64</code> | Mode bits to use on created files by default. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecret.property.items">Items</a></code> | <code>interface{}</code> | items block. |

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecret.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

The name of the secret in Cloud Secret Manager.

By default, the secret
is assumed to be in the same project.
If the secret is in another project, you must define an alias.
An alias definition has the form:
{alias}:projects/{project-id|project-number}/secrets/{secret-name}.
If multiple alias definitions are needed, they must be separated by
commas.
The alias definitions must be set on the run.googleapis.com/secrets
annotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#secret_name CloudRunService#secret_name}

---

##### `DefaultMode`<sup>Optional</sup> <a name="DefaultMode" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecret.property.defaultMode"></a>

```go
DefaultMode *f64
```

- *Type:* *f64

Mode bits to use on created files by default.

Must be a value between 0000
and 0777. Defaults to 0644. Directories within the path are not affected by
this setting. This might be in conflict with other options that affect the
file mode, like fsGroup, and the result can be other mode bits set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#default_mode CloudRunService#default_mode}

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecret.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#items CloudRunService#items}

---

### CloudRunServiceTemplateSpecVolumesSecretItems <a name="CloudRunServiceTemplateSpecVolumesSecretItems" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItems.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTemplateSpecVolumesSecretItems {
	Key: *string,
	Path: *string,
	Mode: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItems.property.key">Key</a></code> | <code>*string</code> | The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItems.property.path">Path</a></code> | <code>*string</code> | The relative path of the file to map the key to. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItems.property.mode">Mode</a></code> | <code>*f64</code> | Mode bits to use on this file, must be a value between 0000 and 0777. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItems.property.key"></a>

```go
Key *string
```

- *Type:* *string

The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#key CloudRunService#key}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItems.property.path"></a>

```go
Path *string
```

- *Type:* *string

The relative path of the file to map the key to.

May not be an absolute path.
May not contain the path element '..'.
May not start with the string '..'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#path CloudRunService#path}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItems.property.mode"></a>

```go
Mode *f64
```

- *Type:* *f64

Mode bits to use on this file, must be a value between 0000 and 0777.

If
not specified, the volume defaultMode will be used. This might be in
conflict with other options that affect the file mode, like fsGroup, and
the result can be other mode bits set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#mode CloudRunService#mode}

---

### CloudRunServiceTimeouts <a name="CloudRunServiceTimeouts" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#create CloudRunService#create}. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#delete CloudRunService#delete}. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#update CloudRunService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#create CloudRunService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#delete CloudRunService#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#update CloudRunService#update}.

---

### CloudRunServiceTraffic <a name="CloudRunServiceTraffic" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTraffic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTraffic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

&cloudrunservice.CloudRunServiceTraffic {
	Percent: *f64,
	LatestRevision: interface{},
	RevisionName: *string,
	Tag: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTraffic.property.percent">Percent</a></code> | <code>*f64</code> | Percent specifies percent of the traffic to this Revision or Configuration. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTraffic.property.latestRevision">LatestRevision</a></code> | <code>interface{}</code> | LatestRevision may be optionally provided to indicate that the latest ready Revision of the Configuration should be used for this traffic target. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTraffic.property.revisionName">RevisionName</a></code> | <code>*string</code> | RevisionName of a specific revision to which to send this portion of traffic. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTraffic.property.tag">Tag</a></code> | <code>*string</code> | Tag is optionally used to expose a dedicated url for referencing this target exclusively. |

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTraffic.property.percent"></a>

```go
Percent *f64
```

- *Type:* *f64

Percent specifies percent of the traffic to this Revision or Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#percent CloudRunService#percent}

---

##### `LatestRevision`<sup>Optional</sup> <a name="LatestRevision" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTraffic.property.latestRevision"></a>

```go
LatestRevision interface{}
```

- *Type:* interface{}

LatestRevision may be optionally provided to indicate that the latest ready Revision of the Configuration should be used for this traffic target.

When
provided LatestRevision must be true if RevisionName is empty; it must be
false when RevisionName is non-empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#latest_revision CloudRunService#latest_revision}

---

##### `RevisionName`<sup>Optional</sup> <a name="RevisionName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTraffic.property.revisionName"></a>

```go
RevisionName *string
```

- *Type:* *string

RevisionName of a specific revision to which to send this portion of traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#revision_name CloudRunService#revision_name}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTraffic.property.tag"></a>

```go
Tag *string
```

- *Type:* *string

Tag is optionally used to expose a dedicated url for referencing this target exclusively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/cloud_run_service#tag CloudRunService#tag}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudRunServiceMetadataOutputReference <a name="CloudRunServiceMetadataOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunServiceMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadata">CloudRunServiceMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunServiceMetadata
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceMetadata">CloudRunServiceMetadata</a>

---


### CloudRunServiceStatusConditionsList <a name="CloudRunServiceStatusConditionsList" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceStatusConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunServiceStatusConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList.get"></a>

```go
func Get(index *f64) CloudRunServiceStatusConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudRunServiceStatusConditionsOutputReference <a name="CloudRunServiceStatusConditionsOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceStatusConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunServiceStatusConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditions">CloudRunServiceStatusConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunServiceStatusConditions
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditions">CloudRunServiceStatusConditions</a>

---


### CloudRunServiceStatusList <a name="CloudRunServiceStatusList" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunServiceStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList.get"></a>

```go
func Get(index *f64) CloudRunServiceStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudRunServiceStatusOutputReference <a name="CloudRunServiceStatusOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunServiceStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList">CloudRunServiceStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.property.latestCreatedRevisionName">LatestCreatedRevisionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.property.latestReadyRevisionName">LatestReadyRevisionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.property.observedGeneration">ObservedGeneration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.property.traffic">Traffic</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList">CloudRunServiceStatusTrafficList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatus">CloudRunServiceStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.property.conditions"></a>

```go
func Conditions() CloudRunServiceStatusConditionsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusConditionsList">CloudRunServiceStatusConditionsList</a>

---

##### `LatestCreatedRevisionName`<sup>Required</sup> <a name="LatestCreatedRevisionName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.property.latestCreatedRevisionName"></a>

```go
func LatestCreatedRevisionName() *string
```

- *Type:* *string

---

##### `LatestReadyRevisionName`<sup>Required</sup> <a name="LatestReadyRevisionName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.property.latestReadyRevisionName"></a>

```go
func LatestReadyRevisionName() *string
```

- *Type:* *string

---

##### `ObservedGeneration`<sup>Required</sup> <a name="ObservedGeneration" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.property.observedGeneration"></a>

```go
func ObservedGeneration() *f64
```

- *Type:* *f64

---

##### `Traffic`<sup>Required</sup> <a name="Traffic" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.property.traffic"></a>

```go
func Traffic() CloudRunServiceStatusTrafficList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList">CloudRunServiceStatusTrafficList</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunServiceStatus
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatus">CloudRunServiceStatus</a>

---


### CloudRunServiceStatusTrafficList <a name="CloudRunServiceStatusTrafficList" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceStatusTrafficList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunServiceStatusTrafficList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList.get"></a>

```go
func Get(index *f64) CloudRunServiceStatusTrafficOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CloudRunServiceStatusTrafficOutputReference <a name="CloudRunServiceStatusTrafficOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceStatusTrafficOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunServiceStatusTrafficOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.property.latestRevision">LatestRevision</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.property.percent">Percent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.property.revisionName">RevisionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTraffic">CloudRunServiceStatusTraffic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LatestRevision`<sup>Required</sup> <a name="LatestRevision" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.property.latestRevision"></a>

```go
func LatestRevision() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.property.percent"></a>

```go
func Percent() *f64
```

- *Type:* *f64

---

##### `RevisionName`<sup>Required</sup> <a name="RevisionName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.property.revisionName"></a>

```go
func RevisionName() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTrafficOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunServiceStatusTraffic
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceStatusTraffic">CloudRunServiceStatusTraffic</a>

---


### CloudRunServiceTemplateMetadataOutputReference <a name="CloudRunServiceTemplateMetadataOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunServiceTemplateMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadata">CloudRunServiceTemplateMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunServiceTemplateMetadata
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadata">CloudRunServiceTemplateMetadata</a>

---


### CloudRunServiceTemplateOutputReference <a name="CloudRunServiceTemplateOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunServiceTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.resetSpec">ResetSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.putMetadata"></a>

```go
func PutMetadata(value CloudRunServiceTemplateMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadata">CloudRunServiceTemplateMetadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.putSpec"></a>

```go
func PutSpec(value CloudRunServiceTemplateSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpec">CloudRunServiceTemplateSpec</a>

---

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.resetSpec"></a>

```go
func ResetSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference">CloudRunServiceTemplateMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference">CloudRunServiceTemplateSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadata">CloudRunServiceTemplateMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpec">CloudRunServiceTemplateSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplate">CloudRunServiceTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.property.metadata"></a>

```go
func Metadata() CloudRunServiceTemplateMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadataOutputReference">CloudRunServiceTemplateMetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.property.spec"></a>

```go
func Spec() CloudRunServiceTemplateSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference">CloudRunServiceTemplateSpecOutputReference</a>

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.property.metadataInput"></a>

```go
func MetadataInput() CloudRunServiceTemplateMetadata
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateMetadata">CloudRunServiceTemplateMetadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.property.specInput"></a>

```go
func SpecInput() CloudRunServiceTemplateSpec
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpec">CloudRunServiceTemplateSpec</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunServiceTemplate
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplate">CloudRunServiceTemplate</a>

---


### CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference <a name="CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference">CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference">CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference</a>

---


### CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference <a name="CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.putLocalObjectReference">PutLocalObjectReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.resetLocalObjectReference">ResetLocalObjectReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.resetOptional">ResetOptional</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocalObjectReference` <a name="PutLocalObjectReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.putLocalObjectReference"></a>

```go
func PutLocalObjectReference(value CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.putLocalObjectReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference">CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference</a>

---

##### `ResetLocalObjectReference` <a name="ResetLocalObjectReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.resetLocalObjectReference"></a>

```go
func ResetLocalObjectReference()
```

##### `ResetOptional` <a name="ResetOptional" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.resetOptional"></a>

```go
func ResetOptional()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.localObjectReference">LocalObjectReference</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference">CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.localObjectReferenceInput">LocalObjectReferenceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference">CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.optionalInput">OptionalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.optional">Optional</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef">CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalObjectReference`<sup>Required</sup> <a name="LocalObjectReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.localObjectReference"></a>

```go
func LocalObjectReference() CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference">CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference</a>

---

##### `LocalObjectReferenceInput`<sup>Optional</sup> <a name="LocalObjectReferenceInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.localObjectReferenceInput"></a>

```go
func LocalObjectReferenceInput() CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference">CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference</a>

---

##### `OptionalInput`<sup>Optional</sup> <a name="OptionalInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.optionalInput"></a>

```go
func OptionalInput() interface{}
```

- *Type:* interface{}

---

##### `Optional`<sup>Required</sup> <a name="Optional" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.optional"></a>

```go
func Optional() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef">CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef</a>

---


### CloudRunServiceTemplateSpecContainersEnvFromList <a name="CloudRunServiceTemplateSpecContainersEnvFromList" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersEnvFromList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunServiceTemplateSpecContainersEnvFromList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.get"></a>

```go
func Get(index *f64) CloudRunServiceTemplateSpecContainersEnvFromOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunServiceTemplateSpecContainersEnvFromOutputReference <a name="CloudRunServiceTemplateSpecContainersEnvFromOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersEnvFromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunServiceTemplateSpecContainersEnvFromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.putConfigMapRef">PutConfigMapRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.putSecretRef">PutSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.resetConfigMapRef">ResetConfigMapRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.resetSecretRef">ResetSecretRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfigMapRef` <a name="PutConfigMapRef" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.putConfigMapRef"></a>

```go
func PutConfigMapRef(value CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.putConfigMapRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef">CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef</a>

---

##### `PutSecretRef` <a name="PutSecretRef" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.putSecretRef"></a>

```go
func PutSecretRef(value CloudRunServiceTemplateSpecContainersEnvFromSecretRef)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.putSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRef">CloudRunServiceTemplateSpecContainersEnvFromSecretRef</a>

---

##### `ResetConfigMapRef` <a name="ResetConfigMapRef" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.resetConfigMapRef"></a>

```go
func ResetConfigMapRef()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetSecretRef` <a name="ResetSecretRef" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.resetSecretRef"></a>

```go
func ResetSecretRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.configMapRef">ConfigMapRef</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference">CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.secretRef">SecretRef</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference">CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.configMapRefInput">ConfigMapRefInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef">CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.secretRefInput">SecretRefInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRef">CloudRunServiceTemplateSpecContainersEnvFromSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigMapRef`<sup>Required</sup> <a name="ConfigMapRef" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.configMapRef"></a>

```go
func ConfigMapRef() CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference">CloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference</a>

---

##### `SecretRef`<sup>Required</sup> <a name="SecretRef" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.secretRef"></a>

```go
func SecretRef() CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference">CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference</a>

---

##### `ConfigMapRefInput`<sup>Optional</sup> <a name="ConfigMapRefInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.configMapRefInput"></a>

```go
func ConfigMapRefInput() CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef">CloudRunServiceTemplateSpecContainersEnvFromConfigMapRef</a>

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `SecretRefInput`<sup>Optional</sup> <a name="SecretRefInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.secretRefInput"></a>

```go
func SecretRefInput() CloudRunServiceTemplateSpecContainersEnvFromSecretRef
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRef">CloudRunServiceTemplateSpecContainersEnvFromSecretRef</a>

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference <a name="CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference">CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference">CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference</a>

---


### CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference <a name="CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.putLocalObjectReference">PutLocalObjectReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.resetLocalObjectReference">ResetLocalObjectReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.resetOptional">ResetOptional</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocalObjectReference` <a name="PutLocalObjectReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.putLocalObjectReference"></a>

```go
func PutLocalObjectReference(value CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.putLocalObjectReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference">CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference</a>

---

##### `ResetLocalObjectReference` <a name="ResetLocalObjectReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.resetLocalObjectReference"></a>

```go
func ResetLocalObjectReference()
```

##### `ResetOptional` <a name="ResetOptional" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.resetOptional"></a>

```go
func ResetOptional()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.localObjectReference">LocalObjectReference</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference">CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.localObjectReferenceInput">LocalObjectReferenceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference">CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.optionalInput">OptionalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.optional">Optional</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRef">CloudRunServiceTemplateSpecContainersEnvFromSecretRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalObjectReference`<sup>Required</sup> <a name="LocalObjectReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.localObjectReference"></a>

```go
func LocalObjectReference() CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference">CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference</a>

---

##### `LocalObjectReferenceInput`<sup>Optional</sup> <a name="LocalObjectReferenceInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.localObjectReferenceInput"></a>

```go
func LocalObjectReferenceInput() CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference">CloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference</a>

---

##### `OptionalInput`<sup>Optional</sup> <a name="OptionalInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.optionalInput"></a>

```go
func OptionalInput() interface{}
```

- *Type:* interface{}

---

##### `Optional`<sup>Required</sup> <a name="Optional" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.optional"></a>

```go
func Optional() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunServiceTemplateSpecContainersEnvFromSecretRef
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromSecretRef">CloudRunServiceTemplateSpecContainersEnvFromSecretRef</a>

---


### CloudRunServiceTemplateSpecContainersEnvList <a name="CloudRunServiceTemplateSpecContainersEnvList" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersEnvList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunServiceTemplateSpecContainersEnvList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.get"></a>

```go
func Get(index *f64) CloudRunServiceTemplateSpecContainersEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunServiceTemplateSpecContainersEnvOutputReference <a name="CloudRunServiceTemplateSpecContainersEnvOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersEnvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunServiceTemplateSpecContainersEnvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.putValueFrom">PutValueFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.resetValueFrom">ResetValueFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueFrom` <a name="PutValueFrom" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.putValueFrom"></a>

```go
func PutValueFrom(value CloudRunServiceTemplateSpecContainersEnvValueFrom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.putValueFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFrom">CloudRunServiceTemplateSpecContainersEnvValueFrom</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetValueFrom` <a name="ResetValueFrom" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.resetValueFrom"></a>

```go
func ResetValueFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.property.valueFrom">ValueFrom</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference">CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.property.valueFromInput">ValueFromInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFrom">CloudRunServiceTemplateSpecContainersEnvValueFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.property.valueFrom"></a>

```go
func ValueFrom() CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference">CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueFromInput`<sup>Optional</sup> <a name="ValueFromInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.property.valueFromInput"></a>

```go
func ValueFromInput() CloudRunServiceTemplateSpecContainersEnvValueFrom
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFrom">CloudRunServiceTemplateSpecContainersEnvValueFrom</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference <a name="CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.putSecretKeyRef">PutSecretKeyRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretKeyRef` <a name="PutSecretKeyRef" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.putSecretKeyRef"></a>

```go
func PutSecretKeyRef(value CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.putSecretKeyRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef">CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.secretKeyRef">SecretKeyRef</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference">CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.secretKeyRefInput">SecretKeyRefInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef">CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFrom">CloudRunServiceTemplateSpecContainersEnvValueFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretKeyRef`<sup>Required</sup> <a name="SecretKeyRef" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.secretKeyRef"></a>

```go
func SecretKeyRef() CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference">CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference</a>

---

##### `SecretKeyRefInput`<sup>Optional</sup> <a name="SecretKeyRefInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.secretKeyRefInput"></a>

```go
func SecretKeyRefInput() CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef">CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunServiceTemplateSpecContainersEnvValueFrom
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFrom">CloudRunServiceTemplateSpecContainersEnvValueFrom</a>

---


### CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference <a name="CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef">CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef">CloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef</a>

---


### CloudRunServiceTemplateSpecContainersList <a name="CloudRunServiceTemplateSpecContainersList" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunServiceTemplateSpecContainersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.get"></a>

```go
func Get(index *f64) CloudRunServiceTemplateSpecContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference <a name="CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.resetService"></a>

```go
func ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpc">CloudRunServiceTemplateSpecContainersLivenessProbeGrpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunServiceTemplateSpecContainersLivenessProbeGrpc
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpc">CloudRunServiceTemplateSpecContainersLivenessProbeGrpc</a>

---


### CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList <a name="CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.get"></a>

```go
func Get(index *f64) CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference <a name="CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference <a name="CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.putHttpHeaders">PutHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders">ResetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpHeaders` <a name="PutHttpHeaders" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.putHttpHeaders"></a>

```go
func PutHttpHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHttpHeaders` <a name="ResetHttpHeaders" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders"></a>

```go
func ResetHttpHeaders()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.httpHeaders">HttpHeaders</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList">CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput">HttpHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet">CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpHeaders`<sup>Required</sup> <a name="HttpHeaders" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.httpHeaders"></a>

```go
func HttpHeaders() CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList">CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList</a>

---

##### `HttpHeadersInput`<sup>Optional</sup> <a name="HttpHeadersInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```go
func HttpHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet">CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet</a>

---


### CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference <a name="CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.putGrpc">PutGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.putHttpGet">PutHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resetGrpc">ResetGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resetHttpGet">ResetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resetInitialDelaySeconds">ResetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resetPeriodSeconds">ResetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGrpc` <a name="PutGrpc" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.putGrpc"></a>

```go
func PutGrpc(value CloudRunServiceTemplateSpecContainersLivenessProbeGrpc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.putGrpc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpc">CloudRunServiceTemplateSpecContainersLivenessProbeGrpc</a>

---

##### `PutHttpGet` <a name="PutHttpGet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.putHttpGet"></a>

```go
func PutHttpGet(value CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet">CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet</a>

---

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resetFailureThreshold"></a>

```go
func ResetFailureThreshold()
```

##### `ResetGrpc` <a name="ResetGrpc" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resetGrpc"></a>

```go
func ResetGrpc()
```

##### `ResetHttpGet` <a name="ResetHttpGet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resetHttpGet"></a>

```go
func ResetHttpGet()
```

##### `ResetInitialDelaySeconds` <a name="ResetInitialDelaySeconds" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resetInitialDelaySeconds"></a>

```go
func ResetInitialDelaySeconds()
```

##### `ResetPeriodSeconds` <a name="ResetPeriodSeconds" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resetPeriodSeconds"></a>

```go
func ResetPeriodSeconds()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resetTimeoutSeconds"></a>

```go
func ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.grpc">Grpc</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference">CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference">CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.grpcInput">GrpcInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpc">CloudRunServiceTemplateSpecContainersLivenessProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.httpGetInput">HttpGetInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet">CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.initialDelaySecondsInput">InitialDelaySecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbe">CloudRunServiceTemplateSpecContainersLivenessProbe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Grpc`<sup>Required</sup> <a name="Grpc" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.grpc"></a>

```go
func Grpc() CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference">CloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference</a>

---

##### `HttpGet`<sup>Required</sup> <a name="HttpGet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.httpGet"></a>

```go
func HttpGet() CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference">CloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference</a>

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.failureThresholdInput"></a>

```go
func FailureThresholdInput() *f64
```

- *Type:* *f64

---

##### `GrpcInput`<sup>Optional</sup> <a name="GrpcInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.grpcInput"></a>

```go
func GrpcInput() CloudRunServiceTemplateSpecContainersLivenessProbeGrpc
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeGrpc">CloudRunServiceTemplateSpecContainersLivenessProbeGrpc</a>

---

##### `HttpGetInput`<sup>Optional</sup> <a name="HttpGetInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.httpGetInput"></a>

```go
func HttpGetInput() CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet">CloudRunServiceTemplateSpecContainersLivenessProbeHttpGet</a>

---

##### `InitialDelaySecondsInput`<sup>Optional</sup> <a name="InitialDelaySecondsInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.initialDelaySecondsInput"></a>

```go
func InitialDelaySecondsInput() *f64
```

- *Type:* *f64

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.periodSecondsInput"></a>

```go
func PeriodSecondsInput() *f64
```

- *Type:* *f64

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.timeoutSecondsInput"></a>

```go
func TimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `InitialDelaySeconds`<sup>Required</sup> <a name="InitialDelaySeconds" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.initialDelaySeconds"></a>

```go
func InitialDelaySeconds() *f64
```

- *Type:* *f64

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.periodSeconds"></a>

```go
func PeriodSeconds() *f64
```

- *Type:* *f64

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunServiceTemplateSpecContainersLivenessProbe
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbe">CloudRunServiceTemplateSpecContainersLivenessProbe</a>

---


### CloudRunServiceTemplateSpecContainersOutputReference <a name="CloudRunServiceTemplateSpecContainersOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunServiceTemplateSpecContainersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.putEnv">PutEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.putEnvFrom">PutEnvFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.putLivenessProbe">PutLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.putPorts">PutPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.putStartupProbe">PutStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.putVolumeMounts">PutVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resetEnvFrom">ResetEnvFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resetLivenessProbe">ResetLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resetStartupProbe">ResetStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resetVolumeMounts">ResetVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resetWorkingDir">ResetWorkingDir</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnv` <a name="PutEnv" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.putEnv"></a>

```go
func PutEnv(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.putEnv.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEnvFrom` <a name="PutEnvFrom" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.putEnvFrom"></a>

```go
func PutEnvFrom(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.putEnvFrom.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLivenessProbe` <a name="PutLivenessProbe" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.putLivenessProbe"></a>

```go
func PutLivenessProbe(value CloudRunServiceTemplateSpecContainersLivenessProbe)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.putLivenessProbe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbe">CloudRunServiceTemplateSpecContainersLivenessProbe</a>

---

##### `PutPorts` <a name="PutPorts" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.putPorts"></a>

```go
func PutPorts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.putPorts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResources` <a name="PutResources" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.putResources"></a>

```go
func PutResources(value CloudRunServiceTemplateSpecContainersResources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResources">CloudRunServiceTemplateSpecContainersResources</a>

---

##### `PutStartupProbe` <a name="PutStartupProbe" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.putStartupProbe"></a>

```go
func PutStartupProbe(value CloudRunServiceTemplateSpecContainersStartupProbe)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbe">CloudRunServiceTemplateSpecContainersStartupProbe</a>

---

##### `PutVolumeMounts` <a name="PutVolumeMounts" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.putVolumeMounts"></a>

```go
func PutVolumeMounts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resetCommand"></a>

```go
func ResetCommand()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resetEnv"></a>

```go
func ResetEnv()
```

##### `ResetEnvFrom` <a name="ResetEnvFrom" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resetEnvFrom"></a>

```go
func ResetEnvFrom()
```

##### `ResetLivenessProbe` <a name="ResetLivenessProbe" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resetLivenessProbe"></a>

```go
func ResetLivenessProbe()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resetPorts"></a>

```go
func ResetPorts()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resetResources"></a>

```go
func ResetResources()
```

##### `ResetStartupProbe` <a name="ResetStartupProbe" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resetStartupProbe"></a>

```go
func ResetStartupProbe()
```

##### `ResetVolumeMounts` <a name="ResetVolumeMounts" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resetVolumeMounts"></a>

```go
func ResetVolumeMounts()
```

##### `ResetWorkingDir` <a name="ResetWorkingDir" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.resetWorkingDir"></a>

```go
func ResetWorkingDir()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.env">Env</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList">CloudRunServiceTemplateSpecContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.envFrom">EnvFrom</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList">CloudRunServiceTemplateSpecContainersEnvFromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.livenessProbe">LivenessProbe</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference">CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.ports">Ports</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList">CloudRunServiceTemplateSpecContainersPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference">CloudRunServiceTemplateSpecContainersResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.startupProbe">StartupProbe</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference">CloudRunServiceTemplateSpecContainersStartupProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.volumeMounts">VolumeMounts</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList">CloudRunServiceTemplateSpecContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.commandInput">CommandInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.envFromInput">EnvFromInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.envInput">EnvInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.livenessProbeInput">LivenessProbeInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbe">CloudRunServiceTemplateSpecContainersLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.portsInput">PortsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResources">CloudRunServiceTemplateSpecContainersResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.startupProbeInput">StartupProbeInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbe">CloudRunServiceTemplateSpecContainersStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.volumeMountsInput">VolumeMountsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.workingDirInput">WorkingDirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.workingDir">WorkingDir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.env"></a>

```go
func Env() CloudRunServiceTemplateSpecContainersEnvList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvList">CloudRunServiceTemplateSpecContainersEnvList</a>

---

##### `EnvFrom`<sup>Required</sup> <a name="EnvFrom" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.envFrom"></a>

```go
func EnvFrom() CloudRunServiceTemplateSpecContainersEnvFromList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersEnvFromList">CloudRunServiceTemplateSpecContainersEnvFromList</a>

---

##### `LivenessProbe`<sup>Required</sup> <a name="LivenessProbe" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.livenessProbe"></a>

```go
func LivenessProbe() CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference">CloudRunServiceTemplateSpecContainersLivenessProbeOutputReference</a>

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.ports"></a>

```go
func Ports() CloudRunServiceTemplateSpecContainersPortsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList">CloudRunServiceTemplateSpecContainersPortsList</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.resources"></a>

```go
func Resources() CloudRunServiceTemplateSpecContainersResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference">CloudRunServiceTemplateSpecContainersResourcesOutputReference</a>

---

##### `StartupProbe`<sup>Required</sup> <a name="StartupProbe" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.startupProbe"></a>

```go
func StartupProbe() CloudRunServiceTemplateSpecContainersStartupProbeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference">CloudRunServiceTemplateSpecContainersStartupProbeOutputReference</a>

---

##### `VolumeMounts`<sup>Required</sup> <a name="VolumeMounts" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.volumeMounts"></a>

```go
func VolumeMounts() CloudRunServiceTemplateSpecContainersVolumeMountsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList">CloudRunServiceTemplateSpecContainersVolumeMountsList</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.commandInput"></a>

```go
func CommandInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnvFromInput`<sup>Optional</sup> <a name="EnvFromInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.envFromInput"></a>

```go
func EnvFromInput() interface{}
```

- *Type:* interface{}

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.envInput"></a>

```go
func EnvInput() interface{}
```

- *Type:* interface{}

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `LivenessProbeInput`<sup>Optional</sup> <a name="LivenessProbeInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.livenessProbeInput"></a>

```go
func LivenessProbeInput() CloudRunServiceTemplateSpecContainersLivenessProbe
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersLivenessProbe">CloudRunServiceTemplateSpecContainersLivenessProbe</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.portsInput"></a>

```go
func PortsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() CloudRunServiceTemplateSpecContainersResources
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResources">CloudRunServiceTemplateSpecContainersResources</a>

---

##### `StartupProbeInput`<sup>Optional</sup> <a name="StartupProbeInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.startupProbeInput"></a>

```go
func StartupProbeInput() CloudRunServiceTemplateSpecContainersStartupProbe
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbe">CloudRunServiceTemplateSpecContainersStartupProbe</a>

---

##### `VolumeMountsInput`<sup>Optional</sup> <a name="VolumeMountsInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.volumeMountsInput"></a>

```go
func VolumeMountsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkingDirInput`<sup>Optional</sup> <a name="WorkingDirInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.workingDirInput"></a>

```go
func WorkingDirInput() *string
```

- *Type:* *string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `WorkingDir`<sup>Required</sup> <a name="WorkingDir" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.workingDir"></a>

```go
func WorkingDir() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunServiceTemplateSpecContainersPortsList <a name="CloudRunServiceTemplateSpecContainersPortsList" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersPortsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunServiceTemplateSpecContainersPortsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.get"></a>

```go
func Get(index *f64) CloudRunServiceTemplateSpecContainersPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunServiceTemplateSpecContainersPortsOutputReference <a name="CloudRunServiceTemplateSpecContainersPortsOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersPortsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunServiceTemplateSpecContainersPortsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.resetContainerPort">ResetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerPort` <a name="ResetContainerPort" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.resetContainerPort"></a>

```go
func ResetContainerPort()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.property.containerPortInput">ContainerPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerPortInput`<sup>Optional</sup> <a name="ContainerPortInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.property.containerPortInput"></a>

```go
func ContainerPortInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.property.containerPort"></a>

```go
func ContainerPort() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersPortsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunServiceTemplateSpecContainersResourcesOutputReference <a name="CloudRunServiceTemplateSpecContainersResourcesOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunServiceTemplateSpecContainersResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.resetLimits">ResetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.resetRequests">ResetRequests</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLimits` <a name="ResetLimits" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.resetLimits"></a>

```go
func ResetLimits()
```

##### `ResetRequests` <a name="ResetRequests" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.resetRequests"></a>

```go
func ResetRequests()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.property.limitsInput">LimitsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.property.requestsInput">RequestsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.property.limits">Limits</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.property.requests">Requests</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResources">CloudRunServiceTemplateSpecContainersResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.property.limitsInput"></a>

```go
func LimitsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RequestsInput`<sup>Optional</sup> <a name="RequestsInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.property.requestsInput"></a>

```go
func RequestsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.property.limits"></a>

```go
func Limits() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.property.requests"></a>

```go
func Requests() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunServiceTemplateSpecContainersResources
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersResources">CloudRunServiceTemplateSpecContainersResources</a>

---


### CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference <a name="CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.resetService"></a>

```go
func ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpc">CloudRunServiceTemplateSpecContainersStartupProbeGrpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunServiceTemplateSpecContainersStartupProbeGrpc
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpc">CloudRunServiceTemplateSpecContainersStartupProbeGrpc</a>

---


### CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList <a name="CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.get"></a>

```go
func Get(index *f64) CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference <a name="CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference <a name="CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.putHttpHeaders">PutHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.resetHttpHeaders">ResetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpHeaders` <a name="PutHttpHeaders" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.putHttpHeaders"></a>

```go
func PutHttpHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHttpHeaders` <a name="ResetHttpHeaders" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.resetHttpHeaders"></a>

```go
func ResetHttpHeaders()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.httpHeaders">HttpHeaders</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList">CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput">HttpHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGet">CloudRunServiceTemplateSpecContainersStartupProbeHttpGet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpHeaders`<sup>Required</sup> <a name="HttpHeaders" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.httpHeaders"></a>

```go
func HttpHeaders() CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList">CloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList</a>

---

##### `HttpHeadersInput`<sup>Optional</sup> <a name="HttpHeadersInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```go
func HttpHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunServiceTemplateSpecContainersStartupProbeHttpGet
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGet">CloudRunServiceTemplateSpecContainersStartupProbeHttpGet</a>

---


### CloudRunServiceTemplateSpecContainersStartupProbeOutputReference <a name="CloudRunServiceTemplateSpecContainersStartupProbeOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersStartupProbeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunServiceTemplateSpecContainersStartupProbeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.putGrpc">PutGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.putHttpGet">PutHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.putTcpSocket">PutTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetGrpc">ResetGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetHttpGet">ResetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetInitialDelaySeconds">ResetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetPeriodSeconds">ResetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetTcpSocket">ResetTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGrpc` <a name="PutGrpc" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.putGrpc"></a>

```go
func PutGrpc(value CloudRunServiceTemplateSpecContainersStartupProbeGrpc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.putGrpc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpc">CloudRunServiceTemplateSpecContainersStartupProbeGrpc</a>

---

##### `PutHttpGet` <a name="PutHttpGet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.putHttpGet"></a>

```go
func PutHttpGet(value CloudRunServiceTemplateSpecContainersStartupProbeHttpGet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGet">CloudRunServiceTemplateSpecContainersStartupProbeHttpGet</a>

---

##### `PutTcpSocket` <a name="PutTcpSocket" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.putTcpSocket"></a>

```go
func PutTcpSocket(value CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.putTcpSocket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket">CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket</a>

---

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetFailureThreshold"></a>

```go
func ResetFailureThreshold()
```

##### `ResetGrpc` <a name="ResetGrpc" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetGrpc"></a>

```go
func ResetGrpc()
```

##### `ResetHttpGet` <a name="ResetHttpGet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetHttpGet"></a>

```go
func ResetHttpGet()
```

##### `ResetInitialDelaySeconds` <a name="ResetInitialDelaySeconds" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetInitialDelaySeconds"></a>

```go
func ResetInitialDelaySeconds()
```

##### `ResetPeriodSeconds` <a name="ResetPeriodSeconds" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetPeriodSeconds"></a>

```go
func ResetPeriodSeconds()
```

##### `ResetTcpSocket` <a name="ResetTcpSocket" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetTcpSocket"></a>

```go
func ResetTcpSocket()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resetTimeoutSeconds"></a>

```go
func ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.grpc">Grpc</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference">CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference">CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.tcpSocket">TcpSocket</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference">CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.grpcInput">GrpcInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpc">CloudRunServiceTemplateSpecContainersStartupProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.httpGetInput">HttpGetInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGet">CloudRunServiceTemplateSpecContainersStartupProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.initialDelaySecondsInput">InitialDelaySecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.tcpSocketInput">TcpSocketInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket">CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbe">CloudRunServiceTemplateSpecContainersStartupProbe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Grpc`<sup>Required</sup> <a name="Grpc" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.grpc"></a>

```go
func Grpc() CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference">CloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference</a>

---

##### `HttpGet`<sup>Required</sup> <a name="HttpGet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.httpGet"></a>

```go
func HttpGet() CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference">CloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference</a>

---

##### `TcpSocket`<sup>Required</sup> <a name="TcpSocket" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.tcpSocket"></a>

```go
func TcpSocket() CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference">CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference</a>

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.failureThresholdInput"></a>

```go
func FailureThresholdInput() *f64
```

- *Type:* *f64

---

##### `GrpcInput`<sup>Optional</sup> <a name="GrpcInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.grpcInput"></a>

```go
func GrpcInput() CloudRunServiceTemplateSpecContainersStartupProbeGrpc
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeGrpc">CloudRunServiceTemplateSpecContainersStartupProbeGrpc</a>

---

##### `HttpGetInput`<sup>Optional</sup> <a name="HttpGetInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.httpGetInput"></a>

```go
func HttpGetInput() CloudRunServiceTemplateSpecContainersStartupProbeHttpGet
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeHttpGet">CloudRunServiceTemplateSpecContainersStartupProbeHttpGet</a>

---

##### `InitialDelaySecondsInput`<sup>Optional</sup> <a name="InitialDelaySecondsInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.initialDelaySecondsInput"></a>

```go
func InitialDelaySecondsInput() *f64
```

- *Type:* *f64

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.periodSecondsInput"></a>

```go
func PeriodSecondsInput() *f64
```

- *Type:* *f64

---

##### `TcpSocketInput`<sup>Optional</sup> <a name="TcpSocketInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.tcpSocketInput"></a>

```go
func TcpSocketInput() CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket">CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket</a>

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.timeoutSecondsInput"></a>

```go
func TimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `InitialDelaySeconds`<sup>Required</sup> <a name="InitialDelaySeconds" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.initialDelaySeconds"></a>

```go
func InitialDelaySeconds() *f64
```

- *Type:* *f64

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.periodSeconds"></a>

```go
func PeriodSeconds() *f64
```

- *Type:* *f64

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunServiceTemplateSpecContainersStartupProbe
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbe">CloudRunServiceTemplateSpecContainersStartupProbe</a>

---


### CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference <a name="CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket">CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket">CloudRunServiceTemplateSpecContainersStartupProbeTcpSocket</a>

---


### CloudRunServiceTemplateSpecContainersVolumeMountsList <a name="CloudRunServiceTemplateSpecContainersVolumeMountsList" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersVolumeMountsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunServiceTemplateSpecContainersVolumeMountsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.get"></a>

```go
func Get(index *f64) CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference <a name="CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.mountPath">MountPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```go
func MountPathInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.mountPath"></a>

```go
func MountPath() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunServiceTemplateSpecOutputReference <a name="CloudRunServiceTemplateSpecOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunServiceTemplateSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.putContainers">PutContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.resetContainerConcurrency">ResetContainerConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.resetContainers">ResetContainers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.resetServiceAccountName">ResetServiceAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainers` <a name="PutContainers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.putContainers"></a>

```go
func PutContainers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.putContainers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVolumes` <a name="PutVolumes" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.putVolumes"></a>

```go
func PutVolumes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.putVolumes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetContainerConcurrency` <a name="ResetContainerConcurrency" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.resetContainerConcurrency"></a>

```go
func ResetContainerConcurrency()
```

##### `ResetContainers` <a name="ResetContainers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.resetContainers"></a>

```go
func ResetContainers()
```

##### `ResetServiceAccountName` <a name="ResetServiceAccountName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.resetServiceAccountName"></a>

```go
func ResetServiceAccountName()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.resetTimeoutSeconds"></a>

```go
func ResetTimeoutSeconds()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.resetVolumes"></a>

```go
func ResetVolumes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.containers">Containers</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList">CloudRunServiceTemplateSpecContainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.servingState">ServingState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList">CloudRunServiceTemplateSpecVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.containerConcurrencyInput">ContainerConcurrencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.containersInput">ContainersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.serviceAccountNameInput">ServiceAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.volumesInput">VolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.containerConcurrency">ContainerConcurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.serviceAccountName">ServiceAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpec">CloudRunServiceTemplateSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.containers"></a>

```go
func Containers() CloudRunServiceTemplateSpecContainersList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecContainersList">CloudRunServiceTemplateSpecContainersList</a>

---

##### `ServingState`<sup>Required</sup> <a name="ServingState" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.servingState"></a>

```go
func ServingState() *string
```

- *Type:* *string

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.volumes"></a>

```go
func Volumes() CloudRunServiceTemplateSpecVolumesList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList">CloudRunServiceTemplateSpecVolumesList</a>

---

##### `ContainerConcurrencyInput`<sup>Optional</sup> <a name="ContainerConcurrencyInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.containerConcurrencyInput"></a>

```go
func ContainerConcurrencyInput() *f64
```

- *Type:* *f64

---

##### `ContainersInput`<sup>Optional</sup> <a name="ContainersInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.containersInput"></a>

```go
func ContainersInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceAccountNameInput`<sup>Optional</sup> <a name="ServiceAccountNameInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.serviceAccountNameInput"></a>

```go
func ServiceAccountNameInput() *string
```

- *Type:* *string

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.timeoutSecondsInput"></a>

```go
func TimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.volumesInput"></a>

```go
func VolumesInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerConcurrency`<sup>Required</sup> <a name="ContainerConcurrency" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.containerConcurrency"></a>

```go
func ContainerConcurrency() *f64
```

- *Type:* *f64

---

##### `ServiceAccountName`<sup>Required</sup> <a name="ServiceAccountName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.serviceAccountName"></a>

```go
func ServiceAccountName() *string
```

- *Type:* *string

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunServiceTemplateSpec
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpec">CloudRunServiceTemplateSpec</a>

---


### CloudRunServiceTemplateSpecVolumesList <a name="CloudRunServiceTemplateSpecVolumesList" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunServiceTemplateSpecVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.get"></a>

```go
func Get(index *f64) CloudRunServiceTemplateSpecVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunServiceTemplateSpecVolumesOutputReference <a name="CloudRunServiceTemplateSpecVolumesOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunServiceTemplateSpecVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecret` <a name="PutSecret" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.putSecret"></a>

```go
func PutSecret(value CloudRunServiceTemplateSpecVolumesSecret)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecret">CloudRunServiceTemplateSpecVolumesSecret</a>

---

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.resetSecret"></a>

```go
func ResetSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference">CloudRunServiceTemplateSpecVolumesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.property.secretInput">SecretInput</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecret">CloudRunServiceTemplateSpecVolumesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.property.secret"></a>

```go
func Secret() CloudRunServiceTemplateSpecVolumesSecretOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference">CloudRunServiceTemplateSpecVolumesSecretOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.property.secretInput"></a>

```go
func SecretInput() CloudRunServiceTemplateSpecVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecret">CloudRunServiceTemplateSpecVolumesSecret</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunServiceTemplateSpecVolumesSecretItemsList <a name="CloudRunServiceTemplateSpecVolumesSecretItemsList" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecVolumesSecretItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunServiceTemplateSpecVolumesSecretItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.get"></a>

```go
func Get(index *f64) CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference <a name="CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.modeInput">ModeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.mode">Mode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.modeInput"></a>

```go
func ModeInput() *f64
```

- *Type:* *f64

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.mode"></a>

```go
func Mode() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunServiceTemplateSpecVolumesSecretOutputReference <a name="CloudRunServiceTemplateSpecVolumesSecretOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTemplateSpecVolumesSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunServiceTemplateSpecVolumesSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.resetDefaultMode">ResetDefaultMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.putItems.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultMode` <a name="ResetDefaultMode" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.resetDefaultMode"></a>

```go
func ResetDefaultMode()
```

##### `ResetItems` <a name="ResetItems" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.property.items">Items</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList">CloudRunServiceTemplateSpecVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.property.defaultModeInput">DefaultModeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.property.defaultMode">DefaultMode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecret">CloudRunServiceTemplateSpecVolumesSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.property.items"></a>

```go
func Items() CloudRunServiceTemplateSpecVolumesSecretItemsList
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretItemsList">CloudRunServiceTemplateSpecVolumesSecretItemsList</a>

---

##### `DefaultModeInput`<sup>Optional</sup> <a name="DefaultModeInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.property.defaultModeInput"></a>

```go
func DefaultModeInput() *f64
```

- *Type:* *f64

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `DefaultMode`<sup>Required</sup> <a name="DefaultMode" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.property.defaultMode"></a>

```go
func DefaultMode() *f64
```

- *Type:* *f64

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudRunServiceTemplateSpecVolumesSecret
```

- *Type:* <a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTemplateSpecVolumesSecret">CloudRunServiceTemplateSpecVolumesSecret</a>

---


### CloudRunServiceTimeoutsOutputReference <a name="CloudRunServiceTimeoutsOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudRunServiceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunServiceTrafficList <a name="CloudRunServiceTrafficList" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTrafficList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudRunServiceTrafficList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.get"></a>

```go
func Get(index *f64) CloudRunServiceTrafficOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudRunServiceTrafficOutputReference <a name="CloudRunServiceTrafficOutputReference" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudrunservice"

cloudrunservice.NewCloudRunServiceTrafficOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudRunServiceTrafficOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.resetLatestRevision">ResetLatestRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.resetRevisionName">ResetRevisionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLatestRevision` <a name="ResetLatestRevision" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.resetLatestRevision"></a>

```go
func ResetLatestRevision()
```

##### `ResetRevisionName` <a name="ResetRevisionName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.resetRevisionName"></a>

```go
func ResetRevisionName()
```

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.resetTag"></a>

```go
func ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.property.latestRevisionInput">LatestRevisionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.property.percentInput">PercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.property.revisionNameInput">RevisionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.property.tagInput">TagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.property.latestRevision">LatestRevision</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.property.percent">Percent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.property.revisionName">RevisionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.property.tag">Tag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `LatestRevisionInput`<sup>Optional</sup> <a name="LatestRevisionInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.property.latestRevisionInput"></a>

```go
func LatestRevisionInput() interface{}
```

- *Type:* interface{}

---

##### `PercentInput`<sup>Optional</sup> <a name="PercentInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.property.percentInput"></a>

```go
func PercentInput() *f64
```

- *Type:* *f64

---

##### `RevisionNameInput`<sup>Optional</sup> <a name="RevisionNameInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.property.revisionNameInput"></a>

```go
func RevisionNameInput() *string
```

- *Type:* *string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.property.tagInput"></a>

```go
func TagInput() *string
```

- *Type:* *string

---

##### `LatestRevision`<sup>Required</sup> <a name="LatestRevision" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.property.latestRevision"></a>

```go
func LatestRevision() interface{}
```

- *Type:* interface{}

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.property.percent"></a>

```go
func Percent() *f64
```

- *Type:* *f64

---

##### `RevisionName`<sup>Required</sup> <a name="RevisionName" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.property.revisionName"></a>

```go
func RevisionName() *string
```

- *Type:* *string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.property.tag"></a>

```go
func Tag() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudRunService.CloudRunServiceTrafficOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



