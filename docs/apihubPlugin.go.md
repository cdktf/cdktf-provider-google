# `apihubPlugin` Submodule <a name="`apihubPlugin` Submodule" id="@cdktf/provider-google.apihubPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApihubPlugin <a name="ApihubPlugin" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin google_apihub_plugin}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

apihubplugin.NewApihubPlugin(scope Construct, id *string, config ApihubPluginConfig) ApihubPlugin
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig">ApihubPluginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig">ApihubPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.putActionsConfig">PutActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.putConfigTemplate">PutConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.putDocumentation">PutDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.putHostingService">PutHostingService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetActionsConfig">ResetActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetConfigTemplate">ResetConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetDocumentation">ResetDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetHostingService">ResetHostingService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetPluginCategory">ResetPluginCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActionsConfig` <a name="PutActionsConfig" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putActionsConfig"></a>

```go
func PutActionsConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putActionsConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutConfigTemplate` <a name="PutConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putConfigTemplate"></a>

```go
func PutConfigTemplate(value ApihubPluginConfigTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putConfigTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate">ApihubPluginConfigTemplate</a>

---

##### `PutDocumentation` <a name="PutDocumentation" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putDocumentation"></a>

```go
func PutDocumentation(value ApihubPluginDocumentation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putDocumentation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation">ApihubPluginDocumentation</a>

---

##### `PutHostingService` <a name="PutHostingService" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putHostingService"></a>

```go
func PutHostingService(value ApihubPluginHostingService)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putHostingService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService">ApihubPluginHostingService</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putTimeouts"></a>

```go
func PutTimeouts(value ApihubPluginTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts">ApihubPluginTimeouts</a>

---

##### `ResetActionsConfig` <a name="ResetActionsConfig" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetActionsConfig"></a>

```go
func ResetActionsConfig()
```

##### `ResetConfigTemplate` <a name="ResetConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetConfigTemplate"></a>

```go
func ResetConfigTemplate()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDocumentation` <a name="ResetDocumentation" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetDocumentation"></a>

```go
func ResetDocumentation()
```

##### `ResetHostingService` <a name="ResetHostingService" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetHostingService"></a>

```go
func ResetHostingService()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetId"></a>

```go
func ResetId()
```

##### `ResetPluginCategory` <a name="ResetPluginCategory" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetPluginCategory"></a>

```go
func ResetPluginCategory()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApihubPlugin resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

apihubplugin.ApihubPlugin_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

apihubplugin.ApihubPlugin_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

apihubplugin.ApihubPlugin_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

apihubplugin.ApihubPlugin_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApihubPlugin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApihubPlugin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApihubPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApihubPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.actionsConfig">ActionsConfig</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList">ApihubPluginActionsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.configTemplate">ConfigTemplate</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference">ApihubPluginConfigTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.documentation">Documentation</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference">ApihubPluginDocumentationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.hostingService">HostingService</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference">ApihubPluginHostingServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.ownershipType">OwnershipType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference">ApihubPluginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.actionsConfigInput">ActionsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.configTemplateInput">ConfigTemplateInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate">ApihubPluginConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.documentationInput">DocumentationInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation">ApihubPluginDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.hostingServiceInput">HostingServiceInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService">ApihubPluginHostingService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.pluginCategoryInput">PluginCategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.pluginIdInput">PluginIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.pluginCategory">PluginCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.pluginId">PluginId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionsConfig`<sup>Required</sup> <a name="ActionsConfig" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.actionsConfig"></a>

```go
func ActionsConfig() ApihubPluginActionsConfigList
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList">ApihubPluginActionsConfigList</a>

---

##### `ConfigTemplate`<sup>Required</sup> <a name="ConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.configTemplate"></a>

```go
func ConfigTemplate() ApihubPluginConfigTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference">ApihubPluginConfigTemplateOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Documentation`<sup>Required</sup> <a name="Documentation" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.documentation"></a>

```go
func Documentation() ApihubPluginDocumentationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference">ApihubPluginDocumentationOutputReference</a>

---

##### `HostingService`<sup>Required</sup> <a name="HostingService" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.hostingService"></a>

```go
func HostingService() ApihubPluginHostingServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference">ApihubPluginHostingServiceOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OwnershipType`<sup>Required</sup> <a name="OwnershipType" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.ownershipType"></a>

```go
func OwnershipType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.timeouts"></a>

```go
func Timeouts() ApihubPluginTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference">ApihubPluginTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ActionsConfigInput`<sup>Optional</sup> <a name="ActionsConfigInput" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.actionsConfigInput"></a>

```go
func ActionsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigTemplateInput`<sup>Optional</sup> <a name="ConfigTemplateInput" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.configTemplateInput"></a>

```go
func ConfigTemplateInput() ApihubPluginConfigTemplate
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate">ApihubPluginConfigTemplate</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DocumentationInput`<sup>Optional</sup> <a name="DocumentationInput" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.documentationInput"></a>

```go
func DocumentationInput() ApihubPluginDocumentation
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation">ApihubPluginDocumentation</a>

---

##### `HostingServiceInput`<sup>Optional</sup> <a name="HostingServiceInput" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.hostingServiceInput"></a>

```go
func HostingServiceInput() ApihubPluginHostingService
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService">ApihubPluginHostingService</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PluginCategoryInput`<sup>Optional</sup> <a name="PluginCategoryInput" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.pluginCategoryInput"></a>

```go
func PluginCategoryInput() *string
```

- *Type:* *string

---

##### `PluginIdInput`<sup>Optional</sup> <a name="PluginIdInput" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.pluginIdInput"></a>

```go
func PluginIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PluginCategory`<sup>Required</sup> <a name="PluginCategory" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.pluginCategory"></a>

```go
func PluginCategory() *string
```

- *Type:* *string

---

##### `PluginId`<sup>Required</sup> <a name="PluginId" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.pluginId"></a>

```go
func PluginId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apihubPlugin.ApihubPlugin.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApihubPluginActionsConfig <a name="ApihubPluginActionsConfig" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

&apihubplugin.ApihubPluginActionsConfig {
	Description: *string,
	DisplayName: *string,
	Id: *string,
	TriggerMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.property.description">Description</a></code> | <code>*string</code> | The description of the operation performed by the action. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the action. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.property.id">Id</a></code> | <code>*string</code> | The id of the action. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.property.triggerMode">TriggerMode</a></code> | <code>*string</code> | The trigger mode supported by the action. Possible values: TRIGGER_MODE_UNSPECIFIED API_HUB_ON_DEMAND_TRIGGER API_HUB_SCHEDULE_TRIGGER NON_API_HUB_MANAGED. |

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the operation performed by the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#description ApihubPlugin#description}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#display_name ApihubPlugin#display_name}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

The id of the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#id ApihubPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TriggerMode`<sup>Required</sup> <a name="TriggerMode" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfig.property.triggerMode"></a>

```go
TriggerMode *string
```

- *Type:* *string

The trigger mode supported by the action. Possible values: TRIGGER_MODE_UNSPECIFIED API_HUB_ON_DEMAND_TRIGGER API_HUB_SCHEDULE_TRIGGER NON_API_HUB_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#trigger_mode ApihubPlugin#trigger_mode}

---

### ApihubPluginConfig <a name="ApihubPluginConfig" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

&apihubplugin.ApihubPluginConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Location: *string,
	PluginId: *string,
	ActionsConfig: interface{},
	ConfigTemplate: github.com/cdktf/cdktf-provider-google-go/google/v16.apihubPlugin.ApihubPluginConfigTemplate,
	Description: *string,
	Documentation: github.com/cdktf/cdktf-provider-google-go/google/v16.apihubPlugin.ApihubPluginDocumentation,
	HostingService: github.com/cdktf/cdktf-provider-google-go/google/v16.apihubPlugin.ApihubPluginHostingService,
	Id: *string,
	PluginCategory: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.apihubPlugin.ApihubPluginTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the plugin. Max length is 50 characters (Unicode code points). |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.pluginId">PluginId</a></code> | <code>*string</code> | The ID to use for the Plugin resource, which will become the final component of the Plugin's resource name. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.actionsConfig">ActionsConfig</a></code> | <code>interface{}</code> | actions_config block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.configTemplate">ConfigTemplate</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate">ApihubPluginConfigTemplate</a></code> | config_template block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.description">Description</a></code> | <code>*string</code> | The plugin description. Max length is 2000 characters (Unicode code points). |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.documentation">Documentation</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation">ApihubPluginDocumentation</a></code> | documentation block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.hostingService">HostingService</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService">ApihubPluginHostingService</a></code> | hosting_service block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#id ApihubPlugin#id}. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.pluginCategory">PluginCategory</a></code> | <code>*string</code> | Possible values: PLUGIN_CATEGORY_UNSPECIFIED API_GATEWAY API_PRODUCER. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#project ApihubPlugin#project}. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts">ApihubPluginTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the plugin. Max length is 50 characters (Unicode code points).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#display_name ApihubPlugin#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#location ApihubPlugin#location}

---

##### `PluginId`<sup>Required</sup> <a name="PluginId" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.pluginId"></a>

```go
PluginId *string
```

- *Type:* *string

The ID to use for the Plugin resource, which will become the final component of the Plugin's resource name.

This field is optional.

* If provided, the same will be used. The service will throw an error if
  the specified id is already used by another Plugin resource in the API hub
  instance.
* If not provided, a system generated id will be used.

This value should be 4-63 characters, overall resource name which will be
of format
'projects/{project}/locations/{location}/plugins/{plugin}',
its length is limited to 1000 characters and valid characters are
/a-z[0-9]-_/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#plugin_id ApihubPlugin#plugin_id}

---

##### `ActionsConfig`<sup>Optional</sup> <a name="ActionsConfig" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.actionsConfig"></a>

```go
ActionsConfig interface{}
```

- *Type:* interface{}

actions_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#actions_config ApihubPlugin#actions_config}

---

##### `ConfigTemplate`<sup>Optional</sup> <a name="ConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.configTemplate"></a>

```go
ConfigTemplate ApihubPluginConfigTemplate
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate">ApihubPluginConfigTemplate</a>

config_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#config_template ApihubPlugin#config_template}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The plugin description. Max length is 2000 characters (Unicode code points).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#description ApihubPlugin#description}

---

##### `Documentation`<sup>Optional</sup> <a name="Documentation" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.documentation"></a>

```go
Documentation ApihubPluginDocumentation
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation">ApihubPluginDocumentation</a>

documentation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#documentation ApihubPlugin#documentation}

---

##### `HostingService`<sup>Optional</sup> <a name="HostingService" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.hostingService"></a>

```go
HostingService ApihubPluginHostingService
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService">ApihubPluginHostingService</a>

hosting_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#hosting_service ApihubPlugin#hosting_service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#id ApihubPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PluginCategory`<sup>Optional</sup> <a name="PluginCategory" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.pluginCategory"></a>

```go
PluginCategory *string
```

- *Type:* *string

Possible values: PLUGIN_CATEGORY_UNSPECIFIED API_GATEWAY API_PRODUCER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#plugin_category ApihubPlugin#plugin_category}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#project ApihubPlugin#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfig.property.timeouts"></a>

```go
Timeouts ApihubPluginTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts">ApihubPluginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#timeouts ApihubPlugin#timeouts}

---

### ApihubPluginConfigTemplate <a name="ApihubPluginConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

&apihubplugin.ApihubPluginConfigTemplate {
	AdditionalConfigTemplate: interface{},
	AuthConfigTemplate: github.com/cdktf/cdktf-provider-google-go/google/v16.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate.property.additionalConfigTemplate">AdditionalConfigTemplate</a></code> | <code>interface{}</code> | additional_config_template block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate.property.authConfigTemplate">AuthConfigTemplate</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate">ApihubPluginConfigTemplateAuthConfigTemplate</a></code> | auth_config_template block. |

---

##### `AdditionalConfigTemplate`<sup>Optional</sup> <a name="AdditionalConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate.property.additionalConfigTemplate"></a>

```go
AdditionalConfigTemplate interface{}
```

- *Type:* interface{}

additional_config_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#additional_config_template ApihubPlugin#additional_config_template}

---

##### `AuthConfigTemplate`<sup>Optional</sup> <a name="AuthConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate.property.authConfigTemplate"></a>

```go
AuthConfigTemplate ApihubPluginConfigTemplateAuthConfigTemplate
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate">ApihubPluginConfigTemplateAuthConfigTemplate</a>

auth_config_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#auth_config_template ApihubPlugin#auth_config_template}

---

### ApihubPluginConfigTemplateAdditionalConfigTemplate <a name="ApihubPluginConfigTemplateAdditionalConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

&apihubplugin.ApihubPluginConfigTemplateAdditionalConfigTemplate {
	Id: *string,
	ValueType: *string,
	Description: *string,
	EnumOptions: interface{},
	MultiSelectOptions: interface{},
	Required: interface{},
	ValidationRegex: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.id">Id</a></code> | <code>*string</code> | ID of the config variable. Must be unique within the configuration. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.valueType">ValueType</a></code> | <code>*string</code> | Type of the parameter: string, int, bool etc. Possible values: VALUE_TYPE_UNSPECIFIED STRING INT BOOL SECRET ENUM MULTI_SELECT MULTI_STRING MULTI_INT. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.description">Description</a></code> | <code>*string</code> | Description. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.enumOptions">EnumOptions</a></code> | <code>interface{}</code> | enum_options block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.multiSelectOptions">MultiSelectOptions</a></code> | <code>interface{}</code> | multi_select_options block. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.required">Required</a></code> | <code>interface{}</code> | Flag represents that this 'ConfigVariable' must be provided for a PluginInstance. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.validationRegex">ValidationRegex</a></code> | <code>*string</code> | Regular expression in RE2 syntax used for validating the 'value' of a 'ConfigVariable'. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.id"></a>

```go
Id *string
```

- *Type:* *string

ID of the config variable. Must be unique within the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#id ApihubPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.valueType"></a>

```go
ValueType *string
```

- *Type:* *string

Type of the parameter: string, int, bool etc. Possible values: VALUE_TYPE_UNSPECIFIED STRING INT BOOL SECRET ENUM MULTI_SELECT MULTI_STRING MULTI_INT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#value_type ApihubPlugin#value_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#description ApihubPlugin#description}

---

##### `EnumOptions`<sup>Optional</sup> <a name="EnumOptions" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.enumOptions"></a>

```go
EnumOptions interface{}
```

- *Type:* interface{}

enum_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#enum_options ApihubPlugin#enum_options}

---

##### `MultiSelectOptions`<sup>Optional</sup> <a name="MultiSelectOptions" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.multiSelectOptions"></a>

```go
MultiSelectOptions interface{}
```

- *Type:* interface{}

multi_select_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#multi_select_options ApihubPlugin#multi_select_options}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Flag represents that this 'ConfigVariable' must be provided for a PluginInstance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#required ApihubPlugin#required}

---

##### `ValidationRegex`<sup>Optional</sup> <a name="ValidationRegex" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplate.property.validationRegex"></a>

```go
ValidationRegex *string
```

- *Type:* *string

Regular expression in RE2 syntax used for validating the 'value' of a 'ConfigVariable'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#validation_regex ApihubPlugin#validation_regex}

---

### ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions <a name="ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

&apihubplugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions {
	DisplayName: *string,
	Id: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name of the option. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.id">Id</a></code> | <code>*string</code> | Id of the option. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.description">Description</a></code> | <code>*string</code> | Description of the option. |

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#display_name ApihubPlugin#display_name}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.id"></a>

```go
Id *string
```

- *Type:* *string

Id of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#id ApihubPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#description ApihubPlugin#description}

---

### ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions <a name="ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

&apihubplugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions {
	DisplayName: *string,
	Id: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name of the option. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.id">Id</a></code> | <code>*string</code> | Id of the option. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.description">Description</a></code> | <code>*string</code> | Description of the option. |

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#display_name ApihubPlugin#display_name}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.id"></a>

```go
Id *string
```

- *Type:* *string

Id of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#id ApihubPlugin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#description ApihubPlugin#description}

---

### ApihubPluginConfigTemplateAuthConfigTemplate <a name="ApihubPluginConfigTemplateAuthConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

&apihubplugin.ApihubPluginConfigTemplateAuthConfigTemplate {
	SupportedAuthTypes: *[]*string,
	ServiceAccount: github.com/cdktf/cdktf-provider-google-go/google/v16.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate.property.supportedAuthTypes">SupportedAuthTypes</a></code> | <code>*[]*string</code> | The list of authentication types supported by the plugin. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a></code> | service_account block. |

---

##### `SupportedAuthTypes`<sup>Required</sup> <a name="SupportedAuthTypes" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate.property.supportedAuthTypes"></a>

```go
SupportedAuthTypes *[]*string
```

- *Type:* *[]*string

The list of authentication types supported by the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#supported_auth_types ApihubPlugin#supported_auth_types}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate.property.serviceAccount"></a>

```go
ServiceAccount ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#service_account ApihubPlugin#service_account}

---

### ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount <a name="ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

&apihubplugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount {
	ServiceAccount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The service account to be used for authenticating request. |

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The service account to be used for authenticating request.

The 'iam.serviceAccounts.getAccessToken' permission should be granted on
this service account to the impersonator service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#service_account ApihubPlugin#service_account}

---

### ApihubPluginDocumentation <a name="ApihubPluginDocumentation" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

&apihubplugin.ApihubPluginDocumentation {
	ExternalUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation.property.externalUri">ExternalUri</a></code> | <code>*string</code> | The uri of the externally hosted documentation. |

---

##### `ExternalUri`<sup>Optional</sup> <a name="ExternalUri" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation.property.externalUri"></a>

```go
ExternalUri *string
```

- *Type:* *string

The uri of the externally hosted documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#external_uri ApihubPlugin#external_uri}

---

### ApihubPluginHostingService <a name="ApihubPluginHostingService" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

&apihubplugin.ApihubPluginHostingService {
	ServiceUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService.property.serviceUri">ServiceUri</a></code> | <code>*string</code> | The URI of the service implemented by the plugin developer, used to invoke the plugin's functionality. |

---

##### `ServiceUri`<sup>Optional</sup> <a name="ServiceUri" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService.property.serviceUri"></a>

```go
ServiceUri *string
```

- *Type:* *string

The URI of the service implemented by the plugin developer, used to invoke the plugin's functionality.

This information is only required for
user defined plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#service_uri ApihubPlugin#service_uri}

---

### ApihubPluginTimeouts <a name="ApihubPluginTimeouts" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

&apihubplugin.ApihubPluginTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#create ApihubPlugin#create}. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#delete ApihubPlugin#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#create ApihubPlugin#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/apihub_plugin#delete ApihubPlugin#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApihubPluginActionsConfigList <a name="ApihubPluginActionsConfigList" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

apihubplugin.NewApihubPluginActionsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApihubPluginActionsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.get"></a>

```go
func Get(index *f64) ApihubPluginActionsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApihubPluginActionsConfigOutputReference <a name="ApihubPluginActionsConfigOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

apihubplugin.NewApihubPluginActionsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApihubPluginActionsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.triggerModeInput">TriggerModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.triggerMode">TriggerMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TriggerModeInput`<sup>Optional</sup> <a name="TriggerModeInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.triggerModeInput"></a>

```go
func TriggerModeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TriggerMode`<sup>Required</sup> <a name="TriggerMode" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.triggerMode"></a>

```go
func TriggerMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginActionsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList <a name="ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

apihubplugin.NewApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.get"></a>

```go
func Get(index *f64) ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference <a name="ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

apihubplugin.NewApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApihubPluginConfigTemplateAdditionalConfigTemplateList <a name="ApihubPluginConfigTemplateAdditionalConfigTemplateList" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

apihubplugin.NewApihubPluginConfigTemplateAdditionalConfigTemplateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApihubPluginConfigTemplateAdditionalConfigTemplateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.get"></a>

```go
func Get(index *f64) ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList <a name="ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

apihubplugin.NewApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.get"></a>

```go
func Get(index *f64) ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference <a name="ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

apihubplugin.NewApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference <a name="ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

apihubplugin.NewApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putEnumOptions">PutEnumOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putMultiSelectOptions">PutMultiSelectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetEnumOptions">ResetEnumOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetMultiSelectOptions">ResetMultiSelectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetValidationRegex">ResetValidationRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnumOptions` <a name="PutEnumOptions" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putEnumOptions"></a>

```go
func PutEnumOptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putEnumOptions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMultiSelectOptions` <a name="PutMultiSelectOptions" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putMultiSelectOptions"></a>

```go
func PutMultiSelectOptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.putMultiSelectOptions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnumOptions` <a name="ResetEnumOptions" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetEnumOptions"></a>

```go
func ResetEnumOptions()
```

##### `ResetMultiSelectOptions` <a name="ResetMultiSelectOptions" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetMultiSelectOptions"></a>

```go
func ResetMultiSelectOptions()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetRequired"></a>

```go
func ResetRequired()
```

##### `ResetValidationRegex` <a name="ResetValidationRegex" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.resetValidationRegex"></a>

```go
func ResetValidationRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.enumOptions">EnumOptions</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList">ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.multiSelectOptions">MultiSelectOptions</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList">ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.enumOptionsInput">EnumOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.multiSelectOptionsInput">MultiSelectOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.validationRegexInput">ValidationRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.validationRegex">ValidationRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnumOptions`<sup>Required</sup> <a name="EnumOptions" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.enumOptions"></a>

```go
func EnumOptions() ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList">ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList</a>

---

##### `MultiSelectOptions`<sup>Required</sup> <a name="MultiSelectOptions" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.multiSelectOptions"></a>

```go
func MultiSelectOptions() ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList">ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnumOptionsInput`<sup>Optional</sup> <a name="EnumOptionsInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.enumOptionsInput"></a>

```go
func EnumOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MultiSelectOptionsInput`<sup>Optional</sup> <a name="MultiSelectOptionsInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.multiSelectOptionsInput"></a>

```go
func MultiSelectOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `ValidationRegexInput`<sup>Optional</sup> <a name="ValidationRegexInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.validationRegexInput"></a>

```go
func ValidationRegexInput() *string
```

- *Type:* *string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.valueTypeInput"></a>

```go
func ValueTypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `ValidationRegex`<sup>Required</sup> <a name="ValidationRegex" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.validationRegex"></a>

```go
func ValidationRegex() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApihubPluginConfigTemplateAuthConfigTemplateOutputReference <a name="ApihubPluginConfigTemplateAuthConfigTemplateOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

apihubplugin.NewApihubPluginConfigTemplateAuthConfigTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApihubPluginConfigTemplateAuthConfigTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.putServiceAccount">PutServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServiceAccount` <a name="PutServiceAccount" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.putServiceAccount"></a>

```go
func PutServiceAccount(value ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.putServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a>

---

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.supportedAuthTypesInput">SupportedAuthTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.supportedAuthTypes">SupportedAuthTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate">ApihubPluginConfigTemplateAuthConfigTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a>

---

##### `SupportedAuthTypesInput`<sup>Optional</sup> <a name="SupportedAuthTypesInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.supportedAuthTypesInput"></a>

```go
func SupportedAuthTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SupportedAuthTypes`<sup>Required</sup> <a name="SupportedAuthTypes" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.supportedAuthTypes"></a>

```go
func SupportedAuthTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() ApihubPluginConfigTemplateAuthConfigTemplate
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate">ApihubPluginConfigTemplateAuthConfigTemplate</a>

---


### ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference <a name="ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

apihubplugin.NewApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount">ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount</a>

---


### ApihubPluginConfigTemplateOutputReference <a name="ApihubPluginConfigTemplateOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

apihubplugin.NewApihubPluginConfigTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApihubPluginConfigTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.putAdditionalConfigTemplate">PutAdditionalConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.putAuthConfigTemplate">PutAuthConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.resetAdditionalConfigTemplate">ResetAdditionalConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.resetAuthConfigTemplate">ResetAuthConfigTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalConfigTemplate` <a name="PutAdditionalConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.putAdditionalConfigTemplate"></a>

```go
func PutAdditionalConfigTemplate(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.putAdditionalConfigTemplate.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAuthConfigTemplate` <a name="PutAuthConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.putAuthConfigTemplate"></a>

```go
func PutAuthConfigTemplate(value ApihubPluginConfigTemplateAuthConfigTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.putAuthConfigTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate">ApihubPluginConfigTemplateAuthConfigTemplate</a>

---

##### `ResetAdditionalConfigTemplate` <a name="ResetAdditionalConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.resetAdditionalConfigTemplate"></a>

```go
func ResetAdditionalConfigTemplate()
```

##### `ResetAuthConfigTemplate` <a name="ResetAuthConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.resetAuthConfigTemplate"></a>

```go
func ResetAuthConfigTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.additionalConfigTemplate">AdditionalConfigTemplate</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList">ApihubPluginConfigTemplateAdditionalConfigTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.authConfigTemplate">AuthConfigTemplate</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference">ApihubPluginConfigTemplateAuthConfigTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.additionalConfigTemplateInput">AdditionalConfigTemplateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.authConfigTemplateInput">AuthConfigTemplateInput</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate">ApihubPluginConfigTemplateAuthConfigTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate">ApihubPluginConfigTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalConfigTemplate`<sup>Required</sup> <a name="AdditionalConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.additionalConfigTemplate"></a>

```go
func AdditionalConfigTemplate() ApihubPluginConfigTemplateAdditionalConfigTemplateList
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAdditionalConfigTemplateList">ApihubPluginConfigTemplateAdditionalConfigTemplateList</a>

---

##### `AuthConfigTemplate`<sup>Required</sup> <a name="AuthConfigTemplate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.authConfigTemplate"></a>

```go
func AuthConfigTemplate() ApihubPluginConfigTemplateAuthConfigTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplateOutputReference">ApihubPluginConfigTemplateAuthConfigTemplateOutputReference</a>

---

##### `AdditionalConfigTemplateInput`<sup>Optional</sup> <a name="AdditionalConfigTemplateInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.additionalConfigTemplateInput"></a>

```go
func AdditionalConfigTemplateInput() interface{}
```

- *Type:* interface{}

---

##### `AuthConfigTemplateInput`<sup>Optional</sup> <a name="AuthConfigTemplateInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.authConfigTemplateInput"></a>

```go
func AuthConfigTemplateInput() ApihubPluginConfigTemplateAuthConfigTemplate
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateAuthConfigTemplate">ApihubPluginConfigTemplateAuthConfigTemplate</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() ApihubPluginConfigTemplate
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginConfigTemplate">ApihubPluginConfigTemplate</a>

---


### ApihubPluginDocumentationOutputReference <a name="ApihubPluginDocumentationOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

apihubplugin.NewApihubPluginDocumentationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApihubPluginDocumentationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.resetExternalUri">ResetExternalUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExternalUri` <a name="ResetExternalUri" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.resetExternalUri"></a>

```go
func ResetExternalUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.externalUriInput">ExternalUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.externalUri">ExternalUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation">ApihubPluginDocumentation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalUriInput`<sup>Optional</sup> <a name="ExternalUriInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.externalUriInput"></a>

```go
func ExternalUriInput() *string
```

- *Type:* *string

---

##### `ExternalUri`<sup>Required</sup> <a name="ExternalUri" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.externalUri"></a>

```go
func ExternalUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentationOutputReference.property.internalValue"></a>

```go
func InternalValue() ApihubPluginDocumentation
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginDocumentation">ApihubPluginDocumentation</a>

---


### ApihubPluginHostingServiceOutputReference <a name="ApihubPluginHostingServiceOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

apihubplugin.NewApihubPluginHostingServiceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApihubPluginHostingServiceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.resetServiceUri">ResetServiceUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceUri` <a name="ResetServiceUri" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.resetServiceUri"></a>

```go
func ResetServiceUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.serviceUriInput">ServiceUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.serviceUri">ServiceUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService">ApihubPluginHostingService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceUriInput`<sup>Optional</sup> <a name="ServiceUriInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.serviceUriInput"></a>

```go
func ServiceUriInput() *string
```

- *Type:* *string

---

##### `ServiceUri`<sup>Required</sup> <a name="ServiceUri" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.serviceUri"></a>

```go
func ServiceUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginHostingServiceOutputReference.property.internalValue"></a>

```go
func InternalValue() ApihubPluginHostingService
```

- *Type:* <a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginHostingService">ApihubPluginHostingService</a>

---


### ApihubPluginTimeoutsOutputReference <a name="ApihubPluginTimeoutsOutputReference" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubplugin"

apihubplugin.NewApihubPluginTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApihubPluginTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubPlugin.ApihubPluginTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



