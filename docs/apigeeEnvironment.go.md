# `apigeeEnvironment` Submodule <a name="`apigeeEnvironment` Submodule" id="@cdktf/provider-google.apigeeEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeEnvironment <a name="ApigeeEnvironment" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment google_apigee_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeenvironment"

apigeeenvironment.NewApigeeEnvironment(scope Construct, id *string, config ApigeeEnvironmentConfig) ApigeeEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig">ApigeeEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig">ApigeeEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putClientIpResolutionConfig">PutClientIpResolutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putNodeConfig">PutNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetApiProxyType">ResetApiProxyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetClientIpResolutionConfig">ResetClientIpResolutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetDeploymentType">ResetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetForwardProxyUri">ResetForwardProxyUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetNodeConfig">ResetNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutClientIpResolutionConfig` <a name="PutClientIpResolutionConfig" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putClientIpResolutionConfig"></a>

```go
func PutClientIpResolutionConfig(value ApigeeEnvironmentClientIpResolutionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putClientIpResolutionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig">ApigeeEnvironmentClientIpResolutionConfig</a>

---

##### `PutNodeConfig` <a name="PutNodeConfig" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putNodeConfig"></a>

```go
func PutNodeConfig(value ApigeeEnvironmentNodeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig">ApigeeEnvironmentNodeConfig</a>

---

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putProperties"></a>

```go
func PutProperties(value ApigeeEnvironmentProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentProperties">ApigeeEnvironmentProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putTimeouts"></a>

```go
func PutTimeouts(value ApigeeEnvironmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts">ApigeeEnvironmentTimeouts</a>

---

##### `ResetApiProxyType` <a name="ResetApiProxyType" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetApiProxyType"></a>

```go
func ResetApiProxyType()
```

##### `ResetClientIpResolutionConfig` <a name="ResetClientIpResolutionConfig" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetClientIpResolutionConfig"></a>

```go
func ResetClientIpResolutionConfig()
```

##### `ResetDeploymentType` <a name="ResetDeploymentType" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetDeploymentType"></a>

```go
func ResetDeploymentType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetForwardProxyUri` <a name="ResetForwardProxyUri" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetForwardProxyUri"></a>

```go
func ResetForwardProxyUri()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetId"></a>

```go
func ResetId()
```

##### `ResetNodeConfig` <a name="ResetNodeConfig" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetNodeConfig"></a>

```go
func ResetNodeConfig()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeenvironment"

apigeeenvironment.ApigeeEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeenvironment"

apigeeenvironment.ApigeeEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeenvironment"

apigeeenvironment.ApigeeEnvironment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeenvironment"

apigeeenvironment.ApigeeEnvironment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApigeeEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApigeeEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApigeeEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.clientIpResolutionConfig">ClientIpResolutionConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference">ApigeeEnvironmentClientIpResolutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference">ApigeeEnvironmentNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference">ApigeeEnvironmentPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference">ApigeeEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.apiProxyTypeInput">ApiProxyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.clientIpResolutionConfigInput">ClientIpResolutionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig">ApigeeEnvironmentClientIpResolutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.forwardProxyUriInput">ForwardProxyUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.nodeConfigInput">NodeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig">ApigeeEnvironmentNodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentProperties">ApigeeEnvironmentProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.apiProxyType">ApiProxyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.forwardProxyUri">ForwardProxyUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientIpResolutionConfig`<sup>Required</sup> <a name="ClientIpResolutionConfig" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.clientIpResolutionConfig"></a>

```go
func ClientIpResolutionConfig() ApigeeEnvironmentClientIpResolutionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference">ApigeeEnvironmentClientIpResolutionConfigOutputReference</a>

---

##### `NodeConfig`<sup>Required</sup> <a name="NodeConfig" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.nodeConfig"></a>

```go
func NodeConfig() ApigeeEnvironmentNodeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference">ApigeeEnvironmentNodeConfigOutputReference</a>

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.properties"></a>

```go
func Properties() ApigeeEnvironmentPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference">ApigeeEnvironmentPropertiesOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.timeouts"></a>

```go
func Timeouts() ApigeeEnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference">ApigeeEnvironmentTimeoutsOutputReference</a>

---

##### `ApiProxyTypeInput`<sup>Optional</sup> <a name="ApiProxyTypeInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.apiProxyTypeInput"></a>

```go
func ApiProxyTypeInput() *string
```

- *Type:* *string

---

##### `ClientIpResolutionConfigInput`<sup>Optional</sup> <a name="ClientIpResolutionConfigInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.clientIpResolutionConfigInput"></a>

```go
func ClientIpResolutionConfigInput() ApigeeEnvironmentClientIpResolutionConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig">ApigeeEnvironmentClientIpResolutionConfig</a>

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.deploymentTypeInput"></a>

```go
func DeploymentTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ForwardProxyUriInput`<sup>Optional</sup> <a name="ForwardProxyUriInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.forwardProxyUriInput"></a>

```go
func ForwardProxyUriInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeConfigInput`<sup>Optional</sup> <a name="NodeConfigInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.nodeConfigInput"></a>

```go
func NodeConfigInput() ApigeeEnvironmentNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig">ApigeeEnvironmentNodeConfig</a>

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.propertiesInput"></a>

```go
func PropertiesInput() ApigeeEnvironmentProperties
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentProperties">ApigeeEnvironmentProperties</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ApiProxyType`<sup>Required</sup> <a name="ApiProxyType" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.apiProxyType"></a>

```go
func ApiProxyType() *string
```

- *Type:* *string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.deploymentType"></a>

```go
func DeploymentType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ForwardProxyUri`<sup>Required</sup> <a name="ForwardProxyUri" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.forwardProxyUri"></a>

```go
func ForwardProxyUri() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeEnvironmentClientIpResolutionConfig <a name="ApigeeEnvironmentClientIpResolutionConfig" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeenvironment"

&apigeeenvironment.ApigeeEnvironmentClientIpResolutionConfig {
	HeaderIndexAlgorithm: github.com/cdktf/cdktf-provider-google-go/google/v16.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig.property.headerIndexAlgorithm">HeaderIndexAlgorithm</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm">ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm</a></code> | header_index_algorithm block. |

---

##### `HeaderIndexAlgorithm`<sup>Optional</sup> <a name="HeaderIndexAlgorithm" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig.property.headerIndexAlgorithm"></a>

```go
HeaderIndexAlgorithm ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm">ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm</a>

header_index_algorithm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#header_index_algorithm ApigeeEnvironment#header_index_algorithm}

---

### ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm <a name="ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeenvironment"

&apigeeenvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm {
	IpHeaderIndex: *f64,
	IpHeaderName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm.property.ipHeaderIndex">IpHeaderIndex</a></code> | <code>*f64</code> | The index of the ip in the header. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm.property.ipHeaderName">IpHeaderName</a></code> | <code>*string</code> | The name of the header to extract the client ip from. We are currently only supporting the X-Forwarded-For header. |

---

##### `IpHeaderIndex`<sup>Required</sup> <a name="IpHeaderIndex" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm.property.ipHeaderIndex"></a>

```go
IpHeaderIndex *f64
```

- *Type:* *f64

The index of the ip in the header.

Positive indices 0, 1, 2, 3 chooses indices from the left (first ips). Negative indices -1, -2, -3 chooses indices from the right (last ips).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#ip_header_index ApigeeEnvironment#ip_header_index}

---

##### `IpHeaderName`<sup>Required</sup> <a name="IpHeaderName" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm.property.ipHeaderName"></a>

```go
IpHeaderName *string
```

- *Type:* *string

The name of the header to extract the client ip from. We are currently only supporting the X-Forwarded-For header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#ip_header_name ApigeeEnvironment#ip_header_name}

---

### ApigeeEnvironmentConfig <a name="ApigeeEnvironmentConfig" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeenvironment"

&apigeeenvironment.ApigeeEnvironmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	OrgId: *string,
	ApiProxyType: *string,
	ClientIpResolutionConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig,
	DeploymentType: *string,
	Description: *string,
	DisplayName: *string,
	ForwardProxyUri: *string,
	Id: *string,
	NodeConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.apigeeEnvironment.ApigeeEnvironmentNodeConfig,
	Properties: github.com/cdktf/cdktf-provider-google-go/google/v16.apigeeEnvironment.ApigeeEnvironmentProperties,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.apigeeEnvironment.ApigeeEnvironmentTimeouts,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.name">Name</a></code> | <code>*string</code> | The resource ID of the environment. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.orgId">OrgId</a></code> | <code>*string</code> | The Apigee Organization associated with the Apigee environment, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.apiProxyType">ApiProxyType</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.clientIpResolutionConfig">ClientIpResolutionConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig">ApigeeEnvironmentClientIpResolutionConfig</a></code> | client_ip_resolution_config block. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.description">Description</a></code> | <code>*string</code> | Description of the environment. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name of the environment. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.forwardProxyUri">ForwardProxyUri</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#id ApigeeEnvironment#id}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig">ApigeeEnvironmentNodeConfig</a></code> | node_config block. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentProperties">ApigeeEnvironmentProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts">ApigeeEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.type">Type</a></code> | <code>*string</code> | Types that can be selected for an Environment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource ID of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#name ApigeeEnvironment#name}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

The Apigee Organization associated with the Apigee environment, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#org_id ApigeeEnvironment#org_id}

---

##### `ApiProxyType`<sup>Optional</sup> <a name="ApiProxyType" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.apiProxyType"></a>

```go
ApiProxyType *string
```

- *Type:* *string

Optional.

API Proxy type supported by the environment. The type can be set when creating
the Environment and cannot be changed. Possible values: ["API_PROXY_TYPE_UNSPECIFIED", "PROGRAMMABLE", "CONFIGURABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#api_proxy_type ApigeeEnvironment#api_proxy_type}

---

##### `ClientIpResolutionConfig`<sup>Optional</sup> <a name="ClientIpResolutionConfig" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.clientIpResolutionConfig"></a>

```go
ClientIpResolutionConfig ApigeeEnvironmentClientIpResolutionConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig">ApigeeEnvironmentClientIpResolutionConfig</a>

client_ip_resolution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#client_ip_resolution_config ApigeeEnvironment#client_ip_resolution_config}

---

##### `DeploymentType`<sup>Optional</sup> <a name="DeploymentType" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.deploymentType"></a>

```go
DeploymentType *string
```

- *Type:* *string

Optional.

Deployment type supported by the environment. The deployment type can be
set when creating the environment and cannot be changed. When you enable archive
deployment, you will be prevented from performing a subset of actions within the
environment, including:
Managing the deployment of API proxy or shared flow revisions;
Creating, updating, or deleting resource files;
Creating, updating, or deleting target servers. Possible values: ["DEPLOYMENT_TYPE_UNSPECIFIED", "PROXY", "ARCHIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#deployment_type ApigeeEnvironment#deployment_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#description ApigeeEnvironment#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#display_name ApigeeEnvironment#display_name}

---

##### `ForwardProxyUri`<sup>Optional</sup> <a name="ForwardProxyUri" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.forwardProxyUri"></a>

```go
ForwardProxyUri *string
```

- *Type:* *string

Optional.

URI of the forward proxy to be applied to the runtime instances in this environment. Must be in the format of {scheme}://{hostname}:{port}. Note that the scheme must be one of "http" or "https", and the port must be supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#forward_proxy_uri ApigeeEnvironment#forward_proxy_uri}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#id ApigeeEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NodeConfig`<sup>Optional</sup> <a name="NodeConfig" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.nodeConfig"></a>

```go
NodeConfig ApigeeEnvironmentNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig">ApigeeEnvironmentNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#node_config ApigeeEnvironment#node_config}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.properties"></a>

```go
Properties ApigeeEnvironmentProperties
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentProperties">ApigeeEnvironmentProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#properties ApigeeEnvironment#properties}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.timeouts"></a>

```go
Timeouts ApigeeEnvironmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts">ApigeeEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#timeouts ApigeeEnvironment#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Types that can be selected for an Environment.

Each of the types are
limited by capability and capacity. Refer to Apigee's public documentation
to understand about each of these types in details.
An Apigee org can support heterogeneous Environments. Possible values: ["ENVIRONMENT_TYPE_UNSPECIFIED", "BASE", "INTERMEDIATE", "COMPREHENSIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#type ApigeeEnvironment#type}

---

### ApigeeEnvironmentNodeConfig <a name="ApigeeEnvironmentNodeConfig" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeenvironment"

&apigeeenvironment.ApigeeEnvironmentNodeConfig {
	MaxNodeCount: *string,
	MinNodeCount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig.property.maxNodeCount">MaxNodeCount</a></code> | <code>*string</code> | The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig.property.minNodeCount">MinNodeCount</a></code> | <code>*string</code> | The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment. |

---

##### `MaxNodeCount`<sup>Optional</sup> <a name="MaxNodeCount" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig.property.maxNodeCount"></a>

```go
MaxNodeCount *string
```

- *Type:* *string

The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment.

If not specified, the default is determined by the
recommended maximum number of nodes for that gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#max_node_count ApigeeEnvironment#max_node_count}

---

##### `MinNodeCount`<sup>Optional</sup> <a name="MinNodeCount" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig.property.minNodeCount"></a>

```go
MinNodeCount *string
```

- *Type:* *string

The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment.

If not specified, the default is determined by the
recommended minimum number of nodes for that gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#min_node_count ApigeeEnvironment#min_node_count}

---

### ApigeeEnvironmentProperties <a name="ApigeeEnvironmentProperties" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeenvironment"

&apigeeenvironment.ApigeeEnvironmentProperties {
	Property: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentProperties.property.property">Property</a></code> | <code>interface{}</code> | property block. |

---

##### `Property`<sup>Optional</sup> <a name="Property" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentProperties.property.property"></a>

```go
Property interface{}
```

- *Type:* interface{}

property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#property ApigeeEnvironment#property}

---

### ApigeeEnvironmentPropertiesProperty <a name="ApigeeEnvironmentPropertiesProperty" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesProperty.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeenvironment"

&apigeeenvironment.ApigeeEnvironmentPropertiesProperty {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesProperty.property.name">Name</a></code> | <code>*string</code> | The property key. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesProperty.property.value">Value</a></code> | <code>*string</code> | The property value. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesProperty.property.name"></a>

```go
Name *string
```

- *Type:* *string

The property key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#name ApigeeEnvironment#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesProperty.property.value"></a>

```go
Value *string
```

- *Type:* *string

The property value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#value ApigeeEnvironment#value}

---

### ApigeeEnvironmentTimeouts <a name="ApigeeEnvironmentTimeouts" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeenvironment"

&apigeeenvironment.ApigeeEnvironmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#create ApigeeEnvironment#create}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#delete ApigeeEnvironment#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#update ApigeeEnvironment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#create ApigeeEnvironment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#delete ApigeeEnvironment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/apigee_environment#update ApigeeEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference <a name="ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeenvironment"

apigeeenvironment.NewApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.ipHeaderIndexInput">IpHeaderIndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.ipHeaderNameInput">IpHeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.ipHeaderIndex">IpHeaderIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.ipHeaderName">IpHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm">ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpHeaderIndexInput`<sup>Optional</sup> <a name="IpHeaderIndexInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.ipHeaderIndexInput"></a>

```go
func IpHeaderIndexInput() *f64
```

- *Type:* *f64

---

##### `IpHeaderNameInput`<sup>Optional</sup> <a name="IpHeaderNameInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.ipHeaderNameInput"></a>

```go
func IpHeaderNameInput() *string
```

- *Type:* *string

---

##### `IpHeaderIndex`<sup>Required</sup> <a name="IpHeaderIndex" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.ipHeaderIndex"></a>

```go
func IpHeaderIndex() *f64
```

- *Type:* *f64

---

##### `IpHeaderName`<sup>Required</sup> <a name="IpHeaderName" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.ipHeaderName"></a>

```go
func IpHeaderName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm">ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm</a>

---


### ApigeeEnvironmentClientIpResolutionConfigOutputReference <a name="ApigeeEnvironmentClientIpResolutionConfigOutputReference" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeenvironment"

apigeeenvironment.NewApigeeEnvironmentClientIpResolutionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeEnvironmentClientIpResolutionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.putHeaderIndexAlgorithm">PutHeaderIndexAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.resetHeaderIndexAlgorithm">ResetHeaderIndexAlgorithm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaderIndexAlgorithm` <a name="PutHeaderIndexAlgorithm" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.putHeaderIndexAlgorithm"></a>

```go
func PutHeaderIndexAlgorithm(value ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.putHeaderIndexAlgorithm.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm">ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm</a>

---

##### `ResetHeaderIndexAlgorithm` <a name="ResetHeaderIndexAlgorithm" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.resetHeaderIndexAlgorithm"></a>

```go
func ResetHeaderIndexAlgorithm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.property.headerIndexAlgorithm">HeaderIndexAlgorithm</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference">ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.property.headerIndexAlgorithmInput">HeaderIndexAlgorithmInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm">ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig">ApigeeEnvironmentClientIpResolutionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderIndexAlgorithm`<sup>Required</sup> <a name="HeaderIndexAlgorithm" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.property.headerIndexAlgorithm"></a>

```go
func HeaderIndexAlgorithm() ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference">ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithmOutputReference</a>

---

##### `HeaderIndexAlgorithmInput`<sup>Optional</sup> <a name="HeaderIndexAlgorithmInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.property.headerIndexAlgorithmInput"></a>

```go
func HeaderIndexAlgorithmInput() ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm">ApigeeEnvironmentClientIpResolutionConfigHeaderIndexAlgorithm</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigeeEnvironmentClientIpResolutionConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentClientIpResolutionConfig">ApigeeEnvironmentClientIpResolutionConfig</a>

---


### ApigeeEnvironmentNodeConfigOutputReference <a name="ApigeeEnvironmentNodeConfigOutputReference" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeenvironment"

apigeeenvironment.NewApigeeEnvironmentNodeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeEnvironmentNodeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.resetMaxNodeCount">ResetMaxNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.resetMinNodeCount">ResetMinNodeCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxNodeCount` <a name="ResetMaxNodeCount" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.resetMaxNodeCount"></a>

```go
func ResetMaxNodeCount()
```

##### `ResetMinNodeCount` <a name="ResetMinNodeCount" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.resetMinNodeCount"></a>

```go
func ResetMinNodeCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.currentAggregateNodeCount">CurrentAggregateNodeCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.maxNodeCountInput">MaxNodeCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.minNodeCountInput">MinNodeCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.maxNodeCount">MaxNodeCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.minNodeCount">MinNodeCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig">ApigeeEnvironmentNodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrentAggregateNodeCount`<sup>Required</sup> <a name="CurrentAggregateNodeCount" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.currentAggregateNodeCount"></a>

```go
func CurrentAggregateNodeCount() *string
```

- *Type:* *string

---

##### `MaxNodeCountInput`<sup>Optional</sup> <a name="MaxNodeCountInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.maxNodeCountInput"></a>

```go
func MaxNodeCountInput() *string
```

- *Type:* *string

---

##### `MinNodeCountInput`<sup>Optional</sup> <a name="MinNodeCountInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.minNodeCountInput"></a>

```go
func MinNodeCountInput() *string
```

- *Type:* *string

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.maxNodeCount"></a>

```go
func MaxNodeCount() *string
```

- *Type:* *string

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.minNodeCount"></a>

```go
func MinNodeCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigeeEnvironmentNodeConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentNodeConfig">ApigeeEnvironmentNodeConfig</a>

---


### ApigeeEnvironmentPropertiesOutputReference <a name="ApigeeEnvironmentPropertiesOutputReference" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeenvironment"

apigeeenvironment.NewApigeeEnvironmentPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeEnvironmentPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.putProperty">PutProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.resetProperty">ResetProperty</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProperty` <a name="PutProperty" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.putProperty"></a>

```go
func PutProperty(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.putProperty.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetProperty` <a name="ResetProperty" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.resetProperty"></a>

```go
func ResetProperty()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.property.property">Property</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList">ApigeeEnvironmentPropertiesPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.property.propertyInput">PropertyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentProperties">ApigeeEnvironmentProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.property.property"></a>

```go
func Property() ApigeeEnvironmentPropertiesPropertyList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList">ApigeeEnvironmentPropertiesPropertyList</a>

---

##### `PropertyInput`<sup>Optional</sup> <a name="PropertyInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.property.propertyInput"></a>

```go
func PropertyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigeeEnvironmentProperties
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentProperties">ApigeeEnvironmentProperties</a>

---


### ApigeeEnvironmentPropertiesPropertyList <a name="ApigeeEnvironmentPropertiesPropertyList" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeenvironment"

apigeeenvironment.NewApigeeEnvironmentPropertiesPropertyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigeeEnvironmentPropertiesPropertyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.get"></a>

```go
func Get(index *f64) ApigeeEnvironmentPropertiesPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigeeEnvironmentPropertiesPropertyOutputReference <a name="ApigeeEnvironmentPropertiesPropertyOutputReference" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeenvironment"

apigeeenvironment.NewApigeeEnvironmentPropertiesPropertyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigeeEnvironmentPropertiesPropertyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentPropertiesPropertyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigeeEnvironmentTimeoutsOutputReference <a name="ApigeeEnvironmentTimeoutsOutputReference" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeeenvironment"

apigeeenvironment.NewApigeeEnvironmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeEnvironmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeEnvironment.ApigeeEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



