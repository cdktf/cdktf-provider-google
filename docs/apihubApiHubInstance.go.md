# `apihubApiHubInstance` Submodule <a name="`apihubApiHubInstance` Submodule" id="@cdktf/provider-google.apihubApiHubInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApihubApiHubInstance <a name="ApihubApiHubInstance" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apihub_api_hub_instance google_apihub_api_hub_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubapihubinstance"

apihubapihubinstance.NewApihubApiHubInstance(scope Construct, id *string, config ApihubApiHubInstanceConfig) ApihubApiHubInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig">ApihubApiHubInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig">ApihubApiHubInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetApiHubInstanceId">ResetApiHubInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.putConfig"></a>

```go
func PutConfig(value ApihubApiHubInstanceConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA">ApihubApiHubInstanceConfigA</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.putTimeouts"></a>

```go
func PutTimeouts(value ApihubApiHubInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts">ApihubApiHubInstanceTimeouts</a>

---

##### `ResetApiHubInstanceId` <a name="ResetApiHubInstanceId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetApiHubInstanceId"></a>

```go
func ResetApiHubInstanceId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApihubApiHubInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubapihubinstance"

apihubapihubinstance.ApihubApiHubInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubapihubinstance"

apihubapihubinstance.ApihubApiHubInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubapihubinstance"

apihubapihubinstance.ApihubApiHubInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubapihubinstance"

apihubapihubinstance.ApihubApiHubInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApihubApiHubInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApihubApiHubInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApihubApiHubInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apihub_api_hub_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApihubApiHubInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference">ApihubApiHubInstanceConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference">ApihubApiHubInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.apiHubInstanceIdInput">ApiHubInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA">ApihubApiHubInstanceConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.apiHubInstanceId">ApiHubInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.config"></a>

```go
func Config() ApihubApiHubInstanceConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference">ApihubApiHubInstanceConfigAOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.timeouts"></a>

```go
func Timeouts() ApihubApiHubInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference">ApihubApiHubInstanceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ApiHubInstanceIdInput`<sup>Optional</sup> <a name="ApiHubInstanceIdInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.apiHubInstanceIdInput"></a>

```go
func ApiHubInstanceIdInput() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.configInput"></a>

```go
func ConfigInput() ApihubApiHubInstanceConfigA
```

- *Type:* <a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA">ApihubApiHubInstanceConfigA</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApiHubInstanceId`<sup>Required</sup> <a name="ApiHubInstanceId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.apiHubInstanceId"></a>

```go
func ApiHubInstanceId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApihubApiHubInstanceConfig <a name="ApihubApiHubInstanceConfig" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubapihubinstance"

&apihubapihubinstance.ApihubApiHubInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Config: github.com/cdktf/cdktf-provider-google-go/google/v16.apihubApiHubInstance.ApihubApiHubInstanceConfigA,
	Location: *string,
	ApiHubInstanceId: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.apihubApiHubInstance.ApihubApiHubInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA">ApihubApiHubInstanceConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.apiHubInstanceId">ApiHubInstanceId</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.description">Description</a></code> | <code>*string</code> | Optional. Description of the ApiHub instance. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apihub_api_hub_instance#id ApihubApiHubInstance#id}. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. Instance labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apihub_api_hub_instance#project ApihubApiHubInstance#project}. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts">ApihubApiHubInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.config"></a>

```go
Config ApihubApiHubInstanceConfigA
```

- *Type:* <a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA">ApihubApiHubInstanceConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apihub_api_hub_instance#config ApihubApiHubInstance#config}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apihub_api_hub_instance#location ApihubApiHubInstance#location}

---

##### `ApiHubInstanceId`<sup>Optional</sup> <a name="ApiHubInstanceId" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.apiHubInstanceId"></a>

```go
ApiHubInstanceId *string
```

- *Type:* *string

Optional.

Identifier to assign to the Api Hub instance. Must be unique within
scope of the parent resource. If the field is not provided,
system generated id will be used.

This value should be 4-40 characters, and valid characters
are '/a-z[0-9]-_/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apihub_api_hub_instance#api_hub_instance_id ApihubApiHubInstance#api_hub_instance_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. Description of the ApiHub instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apihub_api_hub_instance#description ApihubApiHubInstance#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apihub_api_hub_instance#id ApihubApiHubInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional. Instance labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apihub_api_hub_instance#labels ApihubApiHubInstance#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apihub_api_hub_instance#project ApihubApiHubInstance#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfig.property.timeouts"></a>

```go
Timeouts ApihubApiHubInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts">ApihubApiHubInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apihub_api_hub_instance#timeouts ApihubApiHubInstance#timeouts}

---

### ApihubApiHubInstanceConfigA <a name="ApihubApiHubInstanceConfigA" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubapihubinstance"

&apihubapihubinstance.ApihubApiHubInstanceConfigA {
	CmekKeyName: *string,
	DisableSearch: interface{},
	EncryptionType: *string,
	VertexLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.property.cmekKeyName">CmekKeyName</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.property.disableSearch">DisableSearch</a></code> | <code>interface{}</code> | Optional. If true, the search will be disabled for the instance. The default value is false. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.property.vertexLocation">VertexLocation</a></code> | <code>*string</code> | Optional. The name of the Vertex AI location where the data store is stored. |

---

##### `CmekKeyName`<sup>Optional</sup> <a name="CmekKeyName" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.property.cmekKeyName"></a>

```go
CmekKeyName *string
```

- *Type:* *string

Optional.

The Customer Managed Encryption Key (CMEK) used for data encryption.
The CMEK name should follow the format of
'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)',
where the location must match the instance location.
If the CMEK is not provided, a GMEK will be created for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apihub_api_hub_instance#cmek_key_name ApihubApiHubInstance#cmek_key_name}

---

##### `DisableSearch`<sup>Optional</sup> <a name="DisableSearch" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.property.disableSearch"></a>

```go
DisableSearch interface{}
```

- *Type:* interface{}

Optional. If true, the search will be disabled for the instance. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apihub_api_hub_instance#disable_search ApihubApiHubInstance#disable_search}

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.property.encryptionType"></a>

```go
EncryptionType *string
```

- *Type:* *string

Optional.

Encryption type for the region. If the encryption type is CMEK, the
cmek_key_name must be provided. If no encryption type is provided,
GMEK will be used.
Possible values:
ENCRYPTION_TYPE_UNSPECIFIED
GMEK
CMEK

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apihub_api_hub_instance#encryption_type ApihubApiHubInstance#encryption_type}

---

##### `VertexLocation`<sup>Optional</sup> <a name="VertexLocation" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA.property.vertexLocation"></a>

```go
VertexLocation *string
```

- *Type:* *string

Optional. The name of the Vertex AI location where the data store is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apihub_api_hub_instance#vertex_location ApihubApiHubInstance#vertex_location}

---

### ApihubApiHubInstanceTimeouts <a name="ApihubApiHubInstanceTimeouts" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubapihubinstance"

&apihubapihubinstance.ApihubApiHubInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apihub_api_hub_instance#create ApihubApiHubInstance#create}. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apihub_api_hub_instance#delete ApihubApiHubInstance#delete}. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apihub_api_hub_instance#update ApihubApiHubInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apihub_api_hub_instance#create ApihubApiHubInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apihub_api_hub_instance#delete ApihubApiHubInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/apihub_api_hub_instance#update ApihubApiHubInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApihubApiHubInstanceConfigAOutputReference <a name="ApihubApiHubInstanceConfigAOutputReference" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubapihubinstance"

apihubapihubinstance.NewApihubApiHubInstanceConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApihubApiHubInstanceConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resetCmekKeyName">ResetCmekKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resetDisableSearch">ResetDisableSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resetVertexLocation">ResetVertexLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCmekKeyName` <a name="ResetCmekKeyName" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resetCmekKeyName"></a>

```go
func ResetCmekKeyName()
```

##### `ResetDisableSearch` <a name="ResetDisableSearch" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resetDisableSearch"></a>

```go
func ResetDisableSearch()
```

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resetEncryptionType"></a>

```go
func ResetEncryptionType()
```

##### `ResetVertexLocation` <a name="ResetVertexLocation" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.resetVertexLocation"></a>

```go
func ResetVertexLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.cmekKeyNameInput">CmekKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.disableSearchInput">DisableSearchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.vertexLocationInput">VertexLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.cmekKeyName">CmekKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.disableSearch">DisableSearch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.vertexLocation">VertexLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA">ApihubApiHubInstanceConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CmekKeyNameInput`<sup>Optional</sup> <a name="CmekKeyNameInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.cmekKeyNameInput"></a>

```go
func CmekKeyNameInput() *string
```

- *Type:* *string

---

##### `DisableSearchInput`<sup>Optional</sup> <a name="DisableSearchInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.disableSearchInput"></a>

```go
func DisableSearchInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.encryptionTypeInput"></a>

```go
func EncryptionTypeInput() *string
```

- *Type:* *string

---

##### `VertexLocationInput`<sup>Optional</sup> <a name="VertexLocationInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.vertexLocationInput"></a>

```go
func VertexLocationInput() *string
```

- *Type:* *string

---

##### `CmekKeyName`<sup>Required</sup> <a name="CmekKeyName" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.cmekKeyName"></a>

```go
func CmekKeyName() *string
```

- *Type:* *string

---

##### `DisableSearch`<sup>Required</sup> <a name="DisableSearch" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.disableSearch"></a>

```go
func DisableSearch() interface{}
```

- *Type:* interface{}

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `VertexLocation`<sup>Required</sup> <a name="VertexLocation" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.vertexLocation"></a>

```go
func VertexLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() ApihubApiHubInstanceConfigA
```

- *Type:* <a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceConfigA">ApihubApiHubInstanceConfigA</a>

---


### ApihubApiHubInstanceTimeoutsOutputReference <a name="ApihubApiHubInstanceTimeoutsOutputReference" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apihubapihubinstance"

apihubapihubinstance.NewApihubApiHubInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApihubApiHubInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apihubApiHubInstance.ApihubApiHubInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



